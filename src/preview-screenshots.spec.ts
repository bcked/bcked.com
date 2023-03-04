import { test, type Locator, type Page } from '@playwright/test';

import fs from 'fs';

const TARGET_DIR = './static/previews';

const OPEN_GRAPH_IMAGE_SIZE = { width: 1200, height: 630 };

const DEFAULT_BOUNDING_BOX = { x: 0, y: 0, ...OPEN_GRAPH_IMAGE_SIZE };

async function screenshot(page: Page, url: string, path: string, locator?: Locator) {
	await page.setViewportSize(OPEN_GRAPH_IMAGE_SIZE);
	// Deactivate fly in animation
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto(url);

	// Calculate your clip rect. For a single element, that's usually the same as it's bounding box.
	const clipRelativeToViewport = locator
		? (await locator.boundingBox()) ?? DEFAULT_BOUNDING_BOX
		: DEFAULT_BOUNDING_BOX;

	// Translate clip to be relative to the page.
	const clipRelativeToPage = {
		x: clipRelativeToViewport.x + (await page.evaluate(() => window.scrollX)),
		y: clipRelativeToViewport.y + (await page.evaluate(() => window.scrollY)),
		...OPEN_GRAPH_IMAGE_SIZE
	};

	// Take an area screenshot.
	await page.screenshot({
		clip: clipRelativeToPage,
		fullPage: true,
		path,
		quality: 100
	});
}

test('Screenshot of landing page', async ({ page }) => {
	const navbarSuccessor = page.locator('nav + div').nth(0);
	await screenshot(page, '/', `${TARGET_DIR}//landing.jpg`, navbarSuccessor);
});

test('Screenshots of asset pages', async ({ page }) => {
	test.setTimeout(0);
	const assets = fs.readdirSync('./assets');
	const navbarSuccessor = page.locator('nav + div').nth(0);
	for (const id of assets) {
		await screenshot(page, `/assets/${id}`, `${TARGET_DIR}/assets/${id}.jpg`, navbarSuccessor);
	}
});
