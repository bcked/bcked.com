import { Octokit } from 'octokit';

const octokit = new Octokit();

// const issues = await octokit.request(
// 	'GET /repos/{owner}/{repo}/issues{?milestone,state,assignee,creator,mentioned,labels,sort,direction,since,per_page,page}',
// 	{
// 		owner: 'github',
// 		repo: 'roadmap'
// 	}
// );

const columns = await octokit.request('GET /projects/{project_id}/columns{?per_page,page}', {
	project_id: '4247'
});

console.log(columns);
