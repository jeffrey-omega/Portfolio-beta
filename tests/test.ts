import { test, expect } from '@playwright/test';

test.describe('index page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('display video', async ({ page }) => {
<<<<<<< HEAD
		await page.waitForLoadState('domcontentloaded');
=======
		page.waitForLoadState('domcontentloaded');
>>>>>>> main

		const video = await page.$('video');
		expect(video).toBeTruthy();

		// generate a screenshot of the page
		await page.screenshot({ path: 'static/screenshot.png', fullPage: true });
	});
});
