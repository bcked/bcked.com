import { ethers } from 'ethers';
import { providers } from '@0xsequence/multicall';

import { PADSWAP_PAIR_ABI, ERC20_ABI, MULTICALL_ADDRESS } from './constants.js';
import { EcosystemId, ECOSYSTEMS } from './ecosystem.js';

function toFloat(bn: ethers.BigNumber, units: number = 18) {
	return parseFloat(ethers.utils.formatUnits(bn, units));
}

async function getVaultLpValue(ecosystemId: EcosystemId) {
	const ecosystem = ECOSYSTEMS[ecosystemId];

	let multicall = new providers.MulticallProvider(ecosystem.dataseed, {
		batchSize: 300,
		timeWindow: 0,
		contract: MULTICALL_ADDRESS
	});

	const blockNumber = await multicall.getBlockNumber();
	// Dict for all retrieved data
	let pairs: any = {};
	for (const pairAddress of ecosystem.vault.pairs) {
		pairs[pairAddress] = {
			token0Address: '',
			token1Address: '',
			pairReserves: 0,
			token0Name: '',
			token1Name: '',
			token0Decimals: 18,
			token1Decimals: 18,
			pairTotalSupply: 0,
			pairInVault: 0
		};
	}
	// Data from the pair contracts
	let promises = [ecosystem.priceModel.syncWithin(blockNumber, 12)];
	for (const pairAddress of ecosystem.vault.pairs) {
		const pairContract = new ethers.Contract(pairAddress, PADSWAP_PAIR_ABI, multicall);
		const p1 = pairContract.token0().then((res: any) => (pairs[pairAddress].token0Address = res));
		const p2 = pairContract.token1().then((res: any) => (pairs[pairAddress].token1Address = res));
		const p3 = pairContract
			.getReserves()
			.then((res: any) => (pairs[pairAddress].pairReserves = res));
		const p4 = pairContract
			.totalSupply()
			.then((res: any) => (pairs[pairAddress].pairTotalSupply = res));
		const p5 = pairContract
			.balanceOf(ecosystem.vault.address)
			.then((res: any) => (pairs[pairAddress].pairInVault = res));
		promises.push(p1, p2, p3, p4, p5);
	}
	await Promise.all(promises);
	// Data from individual token contracts
	promises = [ecosystem.priceModel.syncWithin(blockNumber, 12)];
	for (const pairAddress of ecosystem.vault.pairs) {
		const token0Contract = new ethers.Contract(
			pairs[pairAddress].token0Address,
			ERC20_ABI,
			multicall
		);
		const token1Contract = new ethers.Contract(
			pairs[pairAddress].token1Address,
			ERC20_ABI,
			multicall
		);
		const p1 = token0Contract.name().then((res: any) => (pairs[pairAddress].token0Name = res));
		const p2 = token1Contract.name().then((res: any) => (pairs[pairAddress].token1Name = res));
		const p3 = token0Contract
			.decimals()
			.then((res: any) => (pairs[pairAddress].token0Decimals = res));
		const p4 = token1Contract
			.decimals()
			.then((res: any) => (pairs[pairAddress].token1Decimals = res));
		promises.push(p1, p2, p3, p4);
	}
	await Promise.all(promises);

	const tokens: { [key: string]: string } = ecosystem.vault.pairs.reduce(
		(a, v) => ({
			...a,
			[pairs[v].token0Name]: pairs[v].token0Address,
			[pairs[v].token1Name]: pairs[v].token1Address
		}),
		{}
	);

	let totalBackingUSD = 0;
	let vaultUsd: { [key: string]: number } = Object.entries(tokens).reduce(
		(a, [name]) => ({ ...a, [name]: 0 }),
		{}
	);
	let vaultHoldings: { [key: string]: number } = Object.entries(tokens).reduce(
		(a, [name]) => ({ ...a, [name]: 0 }),
		{}
	);
	// Calculating the token reserves within liquidity pairs
	for (const pairAddress of ecosystem.vault.pairs) {
		try {
			// Total reserves of tokens in the liquidity pool
			const reserve0 = parseFloat(
				ethers.utils.formatUnits(
					pairs[pairAddress].pairReserves._reserve0,
					pairs[pairAddress].token0Decimals
				)
			);
			const reserve1 = parseFloat(
				ethers.utils.formatUnits(
					pairs[pairAddress].pairReserves._reserve1,
					pairs[pairAddress].token1Decimals
				)
			);
			// Token prices
			const token0Price = ecosystem.priceModel.getPriceUsd(
				pairs[pairAddress].token0Address,
				pairs[pairAddress].token0Decimals
			);
			const token1Price = ecosystem.priceModel.getPriceUsd(
				pairs[pairAddress].token1Address,
				pairs[pairAddress].token1Decimals
			);
			// Percentage of LP tokens that are held by the vault
			const vaultTokenShare: number =
				toFloat(pairs[pairAddress].pairInVault) / toFloat(pairs[pairAddress].pairTotalSupply);
			// Number of individual tokens in the vault
			const token0InVault: number = reserve0 * vaultTokenShare;
			const token1InVault: number = reserve1 * vaultTokenShare;
			vaultHoldings[pairs[pairAddress].token0Name] += token0InVault;
			vaultHoldings[pairs[pairAddress].token1Name] += token1InVault;
			// USD value of tokens in the vault
			const token0USD = token0Price * token0InVault;
			const token1USD = token1Price * token1InVault;
			vaultUsd[pairs[pairAddress].token0Name] += token0USD;
			vaultUsd[pairs[pairAddress].token1Name] += token1USD;

			totalBackingUSD += token0USD;
			totalBackingUSD += token1USD;
		} catch (error) {
			console.log(
				`Couldn't load data for pair ${pairs[pairAddress].token0Name}/${pairs[pairAddress].token1Name}.`
			);
			continue;
		}
	}

	// Balances of individual tokens
	// TODO: call everything simultaneously
	for (const [tokenName, tokenAddress] of Object.entries(tokens)) {
		try {
			const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, multicall);
			const tokenDecimals = await tokenContract.decimals();
			const tokenBalance = await tokenContract.balanceOf(ecosystem.vault.address);
			const tokenPrice = ecosystem.priceModel.getPriceUsd(tokenAddress);
			const tokenUSD = tokenPrice * toFloat(tokenBalance, tokenDecimals);
			vaultHoldings[tokenName] += toFloat(tokenBalance, tokenDecimals);
			vaultUsd[tokenName] += tokenUSD;
			totalBackingUSD += tokenUSD;
		} catch {
			console.log(`Couldn't load data for token ${tokenName}.`);
			continue;
		}
	}

	console.log(vaultUsd);
	console.log(vaultHoldings);
}

await getVaultLpValue(EcosystemId.BSC);
