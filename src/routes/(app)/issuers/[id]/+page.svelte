<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Page from '$components/layout/page.svelte';
	import SubjectItem from '$components/layout/title/item.svelte';
	import SubjectTitle from '$components/layout/title/main.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { LinkIcon } from '@rgossiaux/svelte-heroicons/outline';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ issuersDetails, issuersIcons, assetsDetails } = data);

	$: id = $page.params.id!;

	$: issuerDetails = issuersDetails[id]!;
	$: issuerIcon = issuersIcons[id];

	$: seo = {
		title: `${issuerDetails.name}'s assets`,
		description: `See all assets of ${issuerDetails.name}. Learn more ...`,
		url: `${PUBLIC_DOMAIN}/issuers/${id}`,
		image: {
			url: `${PUBLIC_DOMAIN}/previews/issuers/${id}.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of ${issuerDetails.name}'s detail view.`
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
	<SubjectTitle
		title={issuerDetails.name}
		iconUrl={issuerIcon ? `${base}/${issuerIcon.href}` : `${base}/default-icon.png`}
	>
		<SubjectItem href={issuerDetails.reference} icon={LinkIcon}>
			{issuerDetails.reference}
		</SubjectItem>
	</SubjectTitle>
</Page>
