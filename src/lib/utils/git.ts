import { simpleGit, type SimpleGit } from 'simple-git';

function formatFileChangeLog(fileChangeLog: git.Log | undefined): git.FileChangeLog {
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

export async function fileHistory(filepath: string): Promise<git.FileHistory> {
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
