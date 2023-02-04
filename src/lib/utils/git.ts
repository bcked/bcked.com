import { simpleGit, type DefaultLogFields, type ListLogLine, type SimpleGit } from 'simple-git';

type FileChangeLog = {
	hash: string | null;
	date: string;
};

type FileHistory = {
	updated: FileChangeLog;
	created: FileChangeLog;
};

type Log = DefaultLogFields & ListLogLine;

function formatFileChangeLog(fileChangeLog: Log | undefined): FileChangeLog {
	if (!fileChangeLog) {
		return {
			hash: null,
			date: new Date().toISOString()
		};
	}

	return {
		hash: fileChangeLog.hash,
		date: new Date(fileChangeLog.date).toISOString()
	};
}

export async function fileHistory(filepath: string): Promise<FileHistory> {
	const git: SimpleGit = simpleGit();

	const fileLogs = await git.log({ file: filepath });
	return {
		updated: formatFileChangeLog(fileLogs.all[0]),
		created: formatFileChangeLog(fileLogs.all[fileLogs.total - 1])
	};
}

export async function commit(selector: string, message: string) {
	const git: SimpleGit = simpleGit();

	await git.add(selector);
	await git.commit(message);
}
