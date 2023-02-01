import { ethers } from 'ethers';

import { MULTICALL_ADDRESS, BSC_MINTER_ADDRESS, MOVR_MINTER_ADDRESS } from './constants.js';
import farmsBsc from './config_bsc.json' assert { type: 'json' };
import farmsMoonriver from './config_movr.json' assert { type: 'json' };
import farmsMoonbeam from './config_glmr.json' assert { type: 'json' };

import {
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
} from './price-model.js';

export enum FarmType {
	Regular,
	LP,
	Partner
}

export type FarmData = {
	name: string;
	contract: string;
	acceptedToken: string;
	token1: string;
	token2: string;
	rewardToken?: string;
	type?: FarmType;
	isImported?: boolean;
	tokenLogoUrls?: Record<string, string>;
	poolSize?: number;
	poolValue?: number;
	tvl?: number;
	farmTotalSupply?: number;
	pairTotalSupply?: number;
	mintShare?: number;
	lpPrice?: number; // token price for single-stake farms
	rewardTokenPrice?: number;
	roi?: number;
	apy?: number;
	userLpBalance?: ethers.BigNumber;
	userStakedBalance?: ethers.BigNumber;
	userRewardsBalance?: number;
	userAllowance?: number;
};

type FarmSet = {
	regularFarms: { farms: FarmData[]; retiredFarms: FarmData[] };
	lpFarms: { farms: FarmData[] };
	partnerFarms: { farms: FarmData[] };
};

type ChainId = 56 | 1284 | 1285;

enum TokenModel {
	Standard = 0,
	Reflections = 1
}

enum EcosystemId {
	BSC = 0,
	Moonriver = 1,
	Moonbeam = 2
}

interface IEcosystem {
	ecosystemId: EcosystemId;
	chainId: ChainId;
	ethName: string;
	wethAddress: string;
	dataseed: ethers.providers.Provider;
	multicallAddress: string;
	farmSet: FarmSet;
	factoryAddress: string;
	padAddress: string;
	minterAddress: string;
	priceModel: PriceModel;
	launchPadFactoryAddress: string;
	launchPadTokenFactoryAddress: string;
	launchPadTokenFactoryModels: Partial<Record<TokenModel, string>>;
	swapUrl: string;
	bridgeUrl: string;
	infoUrl: string;
	tokenIconsFolder: string;
	routeName: string;
	vault: any;
}

const bscDataseed = new ethers.providers.StaticJsonRpcProvider('https://bsc-dataseed1.defibit.io/');
const wbnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const bscFactoryAddress = '0xB836017ACf10b8A7c6c6C9e99eFE0f5B0250FC45';
const BscEcosystem: IEcosystem = {
	ecosystemId: EcosystemId.BSC,
	chainId: 56,
	ethName: 'BNB',
	wethAddress: wbnbAddress,
	dataseed: bscDataseed,
	multicallAddress: MULTICALL_ADDRESS,
	farmSet: farmsBsc as any,
	factoryAddress: bscFactoryAddress,
	padAddress: '0xC0888d80EE0AbF84563168b3182650c0AdDEb6d5',
	minterAddress: BSC_MINTER_ADDRESS,
	priceModel: new PriceModel(
		bscDataseed,
		BSC_WHITELIST,
		wbnbAddress,
		WBNB_BUSD_PAIR,
		bscFactoryAddress,
		MINIMUM_LIQUIDITY_BNB,
		18
	),
	launchPadFactoryAddress: '0xd0fA59395aE0c7eA3735225B0465BB5f63d1B13a',
	launchPadTokenFactoryAddress: '0xDed45CcAe0CE904CadA2bF7165A6eE891A8C6399',
	launchPadTokenFactoryModels: {
		[TokenModel.Standard]: '0xd654d9ED960a09aCF291469a9c3359FCcEE4C6Af',
		[TokenModel.Reflections]: '0xeb2D2CbbEcBE4a403C3aB8112Af5dD1394e7B329'
	},
	swapUrl: 'https://padswap.exchange/bsc/swap',
	bridgeUrl: 'https://v2.padswap.exchange/bridge',
	infoUrl: 'https://info.padswap.exchange/home',
	tokenIconsFolder: 'bsc',
	routeName: 'bsc',
	vault: farmsBsc.vault
};

