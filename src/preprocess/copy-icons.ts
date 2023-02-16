import fs from 'fs';
import glob from 'glob';
import _ from 'lodash';
import path from 'path';

export function queryIcons(source: string, target: string): agg.Icons {
	const icons: cache.Icon[] = glob.sync(source).map((filepath) => {
		const file = path.parse(filepath);
		const basename = path.basename(file.dir);
		return {
			...file,
			basename,
			source: filepath,
			target: path.resolve('./static', target, basename),
			href: path.join(target, basename, file.base)
		};
	});

	// TODO This can be parallelized
	for (const icon of icons) {
		// Create folder if it does not exist
		fs.mkdirSync(icon.target, { recursive: true });
		fs.copyFileSync(path.resolve(icon.dir, icon.base), path.resolve(icon.target, icon.base));
	}

	return _.keyBy(icons, 'basename');
}

export function copyIcons(source: string, target: string) {
	const icons: agg.Icons = queryIcons(source, target);

	// TODO This can be parallelized
	for (const icon of Object.values(icons)) {
		// Create folder if it does not exist
		fs.mkdirSync(icon.target, { recursive: true });
		fs.copyFileSync(path.resolve(icon.dir, icon.base), path.resolve(icon.target, icon.base));
	}
}
