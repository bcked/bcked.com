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
 */
export function round(num: number, decimalPlaces: number = 0): number {
	var p = Math.pow(10, decimalPlaces);
	var n = num * p * (1 + Number.EPSILON);
	return Math.round(n) / p;
}

/**
 * Measure the uniformity of the provided values.
 * This makes use of the [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence).
 * Results have a precision of 4 decimals in the range [0, 1].
 */
export function uniformity(values: number[]): number {
	if (!values || [0, 1].includes(values.length)) {
		return 1;
	}

	const sum = values.reduce((a, b) => a + b, 0);
	if (sum == 0) {
		return 1;
	}

	const relativeValues = values.map((v) => v / sum);
	const relativePercentage = 1 / values.length;
	const klDivergence = relativeValues.reduce(
		(kl, v) => kl + (v * Math.log(v / relativePercentage) || 0),
		0
	);
	return 1 - klDivergence;
}
