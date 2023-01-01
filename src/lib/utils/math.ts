/** Perform min-max normalization. */
export function minMaxNorm(value: number, min: number, max: number): number {
	return (value - min) / (max - min);
}

/** Perform z-score normalization. */
export function zScoreNorm(value: number, avg: number, std: number): number {
	return (value - avg) / std;
}
