import fs from 'fs';
import { parse } from 'yaml';
import { get as getData } from './index.json';

/** @type {import('./__types/index').RequestHandler} */
export async function get({ params }) {
    const assets = (await getData({ params })).body;

    const global = parse(fs.readFileSync(`./_generated/global.yml`, 'utf-8'));

    if (!assets || !global) {
        return {
            status: 404
        };
    }

    return {
        body: { assets, global }
    };
}
