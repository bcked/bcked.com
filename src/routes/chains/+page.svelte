<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import CardHeader from '#lib/components/CardHeader.svelte';
	import Page from '#lib/components/Page.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Table from '#lib/components/Table.svelte';
	import { groupColumns, groupRow } from '#lib/rows.ts';
	import { summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
</script>

<Seo
	title="Chains | bcked"
	description="Blockchains and other systems the tracked assets live on."
/>

<Page class="px-0">
	<Card>
		<CardHeader
			title="Chains"
			subtitle="Blockchains and other systems the tracked assets live on."
		/>
		<div class="mt-5 sm:mt-6">
			<Table
				columns={groupColumns}
				rows={summaries.data.systems.map((item) => groupRow(item, '/chains/[id]'))}
				sortBy="total-value-locked"
				rank
			/>
		</div>
	</Card>
</Page>
