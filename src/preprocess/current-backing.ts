import { round, uniformity } from '$lib/utils/math';

export function calcCurrentBacking(assets: api.Assets, trees: api.Trees) {
	for (const [key, { backing, mcap }] of Object.entries(assets)) {
		if (!backing || !mcap) {
			continue;
		}

		for (let [i, currentBacking] of backing.entries()) {
			// const lastLevelBacking = trees[key]![i]!.links.filter(
			// 	(l) => l.target == 'unbacked' && l.source != key
			// ).map((l) => l.value);
			const lastLevelBacking = trees[key]![i]!.links.filter(
				(l) => l.target != 'unbacked' && l.source == key
			).map((l) => l.value);

			currentBacking['backing-assets'] = lastLevelBacking.length;

			const totalLastLevelBacking = lastLevelBacking.reduce((s, v) => s + v, 0);
			currentBacking['backing-usd'] = round(totalLastLevelBacking, 2) || 0;
			currentBacking['ratio'] = round(totalLastLevelBacking / mcap, 4) || 0;
			currentBacking['uniformity'] = round(uniformity(lastLevelBacking), 4);
		}
	}
}
