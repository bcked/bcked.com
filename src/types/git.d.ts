declare namespace git {
	import type { DefaultLogFields, ListLogLine } from 'simple-git';

	type FileChangeLog = {
		hash: string | null;
		date: string;
	};

	type FileHistory = {
		updated: FileChangeLog;
		created: FileChangeLog;
	};

	type Log = DefaultLogFields & ListLogLine;

	type Meta = {
		git: {
			updated: {
				hash: string;
				date: Timestamp;
			};
			created: {
				hash: string;
				date: Timestamp;
			};
		};
	};
}
