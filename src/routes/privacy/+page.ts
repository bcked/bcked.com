import { renderMarkdown } from '#lib/content.ts';

export const load = () => ({ html: renderMarkdown('/PRIVACY.md') });
