import { renderMarkdown } from '#lib/content.ts';

export const load = () => ({ html: renderMarkdown('/METHODOLOGY.md') });
