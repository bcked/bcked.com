import fs from 'fs';
import { parse } from 'yaml';

export async function get() {
    const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));

    if (assets) {
        return {
            body: assets
        };
    }

    return {
        status: 404
    };
}
