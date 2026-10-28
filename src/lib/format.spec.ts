import { describe, expect, it } from 'vitest';
import { compare, formatCurrency, formatPercentage } from './format';

describe('formatCurrency', () => {
	it('uses compact notation for large values', () => {
		expect(formatCurrency(102_730_244_313)).toBe('$102.73B');
	});

	it('uses standard notation for regular values', () => {
		expect(formatCurrency(1.0003)).toBe('$1.00');
	});
});

describe('formatPercentage', () => {
	it('formats ratios as percentages', () => {
		expect(formatPercentage(0.9827, 1)).toBe('98.3%');
	});
});

describe('compare', () => {
	it('sorts numbers descending and missing values last', () => {
		expect([3, null, 10, 1].sort((a, b) => compare(a, b))).toEqual([10, 3, 1, null]);
	});

	it('sorts text ascending when not descending', () => {
		expect(['b', 'a'].sort((a, b) => compare(a, b, false))).toEqual(['a', 'b']);
	});
});
