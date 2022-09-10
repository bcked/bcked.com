import { jsonResponse } from '$lib/utils/response';
import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
import { error } from '@sveltejs/kit';
import { readAssets } from '../assets.json/+server';
import { readTree } from '../trees.json/+server';
import _ from 'lodash'

export const prerender = true;

export function createRanking() {
    const assets = readAssets()
    const backings = readTree()

    const columns = [
        { id: 'rank', title: '#', class: '' },
        { id: 'name', title: 'Name', class: 'font-medium', link: true },
        { id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
        { id: 'backing-assets', title: 'Backing Assets', class: '' },
        { id: 'backing-ratio', title: 'Backing Ratio', class: '' },
        { id: 'backing-usd', title: 'Backing in USD', class: 'hidden sm:table-cell' },
        { id: 'mcap', title: 'Market Cap', class: 'hidden lg:table-cell' },
        { id: 'backing-uniformity', title: 'Backing Uniformity', class: 'hidden sm:table-cell' }
    ];

    const rows = Object.values(_.merge(assets, backings))
        .filter((asset) => asset.backed > 0)
        .map((asset, i) => ({
            rank: { text: i + 1, value: i },
            name: { text: asset.name, value: asset.name, icon: asset.icon },
            price: { text: formatCurrency(asset.price[0].usd), value: asset.price[0].usd },
            'backing-assets': { text: asset.backing[0]['backing-assets'], value: asset.backing[0]['backing-assets'] },
            'backing-ratio': {
                text: formatPercentage(asset.backing[0]['ratio']),
                value: asset.backing[0]['ratio']
            },
            'backing-usd': {
                text: formatCurrency(asset.backing[0]['backing-usd']),
                value: asset.backing[0]['backing-usd']
            },
            mcap: { text: formatCurrency(asset.mcap), value: asset.mcap },
            'backing-uniformity': {
                text: asset.backing[0]['ratio'] > 0 ? formatPercentage(asset.backing[0]['uniformity']) : 'N/A',
                value: asset.backing[0]['uniformity']
            },
            'name-path': { text: asset.path, value: asset.path }
        }));

    if (!rows) {
        throw error(404, "Ranking could not be created.")
    }

    return { columns, rows }
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const ranking = createRanking()

    return jsonResponse(ranking)
}
