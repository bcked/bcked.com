import { GH_TOKEN } from '$env/static/private';
import { compareDates } from '$lib/utils/string-formatting';
import { graphql } from '@octokit/graphql';
import fs from 'fs';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

type QueryRepository = {
	repository: {
		issues: {
			nodes: {
				title: string;
				updatedAt: string;
				body: string;
				url: string;
				labels: {
					nodes: {
						name: string;
					}[];
				};
				projectItems: {
					nodes: {
						iteration: {
							startDate: string;
							title: string;
							duration: number;
						} | null;
						status: {
							name: string;
						} | null;
					}[];
				};
			}[];
		};
	};
};

export const load: PageServerLoad = async (): Promise<{
	content: string;
	roadmapIssues: gh.Issues;
}> => {
	console.log('Loading GitHub data');
	const graphqlWithAuth = graphql.defaults({
		headers: {
			authorization: `token ${GH_TOKEN}`
		}
	});

	console.log('Check GH token');
	console.log(GH_TOKEN ? GH_TOKEN.slice(0, 5) : 'No GitHub token');

	// Test here: https://docs.github.com/en/graphql/overview/explorer
	const queryRepository: QueryRepository = await graphqlWithAuth(`
		{
			repository(owner: "bcked", name: "bcked.com") {
			  issues(first: 100, states: [OPEN]) {
				nodes {
				  title
				  updatedAt
				  body
				  url
				  labels(first: 10) {
					nodes {
					  name
					}
				  }
				  projectItems(first: 1) {
					nodes {
					  iteration: fieldValueByName(name: "Iteration") {
						... on ProjectV2ItemFieldIterationValue {
						  startDate
						  title
						  duration
						}
					  }
					  status: fieldValueByName(name: "Status") {
						... on ProjectV2ItemFieldSingleSelectValue {
						  name
						}
					  }
					}
				  }
				}
			  }
			}
		}
	`);
	console.log('Queried repository');
	console.log(JSON.stringify(queryRepository, null, 2));

	const roadmapIssues = queryRepository.repository.issues.nodes
		.filter((issue) =>
			issue.labels.nodes.some(
				(label) => (typeof label === 'string' ? label : label.name) == 'enhancement'
			)
		)
		.filter((issue) => issue.projectItems.nodes[0]?.iteration != null)
		.map((issue) => ({ ...issue, labels: issue.labels.nodes }))
		.map((issue) => ({ ...issue, iteration: issue.projectItems.nodes[0]!.iteration! }))
		.sort((a, b) => compareDates(a.updatedAt, b.updatedAt))
		.sort((a, b) => -compareDates(a.iteration.startDate, b.iteration.startDate))
		.map((issue) => ({
			...issue,
			body: marked(issue.body!)
		}));

	console.log('Roadmap issues');
	console.log(JSON.stringify(roadmapIssues, null, 2));

	return {
		content: marked(fs.readFileSync(`ABOUT.md`, 'utf-8')),
		roadmapIssues
	};
};
