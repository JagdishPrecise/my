import { test } from '@playwright/test';
import { routes } from './routes';

// Review screenshots, not assertions. Written to tests/__screenshots__ (git-ignored).
for (const r of routes) {
  test(`screenshot ${r.path}`, async ({ page }, info) => {
    await page.goto(r.path);
    await page.evaluate(() => document.fonts.ready);
    const name = (r.path === '/' ? 'home' : r.path.slice(1).replace(/\//g, '-')) + '-' + info.project.name + '.png';
    await page.screenshot({ path: `tests/__screenshots__/${name}`, fullPage: true });
  });
}
