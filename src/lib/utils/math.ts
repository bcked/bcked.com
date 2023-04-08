import _ from 'lodash';

/** Calculate rate of change with respect to previous value. */
export function rate(prev: number, cur: number): number {
	if (prev === 0 || prev === cur) return 0;
	return (cur - prev) / prev;
}

/** Perform min-max normalization. */
export function minMaxNorm(value: number, min: number, max: number): number {
	return (value - min) / (max - min);
}

/** Perform z-score normalization. */
export function zScoreNorm(value: number, avg: number, std: number): number {
	return (value - avg) / std;
}

/**
 * Round half away from zero ('commercial' rounding)
 * Uses correction to offset floating-point inaccuracies.
 * Works symmetrically for positive and negative numbers.
 * Meaning, that +0.5 will round up and -0.5 will round down.
 * Common rounding always rounds up.
 */
export function round(num: number, decimalPlaces: number = 0): number {
	var p = Math.pow(10, decimalPlaces);
	var n = num * p * (1 + Number.EPSILON);
	return Math.round(n) / p;
}

/**
 * [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence).
 */
function klDivergence(p: number[], q: number[]): number {
	// Check if the arrays have the same length
	if (p.length !== q.length) {
		throw new Error('The arrays must have the same length');
	}

	// Initialize a variable to store the result
	let result = 0;

	// Loop through each element of the arrays
	for (let i = 0; i < p.length; i++) {
		// Check if the probabilities are valid (between 0 and 1)
		if (p[i]! < 0 || p[i]! > 1 || q[i]! < 0 || q[i]! > 1) {
			throw new Error('The probabilities must be between 0 and 1');
		}

		// Check if the probabilities are nonzero
		if (p[i]! > 0 && q[i]! > 0) {
			// Add the contribution of this element to the result
			result += p[i]! * Math.log(p[i]! / q[i]!);
		}
	}

	return result;
}

/**
 * [Jensen–Shannon divergence](https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence).
 */
function jsDivergence(p: number[], q: number[]): number {
	const m = _.zip(p, q).map((values) => _.mean(values));
	return _.mean([klDivergence(p, m), klDivergence(q, m)]);
}

function jsDistance(p: number[], q: number[]): number {
	return Math.sqrt(jsDivergence(p, q));
}

/**
 * Measure the uniformity of the provided values.
 * Results have a precision of 4 decimals in the range [0, 1].
 */
export function uniformity(values: number[]): number {
	if (!values || [0, 1].includes(values.length)) return 1;

	const sum = _.sum(values);
	if (sum == 0) return 1;

	const valuePercentages = values.map((v) => v / sum);
	const uniformDistribution = Array(values.length).fill(1 / values.length);
	return 1 - jsDistance(valuePercentages, uniformDistribution);
}
