import { test, type Locator, type Page } from '@playwright/test';

import fs from 'fs';

const TARGET_DIR = './static';

const OPEN_GRAPH_IMAGE_SIZE = { width: 1200, height: 630 };

const DEFAULT_BOUNDING_BOX = { x: 0, y: 0, ...OPEN_GRAPH_IMAGE_SIZE };

async function screenshot(page: Page, url: string, path: string, locator?: Locator) {
	await page.setViewportSize(OPEN_GRAPH_IMAGE_SIZE);
	// Deactivate fly in animation
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto(url, { waitUntil: 'networkidle' });
	// await page.waitForTimeout(3000);

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
	const navbarSuccessor = page.locator('nav + main').nth(0);
	await screenshot(page, '/', `${TARGET_DIR}/preview.jpg`, navbarSuccessor);
});

test('Screenshot of graph', async ({ page }) => {
	await screenshot(page, '/graph', `${TARGET_DIR}/graph/preview.jpg`);
});

test('Screenshot of lists', async ({ page }) => {
	const navbarSuccessor = page.locator('nav + main').nth(0);
	await screenshot(page, '/assets', `${TARGET_DIR}/assets/preview.jpg`, navbarSuccessor);
	await screenshot(page, '/issuers', `${TARGET_DIR}/issuers/preview.jpg`, navbarSuccessor);
	await screenshot(page, '/chains', `${TARGET_DIR}/chains/preview.jpg`, navbarSuccessor);
});

test('Screenshots of asset pages', async ({ page }) => {
	test.setTimeout(0);
	const assets = fs.readdirSync('./assets');
	const navbarSuccessor = page.locator('nav + main').nth(0);
	for (const id of assets) {
		await screenshot(
			page,
			`/assets/${id}`,
			`${TARGET_DIR}/assets/${id}/preview.jpg`,
			navbarSuccessor
		);
	}
});

test('Screenshots of issuer pages', async ({ page }) => {
	test.setTimeout(0);
	const issuers = fs.readdirSync('./issuers');
	const navbarSuccessor = page.locator('nav + main').nth(0);
	for (const id of issuers) {
		await screenshot(
			page,
			`/issuers/${id}`,
			`${TARGET_DIR}/issuers/${id}/preview.jpg`,
			navbarSuccessor
		);
	}
});

test('Screenshots of chain pages', async ({ page }) => {
	test.setTimeout(0);
	const chains = fs.readdirSync('./chains');
	const navbarSuccessor = page.locator('nav + main').nth(0);
	for (const id of chains) {
		await screenshot(
			page,
			`/chains/${id}`,
			`${TARGET_DIR}/chains/${id}/preview.jpg`,
			navbarSuccessor
		);
	}
});
