<script lang="ts">
	import type { PageData } from './$types';
	import { CalendarIcon } from '@rgossiaux/svelte-heroicons/solid';
	import SvelteSeo from 'svelte-seo';
	import _ from 'lodash-es';

	export let data: PageData;

	const issuesByMilestone = _.chain(data.roadmapIssues)
		.groupBy((issue) => issue.milestone)
		.map((issues, milestone) => ({ milestone: issues[0]!.milestone!, issues }))
		.value();
</script>

<SvelteSeo title="About bcked" description="Information about the bcked." noindex />

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<div
		class="prose prose-pink prose-h1:text-3xl prose-headings:tracking-tight prose-headings:font-bold text-gray-900 max-w-7xl"
	>
		{@html data.content}

		<h2>Roadmap</h2>

		<div>Follow our public and completely transparent roadmap planning.</div>
	</div>

	{#each issuesByMilestone as { milestone, issues }}
		<h3 class="py-4 text-lg font-semibold text-gray-900">Planned for {milestone.title}</h3>
		<ul class="-mb-8">
			{#each issues as issue, i}
				<li>
					<div class="relative pb-8">
						{#if i !== issues.length - 1}
							<span
								class="absolute top-5 left-4 -ml-px h-full w-0.5 bg-gray-500"
								aria-hidden="true"
							/>
						{/if}
						<div class="relative flex items-start space-x-3">
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 ring-8 ring-gray-200"
							>
								<CalendarIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
							</div>
							<div class="min-w-0 flex-1">
								<div>
									<div class="text-sm">
										<a href={issue.html_url} class="font-medium text-gray-900">{issue.title}</a>
									</div>
									<p class="mt-0.5 text-sm text-gray-500">
										Last updated on {new Date(issue.updated_at).toLocaleDateString()}
									</p>
								</div>
								<div class="mt-2 text-sm text-gray-700">
									<p class="prose prose-pink max-w-7xl">
										{@html issue.body}
									</p>
								</div>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	{/each}
</div>
