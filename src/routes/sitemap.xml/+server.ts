// https://www.sitemaps.org/protocol.html
import { getAssets, getEntities, getSystems } from '#lib/api.ts';
import type { RequestHandler } from './$types';

export const prerender = true;

const SITE = 'https://bcked.com';

export const GET: RequestHandler = async ({ fetch }) => {
	const [assets, entities, systems] = await Promise.all([
		getAssets(fetch),
		getEntities(fetch),
		getSystems(fetch)
	]);

	const urls = [
		{ loc: '/', changefreq: 'daily' },
		{ loc: '/assets', changefreq: 'daily' },
		{ loc: '/issuers', changefreq: 'daily' },
		{ loc: '/chains', changefreq: 'daily' },
		{ loc: '/faq', changefreq: 'monthly' },
		{ loc: '/about', changefreq: 'monthly' },
		{ loc: '/methodology', changefreq: 'monthly' },
		{ loc: '/legal-notice', changefreq: 'yearly' },
		{ loc: '/privacy', changefreq: 'yearly' },
		...assets.map((a) => ({
			loc: `/assets/${encodeURIComponent(a.id)}`,
			changefreq: 'daily',
			lastmod: a.price?.date
		})),
		...entities.map((e) => ({ loc: `/issuers/${e.id}`, changefreq: 'daily' })),
		...systems.map((s) => ({ loc: `/chains/${s.id}`, changefreq: 'daily' }))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) =>
			`	<url><loc>${SITE}${url.loc}</loc><changefreq>${url.changefreq}</changefreq>${
				'lastmod' in url && url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''
			}</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
