import { describe, expect, it } from 'vitest';

import { closest, generate, relativeInMs } from './array';

describe('closest', () => {
	const mockData = [
		{ timestamp: '2022-04-08T00:00:00.000Z' },
		{ timestamp: '2022-04-09T00:00:00.000Z' },
		{ timestamp: '2022-04-10T00:00:00.000Z' }
	];

	it('returns the exact item for the timestamp', () => {
		expect(closest(mockData, '2022-04-08T00:00:00.000Z')).toEqual({
			timestamp: '2022-04-08T00:00:00.000Z'
		});
		expect(closest(mockData, '2022-04-09T00:00:00.000Z')).toEqual({
			timestamp: '2022-04-09T00:00:00.000Z'
		});
		expect(closest(mockData, '2022-04-10T00:00:00.000Z')).toEqual({
			timestamp: '2022-04-10T00:00:00.000Z'
		});
	});

	it('returns the closest timestamp in the array', () => {
		expect(closest(mockData, '2022-04-08T12:00:00.000Z')).toEqual({
			timestamp: '2022-04-08T00:00:00.000Z'
		});
		expect(closest(mockData, '2022-04-09T12:00:00.000Z')).toEqual({
			timestamp: '2022-04-09T00:00:00.000Z'
		});
		expect(closest(mockData, '2022-04-10T12:00:00.000Z')).toEqual({
			timestamp: '2022-04-10T00:00:00.000Z'
		});
	});

	it('returns the first item in the array if the timestamp is before the first item', () => {
		expect(closest(mockData, '2022-04-07T12:00:00.000Z')).toEqual({
			timestamp: '2022-04-08T00:00:00.000Z'
		});
	});

	it('returns the last item in the array if the timestamp is after the last item', () => {
		expect(closest(mockData, '2022-04-11T12:00:00.000Z')).toEqual({
			timestamp: '2022-04-10T00:00:00.000Z'
		});
	});
});

describe('relativeInMs', () => {
	const mockData = [
		{ timestamp: '2022-04-08T00:00:00.000Z' },
		{ timestamp: '2022-04-09T00:00:00.000Z' },
		{ timestamp: '2022-04-10T00:00:00.000Z' }
	];

	it('returns the closest timestamp within small deviation from the relative time', () => {
		const interval = 24 * 60 * 60 * 1000; // 1 day in milliseconds
		const deviation = 0.01; // 1%

		// Test with a timestamp exactly 1 day before the latest timestamp
		const result1 = relativeInMs(mockData, interval, deviation);
		expect(result1).toEqual({ timestamp: '2022-04-09T00:00:00.000Z' });

		// Test with a timestamp exactly 2 days before the latest timestamp
		const result2 = relativeInMs(mockData, interval * 2, deviation);
		expect(result2).toEqual({ timestamp: '2022-04-08T00:00:00.000Z' });

		// Test with a timestamp exactly 3 days before the latest timestamp
		const result3 = relativeInMs(mockData, interval * 3, deviation);
		expect(result3).toEqual(undefined);
	});

	it('returns the closest timestamp within small deviation from the relative time', () => {
		const interval = 24 * 60 * 60 * 1000; // 1 day in milliseconds

		// Test with a timestamp exactly 3 days before the latest timestamp
		const result3 = relativeInMs(mockData, interval * 3, 1 / 3);
		expect(result3).toEqual({ timestamp: '2022-04-08T00:00:00.000Z' });
	});

	it('returns undefined if the array is empty', () => {
		expect(relativeInMs([], 0, 0)).toEqual(undefined);
	});

	it('returns undefined if there is no timestamp within deviation from the relative time', () => {
		const interval = 24 * 60 * 60 * 1000; // 1 day in milliseconds
		const deviation = 0.01; // 1 second in milliseconds

		// Test with a timestamp exactly 4 days before the latest timestamp
		const result1 = relativeInMs(mockData, interval * 4, deviation);
		expect(result1).toEqual(undefined);

		// Test with a timestamp exactly 5 days before the latest timestamp
		const result2 = relativeInMs(mockData, interval * 5, deviation);
		expect(result2).toEqual(undefined);
	});
});

describe('generate test', () => {
	it('generate array with 10 numbers and expect array length of 10', () => {
		expect(generate(0, 1, 10).length).toBe(10);
	});
});
