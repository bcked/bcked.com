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

	const tokens = ecosystem.vault.pairs.reduce(
		(a, v) => ({ ...a, [pairs[v].token0Name]: 0, [pairs[v].token0Name]: 0 }),
		{ 'BUSD Token': 0 }
	);

	let totalBackingUSD = 0;
	let vaultData: { [key: string]: number } = Object.assign({}, tokens);
	let vaultHoldings: { [key: string]: number } = Object.assign({}, tokens);
	// Calculating the token reserves within liquidity pairs
	for (const pairAddress of ecosystem.vault.pairs) {
		// Total reserves of tokens in the liquidity pool
		const reserve0 = parseFloat(
			ethers.utils.formatEther(pairs[pairAddress].pairReserves._reserve0)
		);
		const reserve1 = parseFloat(
			ethers.utils.formatEther(pairs[pairAddress].pairReserves._reserve1)
		);
		// Token prices
		const token0Price = ecosystem.priceModel.getPriceUsd(pairs[pairAddress].token0Address);
		const token1Price = ecosystem.priceModel.getPriceUsd(pairs[pairAddress].token1Address);
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
		vaultData[pairs[pairAddress].token0Name] += token0USD;
		vaultData[pairs[pairAddress].token1Name] += token1USD;

		totalBackingUSD += token0USD;
		totalBackingUSD += token1USD;
	}

	// Balances of individual tokens
	// TODO: call everything simultaneously
	for (const token of ecosystem.vault.tokens) {
		const tokenContract = new ethers.Contract(token, ERC20_ABI, multicall);
		const tokenName = await tokenContract.name();
		const tokenBalance = await tokenContract.balanceOf(ecosystem.vault.address);
		const tokenPrice = ecosystem.priceModel.getPriceUsd(token);
		const tokenUSD = tokenPrice * toFloat(tokenBalance);
		totalBackingUSD += tokenUSD;
		if (tokenName in vaultData) {
			vaultData[tokenName] += tokenUSD;
		} else {
			vaultData[tokenName] = tokenUSD;
		}
	}

	console.log(vaultData);
	console.log(vaultHoldings);
	// console.log(
	// 	Object.entries(vaultData)
	// 		.sort((a, b) => b[1] - a[1])
	// );
	// console.log(
	// 	Object.entries(vaultHoldings)
	// 		.sort((a, b) => b[1] - a[1])
	// );
}

await getVaultLpValue(EcosystemId.BSC);
