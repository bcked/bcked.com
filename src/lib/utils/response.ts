import type { HttpError } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

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
