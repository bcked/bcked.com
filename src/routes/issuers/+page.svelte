<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import CardHeader from '#lib/components/CardHeader.svelte';
	import Page from '#lib/components/Page.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Table from '#lib/components/Table.svelte';
	import { groupColumns, groupRow } from '#lib/rows.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="Issuers | bcked"
	description="Organizations and protocols issuing or holding the backing of cryptocurrencies."
/>

<Page class="px-0">
	<Card>
		<CardHeader
			title="Issuers"
			subtitle="Organizations and protocols issuing or holding the backing of cryptocurrencies."
		/>
		<div class="mt-5 sm:mt-6">
			<Table
				columns={groupColumns}
				rows={data.entities.map((item) => groupRow(item, '/issuers/[id]'))}
				sortBy="total-value-locked"
				rank
			/>
		</div>
	</Card>
</Page>
