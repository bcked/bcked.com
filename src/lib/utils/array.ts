import _ from 'lodash';
import { round } from './math';

/** Get the closest element in time. */
export function closest<Type>(array: (Type & { timestamp: string })[], timestamp: string): Type {
	return _.minBy(array, (item) =>
		Math.abs(new Date(item.timestamp).getTime() - new Date(timestamp).getTime())
	)!;
}

/** Get a list of unique time strings within a specified range in milliseconds. */
export function uniqueTimes(timestamps: agg.Timestamp[], uniqueWithInMs: number): agg.Timestamp[] {
	const roundedTimestamps = timestamps.map((timestamp) =>
		new Date(round(new Date(timestamp).getTime() / uniqueWithInMs) * uniqueWithInMs).toISOString()
	);
	const uniqueList = [...new Set(roundedTimestamps)].sort();
	return uniqueList;
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
