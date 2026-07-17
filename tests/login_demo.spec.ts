import { test } from '@playwright/test';

test('open demo.applitools.com and sign in', async ({ page }) => {
  await page.goto('https://demo.applitools.com');
  await page.fill('#username', 'demo@applitools.com');
  await page.fill('#password', 'password');
  await page.click('#log-in');
  await page.pause();
  
});
