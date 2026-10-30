import { MediaQuery } from 'svelte/reactivity';

/**
 * Whether the main pointer is precise (mouse, trackpad). Drag-to-zoom on charts needs one: on a
 * touch screen the drag would swallow the taps that show the tooltip.
 */
export const finePointer = new MediaQuery('(pointer: fine)', false);

/**
 * Tap to pin a chart tooltip on touch screens. A tap ends with `pointerleave`, which would hide the
 * tooltip right away, so the tap pins it and the next tap releases it. Pass `context` as the
 * chart's `tooltipContext`. With a mouse, the tooltip follows the pointer as usual.
 */
export class TapTooltip {
	pinned = $state(false);

	get context() {
		return {
			locked: !finePointer.current && this.pinned,
			onclick: () => {
				if (!finePointer.current) this.pinned = !this.pinned;
			}
		};
	}
}
