<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import ForceGraph from '#lib/components/ForceGraph.svelte';
	import Glow from '#lib/components/Glow.svelte';
	import Section from '#lib/components/Section.svelte';
	import SectionHeader from '#lib/components/SectionHeader.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Table from '#lib/components/Table.svelte';
	import type { AssetSummary } from '#lib/api.ts';
	import { formatCurrency, formatPercentage } from '#lib/format.ts';
	import { graphNodes, iconPng } from '#lib/graph.ts';
	import { assetColumns, assetRow, groupColumns, groupRow, isRankable } from '#lib/rows.ts';
	import { blue, pink, yellow } from '#lib/ui.ts';
	import { graphLinksQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const links = graphLinksQuery(() => data.links);

	const ranked = $derived(summaries.data.assets.filter(isRankable));
	const graphNodesData = $derived(
		graphNodes(summaries.data.assets, links.data).map((a) => ({
			id: a.id,
			name: a.name ?? a.id,
			icon: iconPng(a.icon)
		}))
	);
	const backed = $derived(ranked.filter((a) => a.collateral?.value != null));
	const totalBacking = $derived(backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));

	const description = $derived(
		`bcked tracks ${ranked.length} cryptocurrencies, of which ${backed.length} are backed by ${formatCurrency(totalBacking)} in recorded collateral. bcked is an open source community project that provides and visualizes data about cryptocurrency backing.`
	);

	type Discover = {
		title: string;
		items: AssetSummary[];
		value: (asset: AssetSummary) => string;
	};

	const discover: Discover[] = $derived([
		{
			title: 'Highest Backing Ratio',
			items: backed.toSorted(
				(a, b) =>
					(b['collateralization-ratio']?.value ?? 0) - (a['collateralization-ratio']?.value ?? 0)
			),
			value: (a) => formatPercentage(a['collateralization-ratio']?.value ?? 0, 1)
		},
		{
			title: 'Largest Backing',
			items: backed.toSorted((a, b) => (b.collateral?.value ?? 0) - (a.collateral?.value ?? 0)),
			value: (a) => formatCurrency(a.collateral?.value ?? 0)
		},
		{
			title: 'Market Cap Gainers 30d',
			items: ranked
				.filter((a) => a['market-cap']?.change['30d'] != null)
				.toSorted(
					(a, b) => (b['market-cap']?.change['30d'] ?? 0) - (a['market-cap']?.change['30d'] ?? 0)
				),
			value: (a) => formatPercentage(a['market-cap']?.change['30d'] ?? 0, 1)
		}
	]);
</script>

<Seo
	title="bcked: Cryptocurrency Backing, Ranking, History, Stats"
	{description}
	image={{ url: asset('social.svg'), alt: 'bcked' }}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'bcked',
		url: 'https://bcked.com',
		logo: 'https://bcked.com/bcked-logo.svg',
		sameAs: [
			'https://twitter.com/bcked_com',
			'https://www.reddit.com/r/bcked/',
			'https://t.me/bcked_com',
			'https://github.com/bcked/bcked.com'
		]
	}}
/>

<div class="-mt-16 w-full sm:-mt-[104px]">
	<Section
		label="Introduction to bcked"
		class="flex min-h-[80vh] items-center justify-between pt-32"
	>
		<div class="absolute inset-0 -z-10">
			<ForceGraph nodes={graphNodesData} links={links.data} />
		</div>
		<SectionHeader
			title="Reduce your exposure to unbacked assets."
			description="Use insights from our community driven open source knowledge base to find cryptocurrencies backed by various asset classes."
			button={{ text: 'Explore Backing Graph', href: resolve('/graph') }}
			theme={blue}
			class="mt-10"
		>
			<dl class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
				<div>
					<dt class="text-sm font-medium text-gray-500">Recorded backing</dt>
					<dd class="text-3xl font-semibold">{formatCurrency(totalBacking)}</dd>
				</div>
				<div>
					<dt class="text-sm font-medium text-gray-500">Tracked cryptocurrencies</dt>
					<dd class="text-3xl font-semibold">{ranked.length}</dd>
				</div>
				<div>
					<dt class="text-sm font-medium text-gray-500">Issuers</dt>
					<dd class="text-3xl font-semibold">{summaries.data.entities.length}</dd>
				</div>
			</dl>
		</SectionHeader>
	</Section>
