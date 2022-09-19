<script>
	import { base } from '$app/paths';
	import _ from 'lodash-es';
	import * as d3 from 'd3';
	import forceBoundary from 'd3-force-boundary';
	import { onMount } from 'svelte';

	/** @type {any} */
	export let assets;

	/** @type {any} */
	export let graph;

	let width = 400;
	let height = 400;

	export let minNodeSize = 24;
	export let maxNodeSize = 32;

	export let nodeId = (d) => d.id; // given d in nodes, returns a unique identifier (string)

	export let nodeRadius = (d) => {
		// const n = graph.nodes.find(({ id }) => id == d.id);
		// const factor = (Math.max(Math.min(n['z-score'], 1), -1) + 1) * 0.5;
		// return Math.max(maxNodeSize * factor, minNodeSize);
		console.log(d.id, assets[d.id].backing);
		return Object.keys(assets[d.id].backing[0].assets).length > 0 ? maxNodeSize : minNodeSize;
	}; // node radius, in pixels
	export let nodeStrength = (n) => {
		return -nodeRadius(n) * 20;
	};
	export let linkSource = ({ source }) => source; // given d in links, returns a node identifier string
	export let linkTarget = ({ target }) => target; // given d in links, returns a node identifier string
	export let linkStroke = '#999'; // link stroke color
	export let linkStrokeOpacity = 0.6; // link stroke opacity
	export let linkStrokeWidth = (d) => {
		const l = graph.links.find(
			({ source, target }) => source == d.source.id && target == d.target.id
		);
		if (l == undefined) return 1.5;
		const factor = (Math.max(Math.min(l['z-score'], 1), -1) + 1) * 0.5;
		return Math.max(5 * factor, 1.5);
	}; // given d in links, returns a stroke width in pixels
	export let linkStrokeLinecap = 'round'; // link stroke linecap
	export let linkStrength = undefined;
	export let invalidation = new Promise(() => ({})); // when this promise resolves, stop the simulation

	let {
		nodes, // an iterable of link objects (typically [{source, target}, …])
		links // an iterable of node objects (typically [{id}, …])
	} = graph;

	onMount(async function () {
		// Compute values.
		const N = d3.map(nodes, nodeId).map(intern);
		const LS = d3.map(links, linkSource).map(intern);
		const LT = d3.map(links, linkTarget).map(intern);
		const W = linkStrokeWidth == null ? null : d3.map(links, linkStrokeWidth);

		// Replace the input nodes and links with mutable objects for the simulation.
		nodes = d3.map(nodes, (_, i) => ({ id: N[i] }));
		links = d3.map(links, (_, i) => ({ source: LS[i], target: LT[i] }));

		// Construct the forces.
		// linkStrength = 10;
		const forceNode = d3.forceManyBody();
		const forceLink = d3.forceLink(links).id(({ index: i }) => N[i]);
		if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
		if (linkStrength !== undefined) forceLink.strength(linkStrength);

		const svg = d3.select('#force-graph');

		const d3link = d3.selectAll('line').data(links).join();

		const d3Node = svg.selectAll('g image').data(nodes).join();

		const simulation = d3
			.forceSimulation(nodes)
			.alphaTarget(0.05)
			.alphaDecay(0.1)
			.force('link', forceLink)
			.force('charge', forceNode)
			.force('center', d3.forceCenter())
			.force('boundary', forceBoundary(-width / 1.5, -height / 1.5, width / 1.5, height / 1.5))
			.force('x', d3.forceX())
			.force('y', d3.forceY())
			.on('tick', ticked);

		d3Node.call(drag(simulation));

		// Handle invalidation.
		if (invalidation != null) invalidation.then(() => simulation.stop());

		function intern(value) {
			return value !== null && typeof value === 'object' ? value.valueOf() : value;
		}

		function ticked() {
			if (d3link == undefined || d3Node == undefined) return;
			d3link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			d3Node.attr('x', (d) => d.x - nodeRadius(d) / 2).attr('y', (d) => d.y - nodeRadius(d) / 2);
		}

		function drag(simulation) {
			function dragstarted(event) {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				event.subject.fx = event.subject.x;
				event.subject.fy = event.subject.y;
			}

			function dragged(event) {
				event.subject.fx = event.x;
				event.subject.fy = event.y;
			}

			function dragended(event) {
				if (!event.active) simulation.alphaTarget(0.05);
				event.subject.fx = null;
				event.subject.fy = null;
			}

			return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
		}
	});
</script>

<div class="overflow-visible" bind:offsetWidth={width}>
	<svg
		id="force-graph"
		class="overflow-visible"
		{width}
		{height}
		viewBox={[-width / 2, -height / 2, width, height].toString()}
		style="max-width: 100%; height: auto; height: intrinsic;"
	>
		<g>
			{#each links as link}
				<line
					x1={link.source.x}
					y1={link.source.y}
					x2={link.target.x}
					y2={link.target.y}
					stroke={linkStroke}
					stroke-opacity={linkStrokeOpacity}
					stroke-width={linkStrokeWidth(link)}
					stroke-linecap={linkStrokeLinecap}
				/>
			{/each}
		</g>
		<g>
			{#each nodes as node}
				<image
					x={node.x}
					y={node.y}
					width={nodeRadius(node)}
					height={nodeRadius(node)}
					href={assets[node.id].icon ? `${base}/${assets[node.id].icon}` : undefined}
				>
					<title>{assets[node.id].name}</title>
				</image>
			{/each}
		</g>
	</svg>
</div>
