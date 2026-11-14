// Renders every slide in carousel-template.html (or a file you pass) to 1080×1350 PNGs.
// Usage:  node export.js [file.html] [outDir]
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const file = path.resolve(process.argv[2] || 'carousel-template.html');
  const out = path.resolve(process.argv[3] || 'export');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1500 } });
  await page.goto('file://' + file, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: ':root{--z:1 !important}' });
  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const name = `slide-${String(i + 1).padStart(2, '0')}.png`;
    await slides[i].screenshot({ path: path.join(out, name) });
    console.log('saved', name);
  }
  await browser.close();
})();
