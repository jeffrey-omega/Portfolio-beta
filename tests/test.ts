import { test, expect } from '@playwright/test';

test.describe('index page', () => {

    test.describe('dark mode', () => {
        test.use({ colorScheme: 'dark' });

        test.beforeEach(async ({ page }) => {
            await page.goto('/');
        });

        test('display video with dark mode', async ({ page }) => {
            await page.waitForLoadState('domcontentloaded');
            const video = await page.$('video');
            expect(video).toBeTruthy();
            await page.screenshot({ path: 'static/screenshot-dark.png', fullPage: true });
        });
    });

    test.describe('light mode', () => {
        test.use({ colorScheme: 'light' });

        test.beforeEach(async ({ page }) => {
            await page.goto('/');
        });

        test('display video with light mode', async ({ page }) => {
            await page.waitForLoadState('domcontentloaded');
            const video = await page.$('video');
            expect(video).toBeTruthy();
            await page.screenshot({ path: 'static/screenshot-light.png', fullPage: true });
        });
    });

});
