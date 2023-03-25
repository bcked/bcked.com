import fs from 'fs';

export async function readJson<Type>(filepath: string): Promise<Type | undefined> {
	if (!fs.existsSync(filepath)) return undefined;
	return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

export function writeJson(filepath: string, obj: Object) {
	fs.writeFileSync(filepath, JSON.stringify(obj, null, 4));
}

export async function readAggregation<Type>(
	name: string,
	target: string = './.aggregation'
): Promise<Type> {
	const agg = await readJson<Type>(`${target}/${name}.json`);
	if (!agg) throw Error(`Aggregation file ${target}/${name}.json not found.`);
	return agg;
}

export function writeAggregation(name: string, obj: Object) {
	const sortedData = Object.fromEntries(Object.entries(obj).sort());
	writeJson(`./.aggregation/${name}.json`, sortedData);
}

export function writeHistoryUpdate(
	id: derived.AssetId,
	queryResult: query.Result,
	historyData: { [Property in derived.AssetId]: { history: object[] } },
	t: 'price' | 'supply' | 'backing'
) {
	if (queryResult[t] && historyData[id]) {
		historyData[id]!.history.push(queryResult[t]!);
		writeJson(`./assets/${id}/${t}.json`, { history: historyData[id]!.history });
	}
}
