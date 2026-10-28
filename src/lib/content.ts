/** Markdown content from the repository root, rendered at build time. */
import { marked } from 'marked';

const files = import.meta.glob(
	['/ABOUT.md', '/LEGAL_NOTICE.md', '/faqs/*.md', '/comments/*/*.md'],
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

/** FAQ entries, each a question heading followed by the answer. */
export function faqs(): { question: string; answer: string }[] {
	return Object.entries(files)
		.filter(([path]) => path.startsWith('/faqs/'))
		.toSorted(([a], [b]) => a.localeCompare(b))
		.map(([, content]) => {
			const [heading, ...rest] = content.trim().split('\n');
			return {
				question: heading!.replace(/^#+\s*/, ''),
				answer: marked.parse(rest.join('\n').trim(), { async: false })
			};
		});
}

export type Comment = { type: 'praise' | 'doubt'; title: string; html: string };

/** Praise and doubts about the backing of an asset, from `comments/<asset id>/`. */
export function comments(assetId: string): Comment[] {
	return Object.entries(files)
		.filter(([path]) => path.startsWith(`/comments/${assetId}/`))
		.toSorted(([a], [b]) => a.localeCompare(b))
		.map(([path, content]) => {
			const [heading, ...rest] = content.trim().split('\n');
			return {
				type: path.split('/').at(-1)!.startsWith('doubt') ? 'doubt' : 'praise',
				title: heading!.replace(/^#+\s*/, ''),
				html: marked.parse(rest.join('\n').trim(), { async: false })
			};
		});
}
