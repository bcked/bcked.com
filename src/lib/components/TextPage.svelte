<!--
  @component
  A page of text rendered from Markdown in this repository (About, Methodology, Legal Notice, ...).
-->
<script lang="ts">
	let { html }: { html: string } = $props();
</script>

<div class="w-full bg-card">
	<article class="mx-auto prose max-w-3xl px-4 py-12 sm:px-6 prose-a:text-primary">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- rendered from Markdown in this repository -->
		{@html html}
	</article>
</div>
