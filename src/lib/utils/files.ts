import fs from 'fs';

export function readJson<Type>(filepath: string): Type | undefined {
	if (!fs.existsSync(filepath)) return undefined;
	return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

export function writeJson(filepath: string, obj: Object) {
	fs.writeFileSync(filepath, JSON.stringify(obj, null, 4));
}
