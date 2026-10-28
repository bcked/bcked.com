<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		title: string;
		description: string;
		/** Absolute or site-relative image URL for social previews. */
		image?: { url: string; alt: string; width?: number; height?: number };
		jsonLd?: Record<string, unknown>;
	};

	let { title, description, image, jsonLd }: Props = $props();

	const url = $derived(page.url.href);
	const imageUrl = $derived(image ? new URL(image.url, page.url.origin).href : undefined);
	const jsonLdTag = $derived(
		jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</` + 'script>' : ''
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:site" content="@bcked_com" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if image && imageUrl}
		<meta property="og:image" content={imageUrl} />
		<meta property="og:image:alt" content={image.alt} />
		{#if image.width}<meta property="og:image:width" content={String(image.width)} />{/if}
		{#if image.height}<meta property="og:image:height" content={String(image.height)} />{/if}
		<meta name="twitter:image" content={imageUrl} />
		<meta name="twitter:image:alt" content={image.alt} />
	{/if}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD from static data -->
	{@html jsonLdTag}
</svelte:head>
