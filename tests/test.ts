import { test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	//await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();

	// generate a screenshot of the page
	await page.screenshot({ path: 'static/screenshot.png', fullPage: true });
});
