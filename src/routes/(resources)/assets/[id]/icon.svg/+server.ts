/**
 * SVG Standard: https://www.w3.org/TR/SVG2/
 * Some resources:
 * - https://de.wikibooks.org/wiki/SVG/_Einf%C3%BChrung/_Kurze_Einf%C3%BChrung_in_XML
 * - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
 * - https://www.w3schools.com/graphics/svg_intro.asp
 */

import { PUBLIC_DOMAIN } from '$env/static/public';
import { readAggregation } from '$lib/utils/files';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const icons = await readAggregation<agg.Icons>('icons');
	// const assetsBacking = await readAggregation<agg.AssetsBacking>('assets-backing');
	// const assetsContracts = await readAggregation<agg.AssetsContracts>('assets-contracts');

	const id = params.id!;

	const icon = icons[id];

	let size = 64;

	// TODO add fallback in case no icon is known

	// TODO add design for LP tokens

	// TODO add chain icon to bottom right corner

	// TODO add issuer icon to bottom left corner

	const xml = `
		<?xml version="1.0" encoding="UTF-8" ?>
		<svg version="1.1"
			width="${size}px" 
			height="${size}px"
			viewBox="${[0, 0, size, size].toString()}"
			xmlns="http://www.w3.org/2000/svg" >
			<image
				x="0"
				y="0"
				href="${PUBLIC_DOMAIN}/${icon.href}"
				height="${size}px"
				width="${size}px"
				dominant-baseline="central"
				text-anchor="middle"
			/>
		</svg>
    `;

	return new Response(xml.trim(), {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
};
