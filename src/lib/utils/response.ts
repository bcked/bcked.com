import type { HttpError } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';

export function jsonResponse(x: object): Response {
	return new Response(JSON.stringify(x, null, 2), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}

export function jsonError(
	status: number,
	body: { message: string; [key: string]: any }
): HttpError {
	//@ts-ignore body overload is okay here.
	return error(status, body);
}

export function renderSvgResponse<Component extends SvelteComponent>(
	component: ComponentType<Component>,
	props: ComponentProps<Component>
): Response {
	// @ts-ignore Somehow it doesn't know the render function.
	const { html } = component.render(props);

	const svg = `<?xml version="1.0" encoding="UTF-8" ?>${html.trim()}`.trim();

	return new Response(svg, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'image/svg+xml',
			'Accept-Encoding': 'gzip, svgz'
		}
	});
}
