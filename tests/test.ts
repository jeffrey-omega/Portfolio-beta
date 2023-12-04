import { test, expect } from '@playwright/test';

test.describe('index page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('display video', async ({ page }) => {
		page.waitForLoadState('domcontentloaded');

		const video = await page.$('video');
		expect(video).toBeTruthy();

		// generate a screenshot of the page
		await page.screenshot({ path: 'static/screenshot.png', fullPage: true });
	});
});
