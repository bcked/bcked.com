// https://www.sitemaps.org/protocol.html
import { PUBLIC_DOMAIN } from '$env/static/public';
import { readAggregation } from '$lib/utils/files';
import { compareDates } from '$lib/utils/string-formatting';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const assetsBacking = await readAggregation<agg.AssetsBacking>('assets-backing');
	const assetsContracts = await readAggregation<agg.AssetsContracts>('assets-contracts');

	if (!assetsBacking || !assetsContracts) {
		throw new Error('Aggregation files could not be loaded.');
	}

	// const assets = await _readAssets();
	const sortedAssets = Object.values(assetsBacking)
		.filter((asset) => Object.keys(asset.history.at(-1)!['assets']).length > 0)
		.map((asset) => ({
			loc: `${PUBLIC_DOMAIN}/assets/${asset.id}`,
			lastmod: asset.git.updated.date,
			changefreq: assetsContracts[asset.id]?.vault ? 'daily' : 'monthly'
		}))
		.sort((assetA, assetB) => compareDates(assetA.lastmod, assetB.lastmod));
	const lastmodAsset = sortedAssets.shift()!;

	const xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${PUBLIC_DOMAIN}</loc>
        <lastmod>${lastmodAsset.lastmod}</lastmod>
        <changefreq>${lastmodAsset.changefreq}</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${lastmodAsset.loc}</loc>
        <lastmod>${lastmodAsset.lastmod}</lastmod>
        <changefreq>${lastmodAsset.changefreq}</changefreq>
        <priority>0.7</priority>
      </url>
      ${sortedAssets
				.map(
					(asset) => `
      <url>
        <loc>${asset.loc}</loc>
        <lastmod>${asset.lastmod}</lastmod>
        <changefreq>${asset.changefreq}</changefreq>
        <priority>0.5</priority>
      </url>
      `
				)
				.join('')}
    </urlset>
    `;

	return new Response(xml.trim(), {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
};
