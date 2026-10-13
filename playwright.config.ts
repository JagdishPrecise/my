import { defineConfig, devices } from '@playwright/test';
import { existsSync } from 'node:fs';

// The cloud build environment ships a pinned Chromium; use it when present so no download is needed.
const pinned = '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell';
const executablePath = process.env.CHROMIUM_PATH || (existsSync(pinned) ? pinned : undefined);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4321',
    launchOptions: executablePath ? { executablePath } : {},
  },
  webServer: {
    command: 'npx astro preview --port 4321 --ignore-lock',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } },
    },
    {
      name: 'phone',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
});
