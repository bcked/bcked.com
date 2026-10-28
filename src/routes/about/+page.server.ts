import { GITHUB_TOKEN } from '$app/env/private';
import { renderMarkdown } from '#lib/content.ts';
import type { PageServerLoad } from './$types';

const REPOSITORIES = ['bcked/bcked.com', 'bcked/bcked-adapters'];

type GitHubIssue = {
	title: string;
	html_url: string;
	updated_at: string;
	labels: { name: string }[];
	pull_request?: unknown;
};

export type RoadmapItem = {
	title: string;
	url: string;
	repository: string;
	updated: string;
	labels: string[];
};

/** Open enhancement issues of all repositories, most recently updated first. */
async function loadRoadmap(fetch: typeof globalThis.fetch): Promise<RoadmapItem[] | null> {
	try {
		const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
		if (GITHUB_TOKEN) headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;

		const issues = await Promise.all(
			REPOSITORIES.map(async (repository) => {
				const response = await fetch(
					`https://api.github.com/repos/${repository}/issues?labels=enhancement&state=open&per_page=100`,
					{ headers }
				);
				if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);
				const items = (await response.json()) as GitHubIssue[];
				return items
					.filter((issue) => !issue.pull_request)
					.map((issue) => ({
						title: issue.title,
						url: issue.html_url,
						repository,
						updated: issue.updated_at,
						labels: issue.labels.map((label) => label.name).filter((name) => name != 'enhancement')
					}));
			})
		);
		return issues.flat().toSorted((a, b) => b.updated.localeCompare(a.updated));
	} catch (error) {
		// The roadmap is optional, the page still builds without it.
		console.warn('Could not load roadmap issues:', error);
		return null;
	}
}

export const load: PageServerLoad = async ({ fetch }) => ({
	html: renderMarkdown('/ABOUT.md'),
	roadmap: await loadRoadmap(fetch)
});
