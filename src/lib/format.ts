type Notation = 'standard' | 'scientific' | 'engineering' | 'compact';

function notationFor(num: number): Notation {
	if (Math.abs(num) >= 1000) return 'compact';
	if (num !== 0 && Math.abs(num) < 0.1) return 'scientific';
	return 'standard';
}

export function formatCurrency(num: number, digits = 2, currency = 'USD'): string {
	return Intl.NumberFormat('en-US', {
		notation: notationFor(num),
		minimumFractionDigits: digits,
		maximumFractionDigits: digits,
		style: 'currency',
		currency
	}).format(num);
}

export function formatNum(num: number, digits = 2): string {
	return Intl.NumberFormat('en-US', {
		notation: notationFor(num),
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(num);
}

export function formatPercentage(num: number, digits = 0): string {
	return Intl.NumberFormat('en-US', {
		style: 'percent',
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(num);
}

export function formatDate(date: string | number | Date): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC'
	});
}

/** Sort comparator for table values: numbers numerically, everything else as text, missing values last. */
export function compare(
	a: string | number | null | undefined,
	b: string | number | null | undefined,
	descending = true
): number {
	if (a == null && b == null) return 0;
	if (a == null) return 1;
	if (b == null) return -1;
	const result =
		typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b));
	return descending ? -result : result;
}
