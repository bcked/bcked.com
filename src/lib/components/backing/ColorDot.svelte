<!--
  @component
  A small dot in the color of a reserve asset, for legends and tables.
-->
<script lang="ts">
	let { color }: { color: string } = $props();
</script>

<span class="inline-block size-2 shrink-0 rounded-full bg-(--dot-color)" style:--dot-color={color}
></span>
