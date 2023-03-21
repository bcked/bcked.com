<script lang="ts">
	import { base } from '$app/paths';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/section-header.svelte';
	import Section from '$components/section.svelte';
	import { loadSvg } from '$lib/utils/three';
	import type { ForceGraph3DInstance } from '3d-force-graph';
	import { CubeIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { onMount } from 'svelte';
	import { Vector3 } from 'three';
	import type { PageData } from '../$types';

	type Node = graph.Node & { x: number; y: number; z: number };

	export let theme: ui.Theme;

	export let data: PageData;

	$: ({ graphData } = data);

	let htmlElement: HTMLDivElement;

	let width: number;
	let height: number;
	let graph: ForceGraph3DInstance;

	const distance = 800;

	onMount(async () => {
		const { createForceNGraph } = await import('$lib/utils/force-ngraph-3d');
		graph = createForceNGraph(htmlElement)
			.enableNodeDrag(false)
			.enableNavigationControls(false)
			.showNavInfo(false)
			.cameraPosition({ z: distance })
			.nodeThreeObject((n) => {
				const node = n as Node;
				const data = node.data;
				const svg = loadSvg(`${base}/assets/${data.details.id}/icon.svg`, new Vector3(18, 18));
				return svg;

				// const href = icons[(node as graph.Node).id]!.href;
				// const imgTexture = new Three.TextureLoader().load(href);
				// const material = new Three.SpriteMaterial({ map: imgTexture });
				// const sprite = new Three.Sprite(material);
				// sprite.scale.set(18, 18, 1);
				// return sprite;
			})
			.linkColor(() => '#000000')
			.linkCurvature(0.0)
			.graphData(graphData);
	});

	$: graph = graph?.width(width);
	$: graph = graph?.height(height);

	// camera orbit
	let angle = 0;
	setInterval(() => {
		graph?.cameraPosition({
			x: distance * Math.sin(angle),
			z: distance * Math.cos(angle)
		});
		angle += Math.PI / 300;
	}, 15);

	// https://github.com/vasturiano/3d-force-graph
</script>

<div class="w-full -mt-16 sm:-mt-[104px]" bind:offsetWidth={width} bind:offsetHeight={height}>
	<Section
		label="Introduction to bcked"
		class="w-full min-h-screen flex justify-between items-center"
	>
		<div id="3d-graph" class="absolute inset-0 -z-10 pointer-events-none" bind:this={htmlElement} />
		<SectionHeader
			title="Reduce your exposure to unbacked assets."
			description="Leverage insights from our community driven open source knowledge base to find cryptocurrencies backed
		by various asset classes."
			theme={{ title: theme.text }}
			class="mt-10"
		>
			<div class="mt-16 inline-flex items-center lg:mx-0">
				<Glow {theme}>
					<a
						href="{base}/graph"
						class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-neon-gray-dark text-gray-50  hover:bg-neon-blue hover:text-gray-900"
					>
						<CubeIcon class="h-5 w-5 mr-3 transform" />
						Explore Backing Graph
					</a>
				</Glow>
			</div>
		</SectionHeader>
	</Section>
</div>
