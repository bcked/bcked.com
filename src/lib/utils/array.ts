import _ from 'lodash';

/** Get the closest element in time. */
export function closest(array: { timestamp: string }[], timestamp: string) {
	return _.minBy(array, (item) =>
		Math.abs(new Date(item.timestamp).getTime() - new Date(timestamp).getTime())
	);
}

/** Generate array of numbers between min and max value. */
export function generate(min: number, max: number, n: number) {
	const interval = (max - min) / (n - 1);
	const initial = new Array(n).fill(min);
	return initial.map((value, index) => index * interval + value);
}
