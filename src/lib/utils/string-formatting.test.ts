import { describe, expect, it } from 'vitest';
import { format } from './string-formatting';

describe('String format test', () => {
	it('Replace a single placeholder with string.', () => {
		expect(format('Test {test} test', { test: 'hello' })).toBe('Test hello test');
	});

	it('Replace a multiple placeholders with strings.', () => {
		expect(format('{start}Test {middle} test{end}', { start: 's', middle: 'm', end: 'e' })).toBe(
			'sTest m teste'
		);
	});
});
