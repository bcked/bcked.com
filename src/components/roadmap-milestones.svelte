<script lang="ts">
	import _ from 'lodash-es';
	import Issues from '$components/roadmap-issues.svelte';

	export let issues: gh.Issues;

	const issuesByMilestone = _.groupBy(issues, (issue) => issue.milestone.title);
</script>

{#each Object.entries(issuesByMilestone) as [milestone, issues]}
	<div class="py-4 text-lg font-semibold text-gray-900">Planned for {milestone}</div>
	<ul class="-mb-8">
		<Issues {issues} />
	</ul>
{/each}
