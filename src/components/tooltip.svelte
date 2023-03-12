<script lang="ts">
	export let position: { x: number; y: number } = { x: 0, y: 0 };
	export let visible = true;
	const display: string = visible ? 'block' : 'hidden';
</script>

<!-- <div
class="absolute {display} left-[{position.x}px] top-[{position.y}px] z-10 p-5, pointer-events-none bg-white border-black, border-solid"
>
	<slot />
</div> -->

<defs>
	<filter x="-0.1" y="-0.1" width="1.2" height="1.2" id="solid" rx={5} ry={5}>
		<feFlood flood-color="#171717" />
		<feComposite in="SourceGraphic" operator="xor" />
	</filter>
</defs>
<text
	class="z-10 p-5, pointer-events-none fill-black"
	filter="url(#solid)"
	width={50}
	height={50}
	x={position.x}
	y={position.y}
	fill="white"
>
	Test
</text>
