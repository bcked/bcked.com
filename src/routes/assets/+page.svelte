<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import CardHeader from '#lib/components/CardHeader.svelte';
	import Page from '#lib/components/Page.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Table from '#lib/components/Table.svelte';
	import { assetColumns, assetRow, isRankable } from '#lib/rows.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const ranked = $derived(data.assets.filter(isRankable));
</script>

<Seo
	title="Ranking of backed cryptocurrencies | bcked"
	description="Compare {ranked.length} cryptocurrencies by market cap, recorded backing and backing ratio."
/>

<Page class="px-0">
	<Card>
		<CardHeader
			title="Ranking"
			subtitle="Compare cryptocurrencies based on their market cap, backing amount and ratio."
		/>
		<div class="mt-5 sm:mt-6">
			<Table columns={assetColumns} rows={ranked.map(assetRow)} sortBy="market-cap" rank />
		</div>
	</Card>
</Page>
