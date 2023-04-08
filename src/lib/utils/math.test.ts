import { describe, expect, it } from 'vitest';

import { rate } from './math';

describe('rate calculation test', () => {
	it('decrease of 20%', () => {
		expect(rate(100, 80)).toBe(-0.2);
	});

	it('increase of 20%', () => {
		expect(rate(100, 120)).toBe(0.2);
	});
});