const moonriverDataseed = new ethers.providers.StaticJsonRpcProvider(
	'https://rpc.api.moonriver.moonbeam.network'
);
const wmovrAddress = '0x663a07a2648296f1A3C02EE86A126fE1407888E5';
const moonriverFactoryAddress = '0x760d2Bdb232027aB3b1594405077F9a1b91C04c1';
const MoonriverEcosystem: IEcosystem = {
	ecosystemId: EcosystemId.Moonriver,
	chainId: 1285,
	ethName: 'MOVR',
	wethAddress: wmovrAddress,
	dataseed: moonriverDataseed,
	multicallAddress: MULTICALL_ADDRESS,
	farmSet: farmsMoonriver as any,
	factoryAddress: moonriverFactoryAddress,
	padAddress: '0x45488C50184Ce2092756ba7CdF85731fD17e6f3d',
	minterAddress: MOVR_MINTER_ADDRESS,
	priceModel: new PriceModel(
		moonriverDataseed,
		MOVR_WHITELIST,
		wmovrAddress,
		WMOVR_USDC_PAIR,
		moonriverFactoryAddress,
		MINIMUM_LIQUIDITY_MOVR,
		6
	),
	launchPadFactoryAddress: '0xE8b36617a06c3D592B69Fd78460dc2DF2FE82A59',
	launchPadTokenFactoryAddress: '0x9774e20244004A9dFe9dc1a252495dCf6930Ca27',
	launchPadTokenFactoryModels: {
		[TokenModel.Standard]: '0xF1Ed607a0a74ce12447682A0523BF1b0C8E531F2',
		[TokenModel.Reflections]: '0xB454765b1047c8f4f33cA8fca82851Ca1992C0Fa'
	},
	swapUrl: 'https://padswap.exchange/moonriver/swap',
	bridgeUrl: 'https://v2.padswap.exchange/bridge',
	infoUrl: 'https://movr-info.padswap.exchange/home',
	tokenIconsFolder: 'moonriver',
	routeName: 'moonriver',
	vault: farmsMoonriver.vault
};

const moonbeamDataseed = new ethers.providers.StaticJsonRpcProvider(
	'https://rpc.api.moonbeam.network'
);
const wglmrAddress = '0xe3DB50049C74De2F7d7269823af3178Cf22fd5E3';
const moonbeamFactoryAddress = '0x663a07a2648296f1A3C02EE86A126fE1407888E5';
const MoonbeamEcosystem: IEcosystem = {
	ecosystemId: EcosystemId.Moonbeam,
	chainId: 1284,
	ethName: 'GLMR',
	wethAddress: wglmrAddress,
	dataseed: moonbeamDataseed,
	multicallAddress: MULTICALL_ADDRESS, // TODO
	farmSet: farmsMoonbeam as any,
	factoryAddress: moonbeamFactoryAddress,
	padAddress: '0x59193512877E2EC3bB27C178A8888Cfac62FB32D',
	minterAddress: '0x70790550d5F01EDd5B2Ed1dFf05eDC52cD4F1Eda',
	priceModel: new PriceModel(
		moonbeamDataseed,
		GLMR_WHITELIST,
		wglmrAddress,
		WGLMR_USDC_PAIR,
		moonbeamFactoryAddress,
		MINIMUM_LIQUIDITY_GLMR,
		6
	),
	launchPadFactoryAddress: '0x4A891F2CBa00cf8442a1d5A9219463453d326ba8',
	launchPadTokenFactoryAddress: '0x9774e20244004A9dFe9dc1a252495dCf6930Ca27',
	launchPadTokenFactoryModels: {
		[TokenModel.Standard]: '0xF1Ed607a0a74ce12447682A0523BF1b0C8E531F2',
		[TokenModel.Reflections]: '0xF165e8f8bbA01862E8FA25126a4B172Af20fC0A8'
	},
	swapUrl: 'https://padswap.exchange/moonbeam/swap',
	bridgeUrl: 'https://v2.padswap.exchange/bridge',
	infoUrl: 'https://glmr-info.padswap.exchange',
	tokenIconsFolder: 'moonbeam',
	routeName: 'moonbeam',
	vault: farmsMoonbeam.vault
};

const ECOSYSTEMS: Record<EcosystemId, IEcosystem> = {
	[EcosystemId.BSC]: BscEcosystem,
	[EcosystemId.Moonriver]: MoonriverEcosystem,
	[EcosystemId.Moonbeam]: MoonbeamEcosystem
};

export { EcosystemId, ECOSYSTEMS };
