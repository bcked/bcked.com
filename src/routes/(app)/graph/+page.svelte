<script lang="ts">
	/**
	 * Documentation on 3D Force Graph: https://github.com/vasturiano/3d-force-graph
	 */
	import { base } from '$app/paths';
	import { ForceNGraph3D } from '$lib/utils/graph';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import type { ForceGraph3DInstance } from '3d-force-graph';
	import { onMount } from 'svelte';
	import * as Three from 'three';
	import { Vector2 } from 'three';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
	import type { PageData } from './$types';

	export let data: PageData;

	type Node = graph.Node & { x: number; y: number; z: number };
	type Link = graph.Link;

	$: ({ assetsDetails, assetsContracts, chainsDetails, issuersDetails, icons, graphData } = data);

	let htmlElement: HTMLDivElement;

	let innerWidth = 0;
	let innerHeight = 0;
	let graph: ForceGraph3DInstance;

	let selectedNode: string | undefined = undefined;
	$: selectedName = selectedNode ? assetsDetails[selectedNode]!.name : undefined;
	$: selectedIssuer = selectedNode
		? issuersDetails[assetsDetails[selectedNode]?.issuer ?? '']?.name
		: undefined;
	$: selectedChain = selectedNode
		? chainsDetails[assetsContracts[selectedNode]?.token?.chain ?? '']?.name
		: undefined;

	onMount(() => {
		graph = ForceNGraph3D(htmlElement)
			.enableNodeDrag(false)
			.nodeLabel((n) => {
				const node = n as Node;
				const name = assetsDetails[node.id]!.name;
				const issuer = issuersDetails[assetsDetails[node.id]?.issuer ?? '']?.name;
				const chain = chainsDetails[assetsContracts[node.id]?.token?.chain ?? '']?.name;

				if (name && issuer && chain) return `${name} - ${issuer} (${chain})`;
				if (name && issuer) return `${name} - ${issuer}`;
				if (name && chain) return `${name} (${chain})`;
				return name;
			})
			.nodeThreeObject((n) => {
				const node = n as Node;
				const href = icons[node.id]!.href;
				const imgTexture = new Three.TextureLoader().load(href);
				const material = new Three.SpriteMaterial({ map: imgTexture });
				const sprite = new Three.Sprite(material);
				sprite.scale.set(18, 18, 18);
				return sprite;
			})
			.onNodeClick((n) => {
				const node = n as Node;
				selectedNode = node.id;
				// Aim at node from outside it
				const distance = 150;
				const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

				let newPos = { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)
				if (node.x && node.y && node.z) {
					newPos = { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio };
				}

				graph.cameraPosition(
					newPos, // new position
					node, // lookAt
					1000 // ms transition duration
				);
			})
			.linkLabel((l) => {
				const link = l as Link;
				return formatCurrency(link.data.backing);
			})
			.linkDirectionalArrowLength(9)
			.linkDirectionalArrowRelPos(0.5)
			.linkCurvature((l) => {
				const link = l as Link;
				return link.fromId == link.toId ? 0.75 : 0.25;
			})
			.graphData(graphData);

		const resolution = new Vector2(innerWidth, innerHeight);
		const strength = 0.3;
		const radius = 4;
		const threshold = 0.0;
		const bloomPass = new UnrealBloomPass(resolution, strength, radius, threshold);
		graph.postProcessingComposer().addPass(bloomPass);
	});

	$: graph = graph?.width(innerWidth);
	$: graph = graph?.height(innerHeight);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	class="flex fixed w-full z-10 px-2 sm:px-4 items-start justify-end transition-all motion-reduce:transition-none duration-1000"
>
	<div
		class="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg {!selectedNode
			? '-translate-y-16 opacity-0'
			: 'translate-y-0 opacity-100'} transition-all motion-reduce:transition-none duration-1000"
	>
		<div class="px-4 py-2 sm:px-6 transition-all motion-reduce:transition-none duration-1000">
			<h2 class="text-lg font-medium leading-6 text-neon-pink">
				<a href="{base}/assets/{selectedNode}">{selectedName}</a>
			</h2>
			{#if selectedIssuer && selectedChain}
				<p class="mt-1 max-w-2xl text-sm text-gray-500">
					Issuer: {selectedIssuer} | Chain: {selectedChain}
				</p>
			{:else if selectedIssuer}
				<p class="mt-1 max-w-2xl text-sm text-gray-500">Issuer: {selectedIssuer}</p>
			{:else if selectedChain}
				<p class="mt-1 max-w-2xl text-sm text-gray-500">Chain: {selectedChain}</p>
			{/if}
		</div>
	</div>
</div>

<div id="3d-graph" bind:this={htmlElement} />
