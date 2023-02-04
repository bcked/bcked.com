import { writeJson } from '$lib/utils/files';
import fs from 'fs';
import glob from 'glob';
import _ from 'lodash';
import path from 'path';

const PATH = './assets';

export function getLatestTimestamp(folder: string): number | undefined {
	const timestamps = glob
		.sync(`${folder}/*T*Z.json`)
		.map((filepath) => new Date(path.parse(filepath).name).getTime());
	return _.max(timestamps);
}

export function writeTimestampFile(
	name: string,
	type: string,
	obj: (Object & { timestamp: number | string }) | undefined | null,
	patience: number = 12 * 60 * 60 * 1000 // 12h
) {
	if (!obj) {
		console.log(`${name}: No ${type} data to store.`);
		return;
	}
	const folder = `${PATH}/${name}/${type}`;
	fs.mkdirSync(folder, { recursive: true });
	const ts = new Date(obj.timestamp);

	const latestTs = getLatestTimestamp(folder);
	if (!latestTs || ts.getTime() - latestTs > patience) {
		const isoTimestamp = ts.toISOString();
		writeJson(`${folder}/${isoTimestamp}.json`, _.omit(obj, 'timestamp'));
	} else {
		console.log(
			`${name}: No ${type} update due to latest timestamp ${latestTs} and current timestamp ${ts.getTime()}.`
		);
	}
}
