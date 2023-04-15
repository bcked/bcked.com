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

export function writeHistory(
	t: 'price' | 'supply' | 'backing',
	id: derived.AssetId,
	history: object[] = []
) {
	writeJson(`./assets/${id}/${t}.json`, { history });
}

export function writeHistoryUpdate(
	t: 'price' | 'supply' | 'backing',
	id: derived.AssetId,
	queryResult: query.Result,
	historyData: { [Property in derived.AssetId]: { history: object[] } }
) {
	if (!queryResult[t] && historyData[id]) return; // No change

	if (queryResult[t] && historyData[id]) {
		historyData[id]!.history.push(queryResult[t]!);
	} else if (queryResult[t]) {
		historyData[id] = { history: [queryResult[t]!] };
	} else {
		historyData[id] = { history: [] };
	}

	writeHistory(t, id, historyData[id]!.history);
}
