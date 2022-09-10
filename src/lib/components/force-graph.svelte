<script>
	import { base } from '$app/paths';

	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	/** @type {any} */
	export let assets;

	/** @type {any} */
	export let graph;

	let width = 0;
	let height = 0;

	let vis; // binding with div for visualization

	/*!
	 * This component is based on the code provided by Mike Bostock.
	 * See the following license note:
	 * @license Open source under ISC license (https://choosealicense.com/licenses/isc/)
	 * Copyright 2021 Observable, Inc.
	 * All rights reserved.
	 *
	 * https://observablehq.com/@d3/disjoint-force-directed-graph
	 */

	function createForceGraph(
		{
			nodes, // an iterable of node objects (typically [{id}, …])
			links // an iterable of link objects (typically [{source, target}, …])
		},
		{
			nodeId = (d) => d.id, // given d in nodes, returns a unique identifier (string)
			nodeGroup, // given d in nodes, returns an (ordinal) value for color
			nodeGroups, // an array of ordinal values representing the node groups
			nodeTitle, // given d in nodes, a title string
			nodeFill = 'currentColor', // node stroke fill (if not using a group color encoding)
			nodeStroke = '#fff', // node stroke color
			nodeStrokeWidth = 1.5, // node stroke width, in pixels
			nodeStrokeOpacity = 1, // node stroke opacity
			nodeRadius = 5, // node radius, in pixels
			nodeStrength,
			linkSource = ({ source }) => source, // given d in links, returns a node identifier string
			linkTarget = ({ target }) => target, // given d in links, returns a node identifier string
			linkStroke = '#999', // link stroke color
			linkStrokeOpacity = 0.6, // link stroke opacity
			linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
			linkStrokeLinecap = 'round', // link stroke linecap
			linkStrength,
			colors = d3.schemeTableau10, // an array of color strings, for the node groups
			width = 640, // outer width, in pixels
			height = 400, // outer height, in pixels
			invalidation // when this promise resolves, stop the simulation
		} = {}
	) {
		// Compute values.
		const N = d3.map(nodes, nodeId).map(intern);
		const LS = d3.map(links, linkSource).map(intern);
		const LT = d3.map(links, linkTarget).map(intern);
		if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
		const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
		const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
		const W = typeof linkStrokeWidth !== 'function' ? null : d3.map(links, linkStrokeWidth);

		// Replace the input nodes and links with mutable objects for the simulation.
		nodes = d3.map(nodes, (_, i) => ({ id: N[i] }));
		links = d3.map(links, (_, i) => ({ source: LS[i], target: LT[i] }));

		// Compute default domains.
		if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

		// Construct the scales.
		const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

		// Construct the forces.
		const forceNode = d3.forceManyBody();
		const forceLink = d3.forceLink(links).id(({ index: i }) => N[i]);
		if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
		if (linkStrength !== undefined) forceLink.strength(linkStrength);

		const svg = d3
			.select(vis)
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', [-width / 2, -height / 2, width, height])
			.attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

		const link = svg
			.append('g')
			.attr('stroke', linkStroke)
			.attr('stroke-opacity', linkStrokeOpacity)
			.attr('stroke-width', typeof linkStrokeWidth !== 'function' ? linkStrokeWidth : null)
			.attr('stroke-linecap', linkStrokeLinecap)
			.selectAll('line')
			.data(links)
			.join('line');

		if (W) link.attr('stroke-width', ({ index: i }) => W[i]);

		const simulation = d3
			.forceSimulation(nodes)
			.force('link', forceLink)
			.force('charge', forceNode)
			.force('x', d3.forceX())
			.force('y', d3.forceY())
			.on('tick', ticked);

		const node = svg
			.append('g')
			.attr('fill', nodeFill)
			.attr('stroke', nodeStroke)
			.attr('stroke-opacity', nodeStrokeOpacity)
			.attr('stroke-width', nodeStrokeWidth)
			.selectAll('circle')
			.data(nodes)
			.join('circle')
			.attr('r', nodeRadius)
			.call(drag(simulation));

		// let node = svg.data(nodes).enter().append('g');
		// node
		// 	.append('rect')
		// 	.attr('class', 'node')
		// 	.attr('width', 120)
		// 	.attr('height', 120)
		// 	.style('fill', '#fff')
		// 	.style('stroke', 'black')
		// 	.call(drag(simulation));

		//add image to the group
		// node
		// 	// .enter()
		// 	.append('image')
		// 	// .attr('xlink:href', (d) => (assets[d.id].icon ? `${base}/${assets[d.id].icon}` : undefined))
		// 	.attr('xlink:href', 'https://github.com/favicon.ico')
		// 	.attr('x', function (d) {
		// 		return -nodeRadius / 2;
		// 	})
		// 	.attr('y', function (d) {
		// 		return -nodeRadius / 2;
		// 	})
		// 	.attr('height', nodeRadius)
		// 	.attr('width', nodeRadius);

		// var node = svg
		// 	.selectAll('.node')
		// 	.data(nodes)
		// 	.enter()
		// 	.append('g')
		// 	.attr('class', 'node')
		// 	.call(drag(simulation));

		// node
		// 	.append('image')
		// 	.attr('xlink:href', 'https://github.com/favicon.ico')
		// 	.attr('x', -8)
		// 	.attr('y', -8)
		// 	.attr('width', 16)
		// 	.attr('height', 16);

		// .append('g')
		// .attr('fill', nodeFill)
		// .attr('stroke', nodeStroke)
		// .attr('stroke-opacity', nodeStrokeOpacity)
		// .attr('stroke-width', nodeStrokeWidth)
		// .selectAll('circle')
		// .data(nodes)
		// .join('image')
		// .attr('href', (d) => (assets[d.id].icon ? `${base}/${assets[d.id].icon}` : undefined))
		// .attr('width', 40)
		// .attr('height', 40)
		// .join('circle')
		// .attr('r', nodeRadius)
		// .style('filter', function (d) {
		// 	return assets[d.id].icon ? `url(${base}/${assets[d.id].icon})` : '#fff';
		// })
		// .call(drag(simulation));

		if (G) node.attr('fill', ({ index: i }) => color(G[i]));
		if (T) node.append('title').text(({ index: i }) => T[i]);

		// Handle invalidation.
		if (invalidation != null) invalidation.then(() => simulation.stop());

		function intern(value) {
			return value !== null && typeof value === 'object' ? value.valueOf() : value;
		}

		function ticked() {
			if (link == undefined || node == undefined) return;
			link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
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
				if (!event.active) simulation.alphaTarget(0);
				event.subject.fx = null;
				event.subject.fy = null;
			}

			return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
		}

		return Object.assign(svg.node(), { scales: { color } });
	}

	// let graph = {
	// 	nodes: [
	// 		{
	// 			id: 'Structural basis of PROTAC cooperative recognition for selective protein degradation.',
	// 			group: 'Cited Works',
	// 			radius: 2,
	// 			citing_patents_count: 2
	// 		},
	// 		{ id: '109-294-662-661-65X', group: 'Citing Patents' }
	// 	],
	// 	links: [
	// 		{
	// 			source:
	// 				'Structural basis of PROTAC cooperative recognition for selective protein degradation.',
	// 			target: '109-294-662-661-65X',
	// 			value: 2
	// 		}
	// 	]
	// };

	onMount(async function () {
		createForceGraph(graph, {
			nodeId: (d) => d.id,
			nodeGroup: (d) => 0,
			nodeTitle: (d) => `${d.name}`,
			width: 680,
			height: 680,
			colors: ['#3BC7FF', '#FF3B76', '#D8FF3B'],
			invalidation: new Promise(() => ({}))
		});
	});
</script>

<div class="overflow-visible" bind:offsetWidth={width} bind:offsetHeight={height}>
	<div id="vis" class="overflow-visible" bind:this={vis} />
</div>
