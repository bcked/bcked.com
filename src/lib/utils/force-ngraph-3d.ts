import type { ForceGraph3DInstance } from '3d-force-graph';
import ForceGraph3D from '3d-force-graph';

export function createForceNGraph(htmlElement: HTMLElement): ForceGraph3DInstance {
	const createForceGraph: ForceGraph3DInstance = ForceGraph3D();
	return createForceGraph(htmlElement)
		.linkSource('fromId')
		.linkTarget('toId')
		.backgroundColor('#00000000');
}
