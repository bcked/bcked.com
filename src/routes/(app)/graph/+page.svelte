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
	let forceGraph: ForceGraph3DInstance;

	let selectedNode: Node | undefined = undefined;

	onMount(() => {
		forceGraph = ForceNGraph3D(htmlElement)
			.enableNodeDrag(false)
			.nodeLabel((n) => {
				const node = n as Node;
				const data = node.data;
				const name = data.details.name;
				const issuer = data.issuer?.name;
				const chain = data.chain?.name;

				if (name && issuer && chain) return `${name} - ${issuer} (${chain})`;
				if (name && issuer) return `${name} - ${issuer}`;
				if (name && chain) return `${name} (${chain})`;
				return name;
			})
			.nodeThreeObject((n) => {
				const node = n as Node;
				const data = node.data;
				const href = data?.icon?.href;

				const imgTexture = new Three.TextureLoader().load(href);
				const material = new Three.SpriteMaterial({ map: imgTexture });
				const sprite = new Three.Sprite(material);
				sprite.scale.set(18, 18, 18);
				return sprite;
			})
			.onNodeClick((n) => {
				const node = n as Node;
				selectedNode = node;
				// Aim at node from outside it
				const distance = 150;
				const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

				let newPos = { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)
				if (node.x && node.y && node.z) {
					newPos = { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio };
				}

				forceGraph.cameraPosition(
					newPos, // new position
					node, // lookAt
					1000 // ms transition duration
				);
			})
			.linkLabel((l) => {
				const link = l as Link;
				const data = link.data;
				if (!data.backingUsd) return '';
				return formatCurrency(data.backingUsd);
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
		forceGraph.postProcessingComposer().addPass(bloomPass);
	});

	$: forceGraph = forceGraph?.width(innerWidth);
	$: forceGraph = forceGraph?.height(innerHeight);
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
			<div class="flex items-center justify-start space-x-4">
				{#if selectedNode}
					<img
						class="h-10 w-10 flex-shrink-1"
						src={selectedNode?.data?.icon?.href}
						alt="Icon of {selectedNode?.data?.details?.name}"
					/>
					<div>
						<h2 class="text-lg font-medium leading-6 text-neon-pink">
							<a href="{base}/assets/{selectedNode?.id}">{selectedNode?.data?.details?.name}</a>
						</h2>
						{#if selectedNode?.data?.issuer?.name && selectedNode?.data?.chain?.name}
							<p class="mt-1 max-w-2xl text-sm text-gray-500">
								Issuer: {selectedNode?.data?.issuer?.name} | Chain: {selectedNode?.data?.chain
									?.name}
							</p>
						{:else if selectedNode?.data?.issuer?.name}
							<p class="mt-1 max-w-2xl text-sm text-gray-500">
								Issuer: {selectedNode?.data?.issuer?.name}
							</p>
						{:else if selectedNode?.data?.chain?.name}
							<p class="mt-1 max-w-2xl text-sm text-gray-500">
								Chain: {selectedNode?.data?.chain?.name}
							</p>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div id="3d-graph" bind:this={htmlElement} />
