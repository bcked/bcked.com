import { renderMarkdown } from '#lib/content.ts';

export const load = () => ({ html: renderMarkdown('/LEGAL_NOTICE.md') });
