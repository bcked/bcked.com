<script lang="ts">
	/**
	 * Documentation on 3D Force Graph: https://github.com/vasturiano/3d-force-graph
	 */
	import { ForceNGraph3D } from '$lib/utils/graph';
	import type { ForceGraph3DInstance } from '3d-force-graph';
	import { onMount } from 'svelte';
	import * as Three from 'three';
	import { Vector2 } from 'three';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({
		assetsDetails,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		chainsDetails,
		issuersDetails,
		icons,
		graphData
	} = data);

	let htmlElement: HTMLDivElement;

	let innerWidth = 0;
	let innerHeight = 0;
	let graph: ForceGraph3DInstance;

	onMount(() => {
		graph = ForceNGraph3D(htmlElement)
			.nodeLabel((node) => {
				const name = assetsDetails[(node as agg.GraphNode).id]!.name;
				const issuer =
					issuersDetails[assetsDetails[(node as agg.GraphNode).id]?.issuer ?? '']?.name;
				const chain =
					chainsDetails[assetsContracts[(node as agg.GraphNode).id]?.token?.chain ?? '']?.name;

				if (name && issuer && chain) return `${name} - ${issuer} (${chain})`;
				if (name && issuer) return `${name} - ${issuer}`;
				if (name && chain) return `${name} (${chain})`;
				return name;
			})
			.nodeThreeObject((node) => {
				const href = icons[(node as agg.GraphNode).id]!.href;
				const imgTexture = new Three.TextureLoader().load(href);
				const material = new Three.SpriteMaterial({ map: imgTexture });
				const sprite = new Three.Sprite(material);
				sprite.scale.set(12, 12, 12);
				return sprite;
			})
			.enableNodeDrag(false)
			.onNodeClick((node) => {
				// Aim at node from outside it
				const distance = 150;
				const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

				const newPos =
					node.x || node.y || node.z
						? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
						: { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

				graph.cameraPosition(
					newPos, // new position
					node, // lookAt ({ x, y, z })
					2000 // ms transition duration
				);
			})
			.linkDirectionalArrowLength(3.5)
			.linkDirectionalArrowRelPos(1)
			.linkCurvature((link) =>
				(link as agg.GraphLink).fromId == (link as agg.GraphLink).toId ? 0.75 : 0
			)
			// .linkCurvature((link) => 0.0)
			.graphData(graphData);

		const resolution = new Vector2(innerWidth, innerHeight);
		const strength = 0.5;
		const radius = 2;
		const threshold = 0.0;
		const bloomPass = new UnrealBloomPass(resolution, strength, radius, threshold);
		graph.postProcessingComposer().addPass(bloomPass);
	});

	$: graph = graph?.width(innerWidth);
	$: graph = graph?.height(innerHeight);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="3d-graph" bind:this={htmlElement} />
