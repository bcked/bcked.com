<script lang="ts">
	const proposals = [
		['1', 'Proof ledger', 'Editorial report style. Every row shows composition, date and source.'],
		['2', 'Terminal', 'Dark, data-dense. Filters, composition chips, where the reserves sit.'],
		['3', 'Backing chain explorer', 'Follow the backing from tokens to reserve assets.'],
		['4', 'Token check', 'Search first, then a full spotlight of one token.'],
		['5', 'Institutional', 'Calm and spacious. The three USPs, each on real data.']
	];
</script>

<div class="mx-auto w-full max-w-3xl px-4 py-12">
	<h1 class="text-2xl font-semibold tracking-tight">Design proposals</h1>
	<p class="mt-2 text-muted-foreground">
		Five directions for bcked.com, all built on live API data.
	</p>
	<ol class="mt-8 divide-y rounded-xl border bg-card">
		{#each proposals as [n, name, text] (n)}
			<li>
				<a href="/proposals/{n}" class="flex items-baseline gap-4 px-5 py-4 hover:bg-muted">
					<span class="font-mono text-sm text-muted-foreground">{n}</span>
					<span class="font-medium">{name}</span>
					<span class="text-sm text-muted-foreground">{text}</span>
				</a>
			</li>
		{/each}
	</ol>
</div>
