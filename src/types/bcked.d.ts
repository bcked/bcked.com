declare namespace bcked {
	type Asset = {};

	type Assets = { [key: string]: bcked.Asset };

	type Stats = {
		'backing-usd': number;
		'ratio-avg': number;
		'uniformity-avg': number;
		'backed-assets': bigint;
		assets: bigint;
		'backing-usd-avg': number;
	};
}
