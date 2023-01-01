export function jsonResponse(x: object): Response {
	return new Response(JSON.stringify(x, null, 2), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}
