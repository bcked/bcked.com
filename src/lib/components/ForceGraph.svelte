<!--
  @component
  3D force graph of assets and their backing links, using [3d-force-graph](https://github.com/vasturiano/3d-force-graph).
  Rendering happens only in the browser.
-->
<script lang="ts" module>
	export type ForceNode = { id: string; name: string; icon: string | null; label?: string };
	export type ForceLink = { source: string; target: string; label?: string };
</script>

<script lang="ts">
	import type { ForceGraph3DInstance, NodeObject } from '3d-force-graph';

	type Props = {
		nodes: ForceNode[];
		links: ForceLink[];
		/** Allow dragging, zooming and selecting nodes. Otherwise the camera orbits slowly. */
		interactive?: boolean;
		onselect?: (node: ForceNode) => void;
		class?: string;
	};

	let { nodes, links, interactive = false, onselect, class: clazz = '' }: Props = $props();

	let container: HTMLDivElement | undefined = $state();
	let width = $state(0);
	let height = $state(0);
	let graph: ForceGraph3DInstance | undefined = $state();

	type Positioned = ForceNode & NodeObject;

	$effect(() => {
		if (!container) return;
		const element = container;
		let destroyed = false;
		let orbit: ReturnType<typeof setInterval> | undefined;

		(async () => {
			const [{ default: ForceGraph3D }, THREE] = await Promise.all([
				import('3d-force-graph'),
				import('three')
			]);
			if (destroyed) return;

			const loader = new THREE.TextureLoader();
			loader.setCrossOrigin('anonymous');

			const instance = new ForceGraph3D(element, { controlType: 'orbit' })
				.backgroundColor('#00000000')
				.showNavInfo(false)
				.enableNodeDrag(false)
				.enableNavigationControls(interactive)
				.nodeLabel((n) => (interactive ? ((n as Positioned).label ?? (n as Positioned).name) : ''))
				.nodeThreeObject((n) => {
					const node = n as Positioned;
					if (!node.icon) {
						return new THREE.Mesh(
							new THREE.SphereGeometry(5),
							new THREE.MeshBasicMaterial({ color: '#52656b' })
						);
					}
					const material = new THREE.SpriteMaterial({ map: loader.load(node.icon) });
					const sprite = new THREE.Sprite(material);
					sprite.scale.set(18, 18, 1);
					return sprite;
				})
				.linkColor(() => (interactive ? '#ff3b76' : '#000000'))
				.linkOpacity(0.6)
				.linkLabel((l) => (interactive ? ((l as ForceLink).label ?? '') : ''))
				.linkDirectionalArrowLength(interactive ? 6 : 0)
				.linkDirectionalArrowRelPos(0.5)
				.linkCurvature(interactive ? 0.25 : 0)
				.onNodeClick((n) => {
					if (!interactive) return;
					const node = n as Positioned;
					const x = node.x ?? 0;
					const y = node.y ?? 0;
					const z = node.z ?? 0;
					// Aim at the node from outside of it.
					const distance = 150;
					const ratio = 1 + distance / (Math.hypot(x, y, z) || 1);
					instance.cameraPosition({ x: x * ratio, y: y * ratio, z: z * ratio }, { x, y, z }, 1000);
					onselect?.(node);
				})
				.graphData({
					nodes: nodes.map((node) => ({ ...node })),
					links: links.map((link) => ({ ...link }))
				});

			// No bloom pass: it renders on black and ignores the transparent background.
			if (!interactive) {
				const distance = 400;
				let angle = 0;
				instance.cameraPosition({ z: distance });
				orbit = setInterval(() => {
					instance.cameraPosition({
						x: distance * Math.sin(angle),
						z: distance * Math.cos(angle)
					});
					angle += Math.PI / 600;
				}, 30);
			}

			graph = instance;
		})();

		return () => {
			destroyed = true;
			clearInterval(orbit);
			graph?._destructor();
			graph = undefined;
		};
	});

	$effect(() => {
		if (width && height) graph?.width(width).height(height);
	});
</script>

<div
	class="h-full w-full {interactive
		? 'cursor-grab active:cursor-grabbing'
		: 'pointer-events-none'} {clazz}"
	bind:clientWidth={width}
	bind:clientHeight={height}
	bind:this={container}
></div>
