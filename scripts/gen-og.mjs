// Generate public/og.png (1200x630 social card) from an inline SVG using sharp.
// Soft-white background, laguna-ink accent, her name + focus. No browser needed.
//   Run: pnpm og
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f6f4f1"/>
  <rect x="0" y="0" width="1200" height="10" fill="#256b76"/>
  <g font-family="Georgia, 'DejaVu Serif', serif">
    <text x="80" y="250" font-size="76" font-weight="700" fill="#2b2426">Krista Allison, DVM</text>
    <text x="82" y="320" font-size="34" fill="#256b76">Veterinarian &#183; Clinical Research &#183; Pharmacovigilance</text>
  </g>
  <g font-family="'DejaVu Sans', sans-serif">
    <text x="80" y="410" font-size="28" fill="#6e4a4e">Bringing point-of-care experience into animal-health science.</text>
    <text x="80" y="560" font-size="26" fill="#8e2f5a">allisondvm.com</text>
  </g>
  <circle cx="1090" cy="120" r="16" fill="#8e2f5a"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('public/og.png generated');
