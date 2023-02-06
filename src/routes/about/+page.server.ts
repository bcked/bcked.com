import { GH_TOKEN } from '$env/static/private';
import { compareDates } from '$lib/utils/string-formatting';
import { Octokit } from '@octokit/rest';
import fs from 'fs';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const octokit = new Octokit({ auth: GH_TOKEN });

	const roadmapIssues = (
		await octokit.paginate(octokit.rest.issues.listForRepo, {
			owner: 'bcked',
			repo: 'bcked.com',
			state: 'open',
			per_page: 100
		})
	)
		.filter((issue) => issue.milestone && issue.milestone.due_on)
		.filter((issue) => issue.labels.some((label) => label.name == 'enhancement'))
		.sort((a, b) => compareDates(a.updated_at, b.updated_at))
		.sort((a, b) => -compareDates(a.milestone!.due_on!, b.milestone!.due_on!))
		.map((issue) => ({ ...issue, body: marked(issue.body!) }));

	return {
		content: marked(fs.readFileSync(`ABOUT.md`, 'utf-8')),
		roadmapIssues
	};
};
