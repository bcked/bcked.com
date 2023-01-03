/*eslint-disable */
import { providers } from '@0xsequence/multicall';
import AwaitLock from 'await-lock';
import { ethers } from 'ethers';
import jsgraphs from 'js-graph-algorithms';
import { List } from 'linq-collections';

let lock = new AwaitLock();

const MULTICALL_ADDRESS = '0x92F07bC24d6EA171581895121E65E23a91afa9c5';

const BSC_PADSWAP_FACTORY_ADDRESS = '0xB836017ACf10b8A7c6c6C9e99eFE0f5B0250FC45';
const MOVR_PADSWAP_FACTORY_ADDRESS = '0x760d2Bdb232027aB3b1594405077F9a1b91C04c1';
const PADSWAP_FACTORY_ABI =
	'[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"INIT_CODE_PAIR_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
const PADSWAP_PAIR_ABI =
	'[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
const ERC20_ABI =
	'[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]';

const WBNB_BUSD_PAIR = '0x1Ed31DB9078FaFA28ba8a2c09C0fa421943cb383';
const WBNB_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';

const WMOVR_USDC_PAIR = '0x38185BF42E4D6d0b51Db5F6C2B83064008549087';
const WMOVR_ADDRESS = '0x663a07a2648296f1A3C02EE86A126fE1407888E5';

const WGLMR_USDC_PAIR = '0x506E063a607E66795167fd86b9a036e1D2abb069';

const MINIMUM_LIQUIDITY_BNB = ethers.utils.parseEther('1');
const MINIMUM_LIQUIDITY_MOVR = ethers.utils.parseEther('0.5');
const MINIMUM_LIQUIDITY_GLMR = ethers.utils.parseEther('0.5');

const BSC_WHITELIST = [
	'0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // WBNB
	'0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
	'0x55d398326f99059ff775485246999027b3197955', // USDT
	'0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC
	'0x23396cf899ca06c4472205fc903bdb4de249d6fc', // UST
	'0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // DAI
	'0x4bd17003473389a42daf6a0a729f6fdb328bbbd7', // VAI
	'0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', // BTCB
	'0x2170ed0880ac9a755fd29b2688956bd959f933f8', // WETH
	'0x250632378e573c6be1ac2f97fcdf00515d0aa91b', // BETH
	'0xc0888d80ee0abf84563168b3182650c0addeb6d5', // PAD
	'0x463e737d8f740395abf44f7aac2d9531d8d539e9' // TOAD
];

const MOVR_WHITELIST = [
	'0x663a07a2648296f1a3c02ee86a126fe1407888e5', // WMOVR
	'0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d', // USDC
	'0x5d9ab5522c64e1f6ef5e3627eccc093f56167818', // BUSD
	'0xb44a9b6905af7c801311e8f4e76932ee959c663c', // USDT
	'0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844', // DAI
	'0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c', // BNB
	'0x45488c50184ce2092756ba7cdf85731fd17e6f3d', // PAD
	'0x165dbb08de0476271714952c3c1f068693bd60d7' // TOAD
];

const GLMR_WHITELIST = [
	'0xe3db50049c74de2f7d7269823af3178cf22fd5e3', // WGLMR
	'0x8f552a71efe5eefc207bf75485b356a0b3f01ec9', // USDC
	'0x8e70cd5b4ff3f62659049e74b6649c6603a0e594', // USDT
	'0xc234a67a4f840e61ade794be47de455361b52413', // DAI
	'0x30d2a9f5fdf90ace8c17952cbb4ee48a55d916a7', // WETH
	'0x59193512877e2ec3bb27c178a8888cfac62fb32d', // PAD
	'0xF480f38C366dAaC4305dC484b2Ad7a496FF00CeA' // TOAD
];

class PriceModel {
	constructor(
		dataseed,
		whitelist,
		reserveCurrency,
		reserveUsdPair,
		factoryAddress,
		minimiumLiquidity,
		usdDecimals
	) {
		this.blockNumber = null;
		this.mutex = new AwaitLock();
		const ethersProvider = dataseed;
		this.provider = new providers.MulticallProvider(ethersProvider, {
			batchSize: 300,
			timeWindow: 0,
			contract: MULTICALL_ADDRESS
		});
		this.whitelist = whitelist;
		this.reserveCurrency = reserveCurrency;
		this.reserveUsdPair = reserveUsdPair;
		this.factoryAddress = factoryAddress;
		this.minimiumLiquidity = minimiumLiquidity;
		this.usdDecimals = usdDecimals;
	}

