// Render the /cv page to public/cv.pdf using headless Chromium.
// Requires a running preview server (pnpm preview) and playwright-core's chromium.
//   Regenerate: pnpm preview & ; pnpm cv
import { chromium } from 'playwright-core';
import { execSync } from 'node:child_process';

const url = process.env.CV_URL || 'http://localhost:4321/cv';
let executablePath;
try {
  executablePath = execSync(
    "ls ~/.cache/ms-playwright/chromium_headless_shell-*/chrome-linux/headless_shell 2>/dev/null | head -1",
    { shell: '/bin/bash' },
  )
    .toString()
    .trim();
} catch {
  executablePath = undefined;
}

const browser = await chromium.launch({ executablePath: executablePath || undefined });
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: 'public/cv.pdf',
  format: 'Letter',
  printBackground: false,
  margin: { top: '0.6in', bottom: '0.6in', left: '0.7in', right: '0.7in' },
});
await browser.close();
console.log('public/cv.pdf generated');
