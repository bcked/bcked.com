import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { base } from '$app/paths';
import { readJson } from '$lib/utils/files';
import { round } from '$lib/utils/math';

function loadHistoricalData<Type>(dirPath: string): ({ timestamp: string } & Type)[] | undefined {
	if (!fs.existsSync(dirPath)) {
		return undefined;
	}

	const timepoints = fs.readdirSync(dirPath);
	return timepoints
		.map((filename) => path.parse(filename).name)
		.sort((a, b) => -a.localeCompare(b))
		.map((timestamp) => ({
			timestamp,
			...readJson<Type>(`${dirPath}/${timestamp}.json`)!
		}));
}

function loadContracts(assetPath: string): api.Contracts | undefined {
	const fileContracts = readJson<files.Contracts>(`${assetPath}/contracts.json`);
	if (!fileContracts) return undefined;

	const id = `${fileContracts.token.chain}:${fileContracts.token.address}`;
	let contracts: api.Contracts = {
		token: {
			id,
			links: {
				self: `${base}/tokens/${id}.json`
			},
			...fileContracts.token
		},
		vault:
			fileContracts.vault && fileContracts.vault['underlying-assets']
				? {
						...fileContracts.vault,
						'underlying-assets': fileContracts.vault['underlying-assets'].map((assetId) => ({
							id: assetId,
							links: {
								self: `${base}/assets/${assetId}.json`
							}
						}))
				  }
				: null
	};

	return contracts;
}

function loadAsset(id: string, icons: cache.Icons): api.Asset {
	const assetPath = `./assets/${id}`;

	const details = readJson<files.Details>(`${assetPath}/details.json`) ?? {
		name: 'Unknown',
		symbol: 'UNK',
		issuer: 'unknown',
		reference: '',
		tags: ['unknown']
	};
	const contracts = loadContracts(assetPath) ?? null;
	const price = loadHistoricalData<files.Price>(`${assetPath}/price`) ?? [
		{
			timestamp: new Date().toISOString(),
			usd: 0,
			source: 'No price recorded in bcked.'
		}
	];
	const supply = loadHistoricalData<files.Supply>(`${assetPath}/supply`) ?? [
		{
			timestamp: new Date().toISOString(),
			total: 0,
			source: 'No supply recorded in bcked.'
		}
	];
	const backing = loadHistoricalData<files.Backing>(`${assetPath}/backing`) ?? [
		{
			timestamp: new Date().toISOString(),
			assets: {},
			source: 'No supply recorded in bcked.'
		}
	];
	const curSupplyObj = supply[0];
	const curPriceObj = price[0];
	const curSupply = curSupplyObj ? curSupplyObj.total || 0 : 0;
	const mcap = curPriceObj ? round(curPriceObj.usd * curSupply, 2) : 0;

	return {
		id,
		links: {
			self: `${base}/assets/${id}.json`,
			ui: `${base}/assets/${id}`
		},
		icon: icons[id]?.href ?? null,
		...details,
		contracts,
		price,
		supply,
		backing: backing.map((b) => ({
			...b,
			'backing-assets': 0,
			'backing-usd': 0,
			ratio: 0,
			uniformity: 0
		})),
		mcap
	};
}

export function loadAssets(icons: cache.Icons): api.Assets {
	const assetNames = fs.readdirSync('./assets');

	const assets = assetNames.reduce(
		(a, assetName) => ({
			...a,
			[assetName]: loadAsset(assetName, icons)
		}),
		{}
	);

	return assets;
}
