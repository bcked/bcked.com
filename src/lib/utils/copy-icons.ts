import fs from 'fs';
import glob from 'glob';
import _ from 'lodash';
import path from 'path';
import { writeAggregation } from './files';

export function queryIcons(source: string, target: string): { [key: string]: agg.Icon } {
	const icons: agg.Icon[] = glob.sync(source).map((filepath) => {
		const file = path.parse(filepath);
		const basename = path.basename(file.dir);
		return {
			...file,
			basename,
			source: filepath,
			target: path.join('./static', target, basename),
			href: path.join(target, basename, file.base)
		};
	});

	// TODO This can be parallelized
	// for (const icon of icons) {
	// 	// Create folder if it does not exist
	// 	fs.mkdirSync(icon.target, { recursive: true });
	// 	fs.copyFileSync(path.resolve(icon.dir, icon.base), path.resolve(icon.target, icon.base));
	// }

	return _.keyBy(icons, 'basename');
}

export function aggregateIcons(name: string): { [key: string]: agg.Icon } {
	const icons = queryIcons(`./${name}/**/icon.png`, name);
	writeAggregation(`${name}-icons`, icons);
	return icons;
}

export function copyIcons(source: string, target: string) {
	const icons = queryIcons(source, target);

	// TODO This can be parallelized
	for (const icon of Object.values(icons)) {
		// Create folder if it does not exist
		fs.mkdirSync(icon.target, { recursive: true });
		fs.copyFileSync(path.resolve(icon.dir, icon.base), path.resolve(icon.target, icon.base));
	}
}
