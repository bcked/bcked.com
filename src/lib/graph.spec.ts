import { describe, expect, it } from 'vitest';
import { chain, scaleChain, type GraphLink } from './graph';

const link = (source: string, target: string): GraphLink => ({ source, target, usd: 1 });

describe('chain', () => {
	it('follows underlying assets recursively', () => {
		const links = [link('a', 'b'), link('b', 'c'), link('x', 'y')];
		expect(chain(links, 'a', 'down')).toEqual([link('a', 'b'), link('b', 'c')]);
	});

	it('follows derivative assets upwards', () => {
		const links = [link('a', 'b'), link('b', 'c')];
		expect(chain(links, 'c', 'up')).toEqual([link('b', 'c'), link('a', 'b')]);
	});

	it('skips links that close a cycle', () => {
		const links = [link('a', 'b'), link('b', 'a'), link('b', 'b')];
		expect(chain(links, 'a', 'down')).toEqual([link('a', 'b')]);
	});
});

describe('scaleChain', () => {
	const usd = (source: string, target: string, value: number): GraphLink => ({
		source,
		target,
		usd: value
	});

	it('scales lower levels to the share that flows from the start', () => {
		// DAI holds 2 of USDC's 100, USDC holds 80 T-bills and 20 cash.
		const links = [
			usd('dai', 'usdc', 2),
			usd('dai', 'eth', 3),
			usd('usdc', 'tb', 80),
			usd('usdc', 'cash', 20)
		];
		const scaled = scaleChain(chain(links, 'dai', 'down'), links, 'dai');
		expect(scaled.map((l) => [l.source, l.target, l.usd])).toEqual([
			['dai', 'usdc', 2],
			['dai', 'eth', 3],
			['usdc', 'tb', 1.6],
			['usdc', 'cash', 0.4]
		]);
	});

	it('adds up shares from several paths', () => {
		// a holds b directly and through c. b has 10 in total, of which a's paths bring 2 + 3.
		const links = [
			usd('a', 'b', 2),
			usd('a', 'c', 6),
			usd('c', 'b', 3),
			usd('c', 'x', 3),
			usd('b', 'y', 10)
		];
		const scaled = scaleChain(chain(links, 'a', 'down'), links, 'a');
		expect(scaled.find((l) => l.source == 'b')?.usd).toBe(5);
	});
});
