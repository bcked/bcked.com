import { readJson, writeJson } from '$lib/utils/files';

const PATH = './.cache';

export function writeToCache(name: string, obj: Object) {
	writeJson(`${PATH}/${name}.json`, obj);
}

export function readFromCache<Type>(name: string): Type | undefined {
	return readJson<Type>(`${PATH}/${name}.json`);
}
