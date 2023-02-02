export function calcStats(assets: api.Assets): api.Stats {
	const stats = Object.values(assets).reduce(
		(a, { backing }) => {
			if (backing.length == 0 || !('backing-usd' in backing[0]!)) {
				return a;
			}
			let currentBacking = backing[0];

			if (currentBacking['backing-usd'] == 0) {
				return { ...a, assets: a['assets'] + 1 };
			}

			return {
				'backing-usd': a['backing-usd'] + currentBacking['backing-usd'],
				'ratio-sum': a['ratio-sum'] + currentBacking['ratio'],
				'uniformity-sum': a['uniformity-sum'] + currentBacking['uniformity'],
				'backed-assets': a['backed-assets'] + 1,
				assets: a['assets'] + 1
			};
		},
		{ 'backing-usd': 0, 'ratio-sum': 0, 'uniformity-sum': 0, 'backed-assets': 0, assets: 0 }
	);

	return {
		'backing-usd': stats['backing-usd'],
		'ratio-avg': stats['ratio-sum'] / stats['backed-assets'],
		'uniformity-avg': stats['uniformity-sum'] / stats['backed-assets'],
		'backed-assets': stats['backed-assets'],
		assets: stats['assets'],
		'backing-usd-avg': stats['backing-usd'] / stats['backed-assets']
	};
}