	async sync(blockNumber) {
		await this.mutex.acquireAsync();
		try {
			if (this.blockNumber >= blockNumber) {
				return;
			}

			const factoryContract = new ethers.Contract(
				this.factoryAddress,
				PADSWAP_FACTORY_ABI,
				this.provider
			);
			const numPairs = await factoryContract.allPairsLength({ blockTag: blockNumber });
			const pairPromises = [];
			for (let i = 0; i < numPairs.toNumber(); i++) {
				pairPromises.push(factoryContract.allPairs(i, { blockTag: blockNumber })); // TODO: cache
			}
			const pairs = await Promise.all(pairPromises);
			const pairInfos = pairs.map((p) => ({
				address: p,
				token0: null,
				token1: null,
				token0Decimals: null,
				token1Decimals: null,
				reserve0: null,
				reserve1: null
			}));

			const promises = [];
			for (const pairInfo of pairInfos) {
				const contract = new ethers.Contract(pairInfo.address, PADSWAP_PAIR_ABI, this.provider);
				const p1 = contract.token0({ blockTag: blockNumber }).then((t) => (pairInfo.token0 = t)); // TODO: cache
				const p2 = contract.token1({ blockTag: blockNumber }).then((t) => (pairInfo.token1 = t)); // TODO: cache
				const p3 = contract.getReserves({ blockTag: blockNumber }).then((r) => {
					pairInfo.reserve0 = r._reserve0;
					pairInfo.reserve1 = r._reserve1;
				});

				promises.push(p1, p2, p3);
			}
			await Promise.all(promises);

			// TODO: cache
			const tokens = this._getTokens();
			const tokenPromises = [];
			for (const token of tokens) {
				const contract = new ethers.Contract(token, ERC20_ABI, this.provider);
				tokenPromises.push(contract.decimals());
			}
			const tokenDecimals = await Promise.all(tokenPromises);

			for (let i = 0; i < tokens.length; i++) {
				const tokenPairs = pairInfos.filter((p) =>
					[p.token0.toLowerCase(), p.token1.toLowerCase()].includes(tokens[i])
				);
				for (const tokenPair of tokenPairs) {
					if (tokenPair.token0.toLowerCase() == tokens[i]) {
						tokenPair.token0Decimals = tokenDecimals[i];
					} else {
						tokenPair.token1Decimals = tokenDecimals[i];
					}
				}
			}

			this.pairInfos = pairInfos;
			this.blockNumber = blockNumber;
		} finally {
			this.mutex.release();
		}
	}

	async syncWithin(blockNumber, tolerance) {
		if (this.blockNumber == null || blockNumber - this.blockNumber > tolerance) {
			await this.sync(blockNumber);
		}
	}

	getPrice(token, tokenDecimals: number = 18) {
		const { graph, tokens } = this._getTokenGraph();
		const startNode = tokens.indexOf(token.toLowerCase());
		const endNode = tokens.indexOf(this.reserveCurrency.toLowerCase());
		const search = new jsgraphs.BellmanFord(graph, startNode);
		const path = search.pathTo(endNode);

		let price = ethers.BigNumber.from((10 ** tokenDecimals).toString());
		for (const edge of path) {
			const { numerator, denominator } = edge._exchangeRate;
			price = price.mul(numerator).div(denominator);
		}
		const tokenPrice = parseFloat(ethers.utils.formatEther(price));
		return tokenPrice;
	}

	getPriceUsd(token, tokenDecimals: number = 18) {
		const tokenBnbPrice = this.getPrice(token, tokenDecimals);
		const bnbPrice = this.getBnbPrice();
		return tokenBnbPrice * bnbPrice;
	}

