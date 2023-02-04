import fs from 'fs';
import glob from 'glob';
import _ from 'lodash';
import path from 'path';
import { fileHistory } from './git';

export async function readJson<Type>(filepath: string): Promise<Type | undefined> {
	if (!fs.existsSync(filepath)) return undefined;
	return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

export function writeJson(filepath: string, obj: Object) {
	fs.writeFileSync(filepath, JSON.stringify(obj, null, 4));
}

export async function readFromCache<Type>(
	name: string,
	target: string = './.cache'
): Promise<Type | undefined> {
	return await readJson<Type>(`${target}/${name}.json`);
}

export async function readFolders<Type>(
	folder: string,
	filename: string,
	root: string = '.'
): Promise<{ [id: string]: Type }> {
	return _.keyBy(
		await Promise.all(
			glob.sync(`${root}/${folder}/*/${filename}.json`).map(async (filepath) => ({
				id: path.basename(path.dirname(filepath)),
				...(await readJson<Type>(filepath))!,
				git: await fileHistory(filepath)
			}))
		),
		'id'
	);
}

export function writeAggregation(name: string, obj: Object) {
	writeJson(`./.cache/${name}.json`, obj); // .aggregation
}

export async function aggregateFolders<Type>(
	folder: string,
	filename: string,
	root: string = '.'
): Promise<{ [id: string]: Type }> {
	const data = await readFolders<Type>(folder, filename, root);
	writeAggregation(`${folder}-${filename}`, data);
	return data;
}
