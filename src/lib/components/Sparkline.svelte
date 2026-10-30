<!--
  @component
  A small line of values over time, without axes, for tables.
-->
<script lang="ts">
	type Props = { values: number[]; color: string; width?: number; height?: number; label?: string };

	let { values, color, width = 96, height = 24, label }: Props = $props();

	const path = $derived.by(() => {
		if (values.length < 2) return '';
		const min = Math.min(...values);
		const max = Math.max(...values);
		const span = max - min || 1;
		return values
			.map((v, i) => {
				const x = (i / (values.length - 1)) * width;
				const y = height - 2 - ((v - min) / span) * (height - 4);
				return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
			})
			.join('');
	});
</script>

<svg {width} {height} role="img" aria-label={label} class="overflow-visible">
	<path d={path} fill="none" stroke={color} stroke-width="1.5" stroke-linejoin="round" />
</svg>
