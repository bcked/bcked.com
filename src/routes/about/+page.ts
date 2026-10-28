import { renderMarkdown } from '#lib/content.ts';

export const load = () => ({ html: renderMarkdown('/ABOUT.md') });
