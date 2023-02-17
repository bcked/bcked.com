<script lang="ts">
	import { base } from '$app/paths';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/section-header.svelte';
	import Section from '$components/section.svelte';
	import { ForceNGraph3D } from '$lib/utils/graph';
	import type { ForceGraph3DInstance } from '3d-force-graph';
	import { CubeIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { onMount } from 'svelte';
	import * as Three from 'three';
	import type { PageData } from '../$types';

	export let theme: ui.Theme;

	export let data: PageData;

	$: ({ icons, graphData } = data);

	let graphDom: HTMLDivElement;

	let width: number;
	let height: number;
	let graph: ForceGraph3DInstance;

	const distance = 800;

	onMount(() => {
		graph = ForceNGraph3D(graphDom)
			.enableNodeDrag(false)
			.enableNavigationControls(false)
			.showNavInfo(false)
			.cameraPosition({ z: distance })
			.nodeThreeObject((node) => {
				const href = icons[(node as agg.GraphNode).id]!.href;
				const imgTexture = new Three.TextureLoader().load(href);
				const material = new Three.SpriteMaterial({ map: imgTexture });
				const sprite = new Three.Sprite(material);
				sprite.scale.set(18, 18, 18);
				return sprite;
			})
			.linkColor(() => '#000000')
			.linkDirectionalArrowLength(3.5)
			.linkDirectionalArrowRelPos(1)
			// .linkWidth(1)
			.linkCurvature(0.25)
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

<div class="relative" bind:offsetWidth={width} bind:offsetHeight={height}>
	<Section label="Introduction to bcked" class="relative lg:flex lg:justify-between items-center">
		<div id="3d-graph" class="absolute top-0 left-0 h-full w-full -z-10" bind:this={graphDom} />

		<SectionHeader
			title="Reduce your exposure to unbacked assets."
			description="Leverage insights from our community driven open source knowledge base to find cryptocurrencies backed
		by various asset classes."
			theme={{ title: theme.text }}
			class=""
		>
			<div class="mt-10 inline-flex items-center lg:mx-0">
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
