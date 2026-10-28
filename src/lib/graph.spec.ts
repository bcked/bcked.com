import { describe, expect, it } from 'vitest';
import { chain, type GraphLink } from './graph';

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
