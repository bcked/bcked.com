<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Page from '$components/layout/page.svelte';
	import SubjectItem from '$components/layout/title/item.svelte';
	import SubjectTitle from '$components/layout/title/main.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { CurrencyDollarIcon } from '@rgossiaux/svelte-heroicons/outline';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from '../../issuers copy/[id]/$types';

	export let data: PageData;

	$: ({ chainsDetails, chainsIcons, assetsDetails } = data);

	$: id = $page.params.id!;

	$: chainDetails = chainsDetails[id]!;
	$: chainIcon = chainsIcons[id];

	$: seo = {
		title: `${chainDetails.name}'s assets`,
		description: `See all assets of ${chainDetails.name}. Learn more ...`,
		url: `${PUBLIC_DOMAIN}/issuers/${id}`,
		image: {
			url: `${PUBLIC_DOMAIN}/previews/issuers/${id}.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of ${chainDetails.name}'s detail view.`
		}
	};
</script>

<SvelteSeo
	title={seo.title}
	description={seo.description}
	openGraph={{
		title: seo.title,
		description: seo.description,
		url: seo.url,
		type: 'website',
		images: [seo.image]
	}}
	twitter={{
		site: '@bcked_com',
		title: seo.title,
		description: seo.description,
		image: seo.image.url,
		imageAlt: seo.image.alt
	}}
/>

<Page class="px-0">
	<SubjectTitle title={chainDetails.name} iconUrl="{base}/{chainIcon.href}">
		{#if chainDetails.native}
			<SubjectItem href="{base}/assets/{chainDetails.native}" icon={CurrencyDollarIcon}>
				{assetsDetails[chainDetails.native].name}
			</SubjectItem>
		{/if}
	</SubjectTitle>
</Page>
