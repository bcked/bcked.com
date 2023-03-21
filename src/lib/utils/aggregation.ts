import { fileHistory } from '$lib/utils/git';
import glob from 'glob';
import _ from 'lodash';
import path from 'path';
import { readJson, writeAggregation } from './files';

export async function readFolders<Key extends string, Type>(
	folder: string,
	filename: string,
	root: string = '.'
): Promise<{ [Property in Key]: Type & { id: Key; git: git.FileHistory } }> {
	return _.keyBy(
		await Promise.all(
			glob.sync(`${root}/${folder}/*/${filename}.json`).map(async (filepath) => ({
				id: path.basename(path.dirname(filepath)),
				...(await readJson<Type>(filepath))!,
				git: await fileHistory(filepath)
			}))
		),
		'id'
	) as { [Property in Key]: Type & { id: Key; git: git.FileHistory } };
}

export async function aggregateFolders<
	Key extends string,
	Type extends { id: Key; git: git.FileHistory }
>(folder: string, filename: string, root: string = '.'): Promise<{ [id: string]: Type }> {
	const data = await readFolders<Key, Type>(folder, filename, root);
	const sortedData = Object.fromEntries(Object.entries(data).sort());
	writeAggregation(`${folder}-${filename}`, sortedData);
	return data;
}
