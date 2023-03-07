<script lang="ts">
	import { CalendarIcon, SearchIcon, StarIcon } from '@rgossiaux/svelte-heroicons/solid';

	export let issues: gh.Issues;
</script>

{#each issues as issue, i}
	<li>
		<div class="relative pb-8">
			{#if i !== issues.length - 1}
				<span class="absolute top-5 left-4 -ml-px h-full w-0.5 bg-gray-500" aria-hidden="true" />
			{/if}
			<div class="relative flex items-start space-x-3">
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
					{#if issue.labels.some((label) => label.name == 'enhancement')}
						<StarIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
					{:else if issue.labels.some((label) => label.name == 'listing')}
						<SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
					{:else if issue.labels.some((label) => label.name == 'bug')}
						<CalendarIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
					{/if}
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
