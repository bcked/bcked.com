import type { Object3D } from 'three';
import {
	Box3,
	DoubleSide,
	Group,
	Mesh,
	MeshBasicMaterial,
	ShapeGeometry,
	Sprite,
	SpriteMaterial,
	TextureLoader,
	Vector3
} from 'three';
import type { SVGResult } from 'three/examples/jsm/loaders/SVGLoader';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

export function getCenter(obj: Object3D) {
	let center = new Vector3();
	new Box3().setFromObject(obj).getCenter(center);
	return center;
}

export function getSize(obj: Object3D) {
	let size = new Vector3();
	new Box3().setFromObject(obj).getSize(size);
	return size;
}

export function setSize(obj: Object3D, desiredSize: Vector3) {
	const size = getSize(obj);
	const scalingFactor = desiredSize.divide(size);
	obj.scale.set(
		isNaN(scalingFactor.x) ? 1 : scalingFactor.x,
		isNaN(scalingFactor.y) ? 1 : scalingFactor.y,
		isNaN(scalingFactor.z) ? 1 : scalingFactor.z
	);
}

export function centerObject(obj: Object3D) {
	const center = obj.worldToLocal(getCenter(obj));
	obj.position.set(-center.x, -center.y, -center.z);
}

export function loadSvgPaths(svg: SVGResult) {
	const group = new Group();

	// TODO fix path rendering for default icon
	// const paths = svg.paths;

	// const material = new Three.MeshBasicMaterial({
	// 	color: 0xffffff,
	// 	side: Three.DoubleSide
	// 	// depthWrite: false
	// });
	// const shapes = paths.flatMap((path) => path.toShapes(true));
	// const geometry = new Three.ShapeGeometry(shapes);
	// const mesh = new Three.Mesh(geometry, material);
	// mesh.scale.set(18, 18, 1);
	// group.add(mesh);

	const paths = svg.paths;

	for (let i = 0; i < paths.length; i++) {
		const path = paths[i]!;

		const material = new MeshBasicMaterial({
			color: path.color,
			side: DoubleSide,
			depthWrite: false
		});

		const shapes = SVGLoader.createShapes(path);

		for (let j = 0; j < shapes.length; j++) {
			const shape = shapes[j]!;
			const geometry = new ShapeGeometry(shape);
			const mesh = new Mesh(geometry, material);
			group.add(mesh);
		}
	}

	centerObject(group);
	return group;
}

export function loadSvgImages(svg: SVGResult) {
	const group = new Group();

	const images = svg.xml.querySelectorAll('image');
	for (const image of images) {
		// Get the href attribute of the <image> tag
		const href = image.getAttribute('href')!;
		const x = +(image.getAttribute('x') ?? 0);
		const y = +(image.getAttribute('y') ?? 0);
		const width = +image.getAttribute('width')!;
		const height = +image.getAttribute('height')!;

		// Create a texture from the image href
		const texture = new TextureLoader().load(href);

		// Create a sprite material using the texture
		const material = new SpriteMaterial({ map: texture });

		// Create a sprite using the material
		const sprite = new Sprite(material);

		// Set the sprite scale
		sprite.scale.set(width, height, 1);
		sprite.position.set(x, y, 0);

		// Return the sprite
		group.add(sprite);
	}

	centerObject(group);
	return group;
}

export function loadSvg(url: string, size: Vector3) {
	const group = new Group();

	const loader = new SVGLoader();
	loader.load(
		url,
		(svg: SVGResult) => {
			// group.add(loadSvgPaths(svg));
			group.add(loadSvgImages(svg));
			setSize(group, size);
		},
		(xhr) => {
			// TODO Handle progress events here
		},
		(error) => {
			// TODO Handle error events here
		}
	);

	return group;
}
