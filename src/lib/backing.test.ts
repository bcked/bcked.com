import { describe, expect, it } from 'vitest';
import type { GraphSnapshot } from './api.ts';
import { groupTokens, partColor, reserveRows, smoothReports, snapshotLinks } from './backing.ts';

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

describe('partColor', () => {
	it('uses a deeper shade of the same hue for thin parts', () => {
		expect(partColor('rwa:USD')).toBe('oklch(0.83 0.08 155)');
		expect(partColor('rwa:USD', 0, true)).toBe('oklch(0.67 0.128 155)');
	});
});

describe('snapshotLinks', () => {
	it('leaves out links with a recorded zero but keeps unknown values', () => {
		const links = snapshotLinks({
			date: '2026-06-30',
			links: [
				['token', 'rwa:USTB', 100],
				['token', 'rwa:CP', 0],
				['token', 'rwa:XAU', null]
			]
		});
		expect(links.map((l) => l.target)).toEqual(['rwa:USTB', 'rwa:XAU']);
	});
});

describe('reserveRows', () => {
	it('counts value passed through a token once, at the reserve asset', () => {
		const rows = reserveRows([
			{
				date: '2026-06-30',
				links: [
					['usdt', 'rwa:USTB', 60],
					['usdt', 'wbtc', 40],
					['wbtc', 'bitcoin:BTC', 40]
				]
			}
		]);
		expect(rows.map((r) => [r.id, r.usd, r.share])).toEqual([
			['rwa:USTB', 60, 0.6],
			['bitcoin:BTC', 40, 0.4]
		]);
		expect(rows[1]!.holders).toEqual([{ id: 'wbtc', usd: 40 }]);
	});
});

describe('groupTokens', () => {
	const token = (id: string, system: string, reserves: number, ratio: number, cap: number) =>
		({
			id,
			name: 'Tether USD',
			symbol: 'USDT',
			system,
			linkedEntities: { issuer: 'tether' },
			collateral: { date: '2026-06-30', value: reserves, change: {} },
			'collateralization-ratio': { date: '2026-06-30', value: ratio, change: {} },
			'market-cap': { date: '2026-10-30', value: cap, change: {} },
			composition: { date: '2026-06-30', parts: { 'rwa:USTB': reserves } }
		}) as never;

	it('adds up a token across chains and keeps the ratio at the backing date', () => {
		const [group] = groupTokens([
			token('ethereum:usdt', 'ethereum', 80, 1.0, 90),
			token('tron:usdt', 'tron', 90, 1.125, 95)
		]);
		expect(group!.id).toBe('tron:usdt');
		expect(group!.chains).toEqual(['tron', 'ethereum']);
		expect(group!.collateral!.value).toBe(170);
		expect(group!['market-cap']!.value).toBe(185);
		expect(group!['collateralization-ratio']!.value).toBeCloseTo(170 / 160);
		expect(group!.composition!.parts['rwa:USTB']).toBe(170);
	});
});
