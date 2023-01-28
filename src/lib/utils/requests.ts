import { groupWhile } from './array';

const URL_MAX_LENGTH = 2048;

export function urlLengthGrouping<T>(array: T[], baseUrl: string, pathUrl: (group: T[]) => string) {
	return groupWhile(array, (group) => (baseUrl + pathUrl(group)).length <= URL_MAX_LENGTH);
}
