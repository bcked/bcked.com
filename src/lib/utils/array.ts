import _ from 'lodash';
import { round } from './math';

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;
const MONTH_IN_MS = 30 * DAY_IN_MS;

/** Get the closest element in time. */
export function closest<T extends { timestamp: string }>(array: T[], timestamp: string): T {
	return _.minBy(array, (item) => {
		return Math.abs(new Date(item.timestamp).getTime() - new Date(timestamp).getTime());
	})!;
}

// TODO Write binary search -> always splitting search space in half. This makes use of the sorted array.
// export function closest<T extends { timestamp: string }>(array: T[], timestamp: string): T {
// 	let left = 0;
// 	let right = array.length - 1;
// 	let mid = 0;

// 	while (left <= right) {
//      // TODO could probably use heuristic to estimate a better middle
//      // Check were relative to left and right the timestamp is and choose middle respectively
// 		const mid = Math.floor((left + right) / 2);
// 		const midTimestamp = array[mid]!.timestamp;
// 		// If we find an exact match, return immediately
// 		if (midTimestamp === timestamp) break;
// 		if (mid === left || mid === right) {
// 			const t = new Date(timestamp).getTime();
// 			const ldiff = new Date(array[left]!.timestamp).getTime() - t;
// 			const rdiff = new Date(array[right]!.timestamp).getTime() - t;
// 			return ldiff < rdiff ? array[left]! : array[right]!;
// 		}
// 		if (midTimestamp < timestamp) {
// 			// If the middle element is too early, search the right half
// 			left = mid;
// 		} else {
// 			// If the middle element is too late, search the left half
// 			right = mid;
// 		}
// 	}

// 	return array[mid]!;
// }

/** Get element in an interval in ms relative to the latest element. */
export function relativeInMs<T extends { timestamp: string }>(
	array: T[],
	interval: number,
	deviation: number
): T | undefined {
	if (array.length == 0) return undefined;

	const relativeTime = new Date(array.at(-1)!.timestamp).getTime() - interval;

	const elem = closest(array, new Date(relativeTime).toISOString());

	if (Math.abs(new Date(elem.timestamp).getTime() - relativeTime) > interval * deviation)
		return undefined;

	return elem;
}

export function relativeInHours<T extends { timestamp: string }>(
	array: T[],
	interval: number,
	deviation: number = 0.1
): T | undefined {
	return relativeInMs(array, interval * HOUR_IN_MS, deviation);
}

export function relativeInDays<T extends { timestamp: string }>(
	array: T[],
	interval: number,
	deviation: number = 0.1
): T | undefined {
	return relativeInMs(array, interval * DAY_IN_MS, deviation);
}

export function relativeInMonths<T extends { timestamp: string }>(
	array: T[],
	interval: number,
	deviation: number = 0.1
): T | undefined {
	return relativeInMs(array, interval * MONTH_IN_MS, deviation);
}

/** Get a list of unique time strings within a specified range in milliseconds. */
export function uniqueTimesWithInMs(timestamps: agg.Timestamp[], withIn: number): agg.Timestamp[] {
	const roundedTimestamps = timestamps.map((timestamp) =>
		new Date(round(new Date(timestamp).getTime() / withIn) * withIn).toISOString()
	);
	const uniqueList = [...new Set(roundedTimestamps)].sort();
	return uniqueList;
}

/** Get a list of unique time strings within a specified range in milliseconds. */
export function uniqueTimesWithInHours(
	timestamps: agg.Timestamp[],
	withIn: number = 1
): agg.Timestamp[] {
	return uniqueTimesWithInMs(timestamps, withIn * HOUR_IN_MS);
}

/** Generate array of numbers between min and max value. */
export function generate(min: number, max: number, n: number): number[] {
	const interval = (max - min) / (n - 1);
	const initial = new Array(n).fill(min);
	return initial.map((value, index) => index * interval + value);
}

export function groupWhile<T>(array: T[], condition: (group: T[]) => boolean) {
	let groups: T[][] = [];
	let popArray: T[] = _.cloneDeep(array).reverse(); // reverse so that we can use pop for a better efficiency
	let bufferArray: T[] = [];
	while (popArray.length > 0) {
		const item = popArray.pop()!;
		if (condition([...bufferArray, item])) {
			bufferArray = [...bufferArray, item];
		} else if (condition([item])) {
			groups.push(bufferArray);
			bufferArray = [item];
		} else {
			console.log(`Item ${item} did not match condition and was discarded.`);
			continue;
		}
	}
	groups.push(bufferArray);
	return groups;
}
