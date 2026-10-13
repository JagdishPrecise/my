import { test, expect } from '@playwright/test';
import { routes } from './routes';

for (const r of routes) {
  test(`${r.path} renders correctly`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(e.message));
    const res = await page.goto(r.path);
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveText(r.h1);
    await expect(page).toHaveTitle(/Jagdish Chaudhary/);
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy();
    expect(await page.locator('link[rel="canonical"]').count()).toBe(1);
    // no horizontal scroll
    const [sw, cw] = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    expect(sw).toBeLessThanOrEqual(cw);
    // the primary action is reachable from every page
    await expect(page.getByRole('link', { name: 'Book a call' }).first()).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test('404 page renders', async ({ page }) => {
  const res = await page.goto('/no-such-page');
  expect(res?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('That page is not in this document.');
});

test('skip link and keyboard focus work', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('.name')).toBeFocused();
});

test('mobile menu toggles', async ({ page, viewport }) => {
  test.skip(!viewport || viewport.width > 599, 'phone only');
  await page.goto('/');
  const btn = page.getByRole('button', { name: 'Menu' });
  await expect(btn).toBeVisible();
  await expect(page.locator('#site-menu')).toBeHidden();
  await btn.click();
  await expect(page.locator('#site-menu')).toBeVisible();
  await expect(btn).toHaveAttribute('aria-expanded', 'true');
});
