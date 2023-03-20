/**
 * SVG Standard: https://www.w3.org/TR/SVG2/
 * Some resources:
 * - https://de.wikibooks.org/wiki/SVG/_Einf%C3%BChrung/_Kurze_Einf%C3%BChrung_in_XML
 * - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
 * - https://www.w3schools.com/graphics/svg_intro.asp
 */

import Icon from '$components/icon.svelte';
import { readAggregation } from '$lib/utils/files';
import { renderSvgResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const assetsDetails = await readAggregation<agg.AssetsDetails>('assets-details');
	const icons = await readAggregation<agg.Icons>('icons');

	return renderSvgResponse(Icon, {
		id: params.id!,
		data: { assetsDetails, icons },
		size: 64,
		class: 'object-contain'
	});
};
