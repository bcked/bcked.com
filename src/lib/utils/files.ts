import fs from 'fs';

export async function readJson<Type>(filepath: string): Promise<Type | undefined> {
	if (!fs.existsSync(filepath)) return undefined;
	return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

export function writeJson<Type>(filepath: string, obj: Type) {
	fs.writeFileSync(filepath, JSON.stringify(obj, null, 4));
}

export async function readAggregation<Type>(
	name: string,
	target: string = './.aggregation'
): Promise<Type | undefined> {
	return await readJson<Type>(`${target}/${name}.json`);
}

export function writeAggregation<Type>(name: string, obj: Type) {
	writeJson(`./.aggregation/${name}.json`, obj);
}
