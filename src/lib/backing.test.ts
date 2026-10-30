import { describe, expect, it } from 'vitest';
import type { GraphSnapshot } from './api.ts';
import {
	graphByToken,
	listRows,
	partColor,
	reserveRows,
	smoothReports,
	snapshotLinks
} from './backing.ts';

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

describe('listRows', () => {
	const asset = (id: string, system: string, cap: number, token: string | null) =>
		({ id, system, token, backing: 'reports', 'market-cap': { value: cap } }) as never;

	it('lists tokens and the assets that are not a chain of a token', () => {
		const rows = listRows(
			[
				asset('ethereum:usdt', 'ethereum', 70, 'usdt'),
				asset('tron:usdt', 'tron', 90, 'usdt'),
				asset('ethereum:wbtc', 'ethereum', 9, null)
			],
			[
				{
					id: 'usdt',
					name: 'Tether USD',
					assets: ['ethereum:usdt', 'tron:usdt'],
					'market-cap': { value: 160 }
				} as never
			],
			{ token: (id) => `/tokens/${id}`, asset: (id) => `/assets/${id}` }
		);
		expect(rows.map((r) => [r.id, r.href, r.chains])).toEqual([
			['usdt', '/tokens/usdt', ['tron', 'ethereum']],
			['ethereum:wbtc', '/assets/ethereum:wbtc', ['ethereum']]
		]);
	});
});

describe('graphByToken', () => {
	it('combines the chains of a token into one node', () => {
		const assets = [
			{ id: 'ethereum:usdt', token: 'usdt' },
			{ id: 'tron:usdt', token: 'usdt' }
		] as never;
		const { snapshots, reports } = graphByToken(
			{
				snapshots: [
					{
						date: '2026-06-30',
						links: [
							['ethereum:usdt', 'rwa:USTB', 40],
							['tron:usdt', 'rwa:USTB', 50],
							['tron:usdt', 'rwa:XAU', 5]
						]
					}
				],
				reports: { 'ethereum:usdt': ['2026-06-30'], 'tron:usdt': ['2026-06-30'] }
			},
			assets
		);
		expect(snapshots[0]!.links).toEqual([
			['usdt', 'rwa:USTB', 90],
			['usdt', 'rwa:XAU', 5]
		]);
		expect(reports).toEqual({ usdt: ['2026-06-30'] });
	});
});
