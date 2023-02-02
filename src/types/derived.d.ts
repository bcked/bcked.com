// import type assets from '.cache/assets.json';

declare namespace derived {
	// TODO Load from .cache if possible: https://stackoverflow.com/questions/75275784/how-to-declare-type-loaded-dynamically-from-json-in-namespace
	type AssetId = string; //keyof typeof assets;

	// TODO Load from .cache when chains are preprocessed
	type ChainId = string;
}