	getBnbPrice() {
		const { reserve0, reserve1, token0 } = this._getPairInfo(this.reserveUsdPair);
		const isBnbFirst = token0.toLowerCase() == this.reserveCurrency.toLowerCase();
		const reserveBnb = isBnbFirst ? reserve0 : reserve1;
		const reserveUsd = isBnbFirst ? reserve1 : reserve0;
		const reserveUsdNormalized = reserveUsd.mul((10 ** (18 - this.usdDecimals)).toString());
		const bnbPriceExpanded = reserveUsdNormalized.mul(1e4).div(reserveBnb);
		return bnbPriceExpanded.toNumber() / 1e4;
	}

	getReserveUsd(pair) {
		const { reserve0, reserve1, token0, token1, token0Decimals } = this._getPairInfo(pair);
		// special case for low-liquidity pairs that are paired with ether
		if (token1.toLowerCase() == this.reserveCurrency.toLowerCase()) {
			const tokenPrice = this.getPriceUsd(token1);
			return 2 * parseFloat(ethers.utils.formatEther(reserve1)) * tokenPrice;
		}

		const tokenPrice = this.getPriceUsd(token0);
		return 2 * parseFloat(ethers.utils.formatUnits(reserve0, token0Decimals)) * tokenPrice;
	}

	_getTokens() {
		return new List(this.pairInfos)
			.selectMany((p) => [p.token0, p.token1])
			.select((t) => t.toLowerCase())
			.distinct()
			.toArray();
	}

	_getTokenGraph() {
		const tokens = this._getTokens();
		const graph = new jsgraphs.WeightedDiGraph(tokens.length);
		const maxDecimals = new List(this.pairInfos)
			.selectMany((p) => [p.token0Decimals, p.token1Decimals])
			.max();
		for (const { token0, token1, token0Decimals, token1Decimals, reserve0, reserve1 } of this
			.pairInfos) {
			if (
				(token0 == this.reserveCurrency && reserve0.lt(this.minimiumLiquidity)) ||
				(token1 == this.reserveCurrency && reserve1.lt(this.minimiumLiquidity))
			) {
				continue;
			}

			if (
				!this.whitelist.includes(token0.toLowerCase()) &&
				!this.whitelist.includes(token1.toLowerCase())
			) {
				continue;
			}

			const node0 = tokens.indexOf(token0.toLowerCase());
			const node1 = tokens.indexOf(token1.toLowerCase());

			const reserve0Normalized = reserve0.mul((10 ** (maxDecimals - token0Decimals)).toString());
			const reserve1Normalized = reserve1.mul((10 ** (maxDecimals - token1Decimals)).toString());

			const zeroToOneExchangeRate = {
				numerator: reserve1Normalized,
				denominator: reserve0Normalized
			};
			const oneToZeroExchangeRate = {
				numerator: reserve0Normalized,
				denominator: reserve1Normalized
			};

			const edge1 = new jsgraphs.Edge(node0, node1, this._getEdgeWeight(token1));
			edge1._exchangeRate = zeroToOneExchangeRate;
			graph.addEdge(edge1);

			const edge2 = new jsgraphs.Edge(node1, node0, this._getEdgeWeight(token0));
			edge2._exchangeRate = oneToZeroExchangeRate;
			graph.addEdge(edge2);
		}

		return {
			graph,
			tokens
		};
	}

	// assuming paths are shorter than 10, this forces the shortest path
	// to always follow the whitelist priority order
	_getEdgeWeight(destToken) {
		let weight = 10;
		for (const token of this.whitelist) {
			if (destToken.toLowerCase() == token) {
				return weight;
			}

			weight *= 10;
		}

		return weight;
	}

	_getPairInfo(address) {
		return this.pairInfos.find((p) => p.address.toLowerCase() == address.toLowerCase());
	}
}

export {
	PriceModel,
	BSC_WHITELIST,
	MOVR_WHITELIST,
	GLMR_WHITELIST,
	WBNB_BUSD_PAIR,
	WMOVR_USDC_PAIR,
	WGLMR_USDC_PAIR,
	MINIMUM_LIQUIDITY_BNB,
	MINIMUM_LIQUIDITY_MOVR,
	MINIMUM_LIQUIDITY_GLMR
};
