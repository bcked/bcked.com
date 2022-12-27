import { describe, it, expect } from 'vitest';

import { generate } from './array';

describe('generate test', () => {
	it('generate array with 10 numbers and expect array length of 10', () => {
		expect(generate(0, 1, 10).length).toBe(10);
	});
});