</div>

<Section id="discover" label="Discover backed cryptocurrencies">
	<SectionHeader
		title="Discover"
		description="Find the best backed cryptocurrencies and recent movers."
		theme={yellow}
	/>
	<div
		class="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-4 px-0 sm:px-4 md:grid-cols-3 lg:px-8"
	>
		{#each discover as list (list.title)}
			<Glow theme={yellow}>
				<div class="h-full overflow-hidden bg-gray-50 px-4 py-5 text-gray-900 sm:rounded-lg sm:p-6">
					<h3 class="text-lg font-semibold">{list.title}</h3>
					<ol class="mt-2 space-y-2">
						{#each list.items.slice(0, 5) as item, i (item.id)}
							<li>
								<a
									href={resolve('/assets/[id]', { id: item.id })}
									class="flex items-center justify-between space-x-2 hover:text-neon-pink"
								>
									<span class="flex min-w-0 items-center space-x-2">
										<span class="text-sm text-gray-500">{i + 1}</span>
										<AssetIcon src={item.icon} name={item.name} />
										<span class="truncate font-semibold">{item.name}</span>
									</span>
									<span>{list.value(item)}</span>
								</a>
							</li>
						{:else}
							<li class="text-gray-500">No data yet.</li>
						{/each}
					</ol>
				</div>
			</Glow>
		{/each}
	</div>
</Section>

<Section id="ranking" label="Ranking of backed cryptocurrencies">
	<SectionHeader
		title="Ranking"
		description="Compare cryptocurrencies based on their backing amount and ratio."
		button={{ text: 'View full Ranking', href: resolve('/assets') }}
		theme={pink}
	/>
	<div class="mx-auto mt-10 w-full max-w-7xl px-0 sm:px-4 lg:px-8">
		<Glow theme={pink} class="-inset-x-4 animate-tilt-1 sm:-inset-x-0">
			<Table
				columns={assetColumns}
				rows={ranked.map(assetRow)}
				sortBy="market-cap"
				rank
				length={10}
				class="sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>

<Section id="issuers" label="Issuers of backed cryptocurrencies">
	<SectionHeader
		title="Issuers"
		description="See who issues backed cryptocurrencies and how much value they hold."
		button={{ text: 'View all Issuers', href: resolve('/issuers') }}
		theme={yellow}
	/>
	<div class="mx-auto mt-10 w-full max-w-7xl px-0 sm:px-4 lg:px-8">
		<Glow theme={yellow} class="-inset-x-4 animate-tilt-1 sm:-inset-x-0">
			<Table
				columns={groupColumns}
				rows={summaries.data.entities.map((e) => groupRow(e, '/issuers/[id]'))}
				sortBy="total-value-locked"
				rank
				length={5}
				class="sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>

<Section id="chains" label="Chains with backed cryptocurrencies">
	<SectionHeader
		title="Chains"
		description="Compare the chains backed cryptocurrencies live on."
		button={{ text: 'View all Chains', href: resolve('/chains') }}
		theme={blue}
	/>
	<div class="mx-auto mt-10 w-full max-w-7xl px-0 sm:px-4 lg:px-8">
		<Glow theme={blue} class="-inset-x-4 animate-tilt-1 sm:-inset-x-0">
			<Table
				columns={groupColumns}
				rows={summaries.data.systems.map((s) => groupRow(s, '/chains/[id]'))}
				sortBy="total-value-locked"
				rank
				length={5}
				class="sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>
