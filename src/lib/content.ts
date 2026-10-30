/** Markdown content from the repository root, rendered at build time. */
import { marked } from 'marked';

const files = import.meta.glob(
	['/ABOUT.md', '/LEGAL_NOTICE.md', '/PRIVACY.md', '/METHODOLOGY.md'],
	{
		query: '?raw',
		import: 'default',
		eager: true
	}
) as Record<string, string>;

export function renderMarkdown(path: string): string {
	const content = files[path];
	if (content === undefined) throw new Error(`Missing content file ${path}`);
	return marked.parse(content, { async: false });
}
