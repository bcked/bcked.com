import { describe, expect, it } from 'vitest';
import type { GraphSnapshot } from './api.ts';
import { smoothReports } from './backing.ts';

/** Weekly snapshots of one token backed by T-bills, from values per week. */
function weeks(values: number[]): GraphSnapshot[] {
	return values.map((usd, i) => ({
		date: new Date(Date.UTC(2026, 0, 4 + 7 * i)).toISOString().slice(0, 10),
		links: [['token', 'rwa:USTB', usd]]
	}));
}
const value = (s: GraphSnapshot) => s.links[0]![2];

describe('smoothReports', () => {
	it('spreads the change at a report over the weeks since the report before', () => {
		const snapshots = weeks([100, 100, 100, 100, 200]);
		const smoothed = smoothReports(snapshots, { token: [snapshots[0]!.date, snapshots[4]!.date] });
		expect(smoothed.map(value)).toEqual([100, 125, 150, 175, 200]);
	});

	it('keeps price moves between reports', () => {
		const snapshots = weeks([100, 110, 90, 100, 200]);
		const smoothed = smoothReports(snapshots, { token: [snapshots[0]!.date, snapshots[4]!.date] });
		expect(smoothed.map(value)).toEqual([100, 135, 140, 175, 200]);
	});

	it('leaves assets without report dates and long gaps as recorded', () => {
		const snapshots = weeks([100, 100, 100, 100, 200]);
		expect(smoothReports(snapshots, {}).map(value)).toEqual([100, 100, 100, 100, 200]);
		const yearly = weeks([100, 100, 100, 100, 200]);
		yearly[4]!.date = '2027-06-01';
		expect(smoothReports(yearly, { token: [yearly[0]!.date, '2027-06-01'] }).map(value)).toEqual([
			100, 100, 100, 100, 200
		]);
	});
});
