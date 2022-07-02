import { get as getData } from '../assets/index.json';
import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';

/** @type {import('./__types/index.json').RequestHandler} */
export async function get({ params }) {
    /** @type {any} */
    const assets = (await getData()).body;

    const sortBy = "backing-usd"

    const columns = [
        { id: 'rank', title: '#', class: '' },
        { id: 'name', title: 'Name', class: 'font-medium', link: true },
        { id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
        { id: 'backing-ratio', title: 'Backing Ratio', class: '' },
        { id: 'backing-usd', title: 'Backing', class: '' },
        { id: 'mcap', title: 'Market Cap', class: 'hidden sm:table-cell' },
        { id: 'backing-distribution', title: 'Backing Distribution', class: 'hidden sm:table-cell' }
    ];

    const rows = Object.values(assets)
        .sort((a, b) => b.asset.backing[sortBy] - a.asset.backing[sortBy])
        .map(({ asset }, i) => ({
            rank: { text: i + 1, value: i },
            name: { text: asset.name, value: asset.name },
            price: { text: formatCurrency(asset.price.usd), value: asset.price.usd },
            'backing-ratio': {
                text: formatPercentage(asset.backing['ratio']),
                value: asset.backing['ratio']
            },
            'backing-usd': {
                text: formatCurrency(asset.backing['backing-usd']),
                value: asset.backing['backing-usd']
            },
            mcap: { text: formatCurrency(asset.mcap), value: asset.mcap },
            'backing-distribution': {
                text: asset.backing['ratio'] > 0 ? formatPercentage(asset.backing['distribution']) : 'N/A',
                value: asset.backing['distribution']
            },
            'name-path': { text: asset.path, value: asset.path }
        }));

    if (!rows) {
        return {
            status: 404
        };
    }

    return {
        body: { columns, rows }
    };
}
