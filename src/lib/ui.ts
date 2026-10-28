import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export type NavigationItem = { name: string; path: string };

export type SocialItem = NavigationItem & { icon: Component<SVGAttributes<SVGSVGElement>> };

export type Theme = {
	title?: string;
	text?: string;
	from?: string;
	via?: string;
	to?: string;
};

export const blue: Theme = {
	title: 'text-neon-blue',
	text: 'text-neon-blue',
	from: 'from-neon-blue',
	via: 'via-neon-blue',
	to: 'to-neon-gray-light'
};

export const yellow: Theme = {
	title: 'text-neon-yellow',
	text: 'text-neon-yellow',
	from: 'from-neon-yellow',
	via: 'via-neon-yellow',
	to: 'to-gray-50'
};

export const pink: Theme = {
	title: 'text-neon-pink',
	text: 'text-neon-pink',
	from: 'from-neon-pink',
	via: 'via-neon-pink',
	to: 'to-gray-50'
};

export type StatsType = 'standard' | 'currency' | 'percent' | 'change';

export type Stat = { name: string; value: string | number | null | undefined; type: StatsType };
