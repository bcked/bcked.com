import { fileHistory } from '$lib/utils/git';
import glob from 'glob';
import _ from 'lodash';
import path from 'path';
import { readJson, writeAggregation } from './files';

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

export async function aggregateFolders<Type>(
	folder: string,
	filename: string,
	root: string = '.'
): Promise<{ [id: string]: Type }> {
	const data = await readFolders<Type>(folder, filename, root);
	writeAggregation(`${folder}-${filename}`, data);
	return data;
}
