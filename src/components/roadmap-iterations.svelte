<script lang="ts">
	import Issues from '$components/roadmap-issues.svelte';
	import _ from 'lodash-es';

	export let issues: gh.Issues;

	const issuesByIteration = _.groupBy(issues, (issue) => issue.iteration.title);
</script>

{#each Object.entries(issuesByIteration) as [iteration, issues]}
	<div class="py-4 text-lg font-semibold text-gray-900">Planned for {iteration}</div>
	<ul class="-mb-8">
		<Issues {issues} />
	</ul>
{/each}
