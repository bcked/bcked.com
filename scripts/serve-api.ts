/**
 * Serves a local API build (the `api` folder of bcked-adapters) like GitHub Pages does,
 * so bcked.com can be developed against it.
 *
 * Usage: bun scripts/serve-api.ts ../bcked-adapters/api [port]
 * Then start the site with PUBLIC_API_URL=http://localhost:5174
 */
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? '../bcked-adapters/api');
const port = Number(process.argv[3] ?? 5174);

Bun.serve({
	port,
	fetch(request) {
		const url = new URL(request.url);
		let filePath = path.join(root, decodeURIComponent(url.pathname));
		if (!filePath.startsWith(root)) return new Response('Forbidden', { status: 403 });
		if (existsSync(filePath) && statSync(filePath).isDirectory()) {
			filePath = path.join(filePath, 'index.json');
		}
		if (!existsSync(filePath)) {
			return new Response('Not Found', {
				status: 404,
				headers: { 'Access-Control-Allow-Origin': '*' }
			});
		}
		return new Response(Bun.file(filePath), {
			headers: { 'Access-Control-Allow-Origin': '*' }
		});
	}
});

console.log(`Serving ${root} on http://localhost:${port}`);
