import { afterEach, describe, expect, it, vi } from 'vitest';
import { get, getOptional } from './api.ts';

const ok = (body: unknown) => new Response(JSON.stringify(body), { status: 200 });

describe('get', () => {
	afterEach(() => vi.useRealTimers());

	it('retries network and server errors', async () => {
		vi.useFakeTimers();
		const fetch = vi
			.fn<typeof globalThis.fetch>()
			.mockRejectedValueOnce(new TypeError('CORS error'))
			.mockResolvedValueOnce(new Response('', { status: 503 }))
			.mockResolvedValueOnce(ok({ id: 1 }));
		const result = get<{ id: number }>(fetch, '/assets');
		await vi.runAllTimersAsync();
		expect(await result).toEqual({ id: 1 });
		expect(fetch).toHaveBeenCalledTimes(3);
	});

	it('does not retry a missing resource', async () => {
		const fetch = vi
			.fn<typeof globalThis.fetch>()
			.mockResolvedValue(new Response('', { status: 404 }));
		expect(await getOptional(fetch, '/assets/unknown')).toBeNull();
		expect(fetch).toHaveBeenCalledTimes(1);
	});
});
