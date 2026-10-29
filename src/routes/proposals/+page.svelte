<script lang="ts">
	const proposals = [
		['1', 'Proof ledger', 'Editorial report style. Every row shows composition, date and source.'],
		['2', 'Terminal', 'Dark, data-dense. Filters, composition chips, where the reserves sit.'],
		['3', 'Backing chain explorer', 'Follow the backing from tokens to reserve assets.'],
		['4', 'Token check', 'Search first, then a full spotlight of one token.'],
		['5', 'Institutional', 'Calm and spacious. The three USPs, each on real data.']
	];
	const views = [
		[
			'explore',
			'Explore',
			'Replaces the 3D graph: Sankey of all backing with search, filters, focus and a time slider.'
		],
		[
			'token/ethereum:0xdAC17F958D2ee523a2206206994597C13D831ec7',
			'Token (USDT)',
			'Chain with history, composition over time, ratio, reserves, sources.'
		],
		[
			'token/ethereum:0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
			'Token (WBTC)',
			'Same view for on-chain backing.'
		],
		['tokens', 'Tokens', 'Ranking with composition, chain depth and report date.'],
		[
			'issuer/tether',
			'Issuer (Tether)',
			'Tokens, combined reserves, value over time, report timeline.'
		],
		[
			'reserve/rwa:USTB',
			'Reserve asset (T-Bills)',
			'New: who holds a reserve asset, through which chain.'
		],
		['reserve/bitcoin:BTC', 'Reserve asset (BTC)', 'Same view for a crypto reserve.']
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
	<h2 class="mt-12 text-lg font-semibold tracking-tight">Views in style 5</h2>
	<ol class="mt-4 divide-y rounded-xl border bg-card">
		{#each views as [path, name, text] (path)}
			<li>
				<a href="/proposals/{path}" class="flex items-baseline gap-4 px-5 py-4 hover:bg-muted">
					<span class="font-medium whitespace-nowrap">{name}</span>
					<span class="text-sm text-muted-foreground">{text}</span>
				</a>
			</li>
		{/each}
	</ol>
</div>
