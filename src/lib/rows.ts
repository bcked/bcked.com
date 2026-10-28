/** Builds table rows from API summaries. */
import { resolve } from '$app/paths';
import type { AssetSummary, EntitySummary, SystemSummary } from './api';
import { formatCurrency, formatPercentage } from './format';
import type { Row } from './components/Table.svelte';

const UNKNOWN = 'UNK';

function currency(value: number | null | undefined) {
	return { text: value == null ? UNKNOWN : formatCurrency(value), value };
}

function percentage(value: number | null | undefined, digits = 1) {
	return { text: value == null ? UNKNOWN : formatPercentage(value, digits), value };
}

/** Real-world reference assets (USD, gold, treasuries) are tracked for backing, not ranked. */
export function isRankable(asset: AssetSummary): boolean {
	return asset.system !== 'rwa';
}

export function assetRow(asset: AssetSummary): Row {
	return {
		name: {
			text: asset.name ?? asset.id,
			value: asset.name ?? asset.id,
			icon: asset.icon,
			href: resolve('/assets/[id]', { id: asset.id })
		},
		symbol: { text: asset.symbol ?? '', value: asset.symbol },
		price: currency(asset.price?.value),
		'market-cap': currency(asset['market-cap']?.value),
		'market-cap-30d': percentage(asset['market-cap']?.change['30d']),
		collateral: currency(asset.collateral?.value),
		'collateralization-ratio': percentage(asset['collateralization-ratio']?.value)
	};
}

export function groupRow(
	group: EntitySummary | SystemSummary,
	route: '/issuers/[id]' | '/chains/[id]'
): Row {
	const tvl = group['total-value-locked'];
	return {
		name: {
			text: group.name,
			value: group.name,
			icon: group.icon,
			href: resolve(route, { id: group.id })
		},
		assets: { text: group.assets.length.toString(), value: group.assets.length },
		'total-value-locked': currency(tvl?.value),
		'total-value-locked-30d': percentage(tvl?.change['30d'])
	};
}

export const assetColumns = [
	{ id: 'name', title: 'Name', class: 'font-medium' },
	{ id: 'price', title: 'Price' },
	{ id: 'market-cap', title: 'Market Cap' },
	{ id: 'market-cap-30d', title: 'Mcap 30d %' },
	{ id: 'collateral', title: 'Backing in USD' },
	{ id: 'collateralization-ratio', title: 'Backing Ratio' }
];

export const groupColumns = [
	{ id: 'name', title: 'Name', class: 'font-medium' },
	{ id: 'assets', title: 'Assets' },
	{ id: 'total-value-locked', title: 'Total Value Locked' },
	{ id: 'total-value-locked-30d', title: 'TVL 30d %' }
];
