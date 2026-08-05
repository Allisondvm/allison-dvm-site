// Verify the brand palette meets WCAG 2.1 AA for every text/link pairing the
// site actually uses. Fails the build (exit 1) if any text pairing drops below
// AA. Decorative-only colors are not checked here (they never carry text).
//   Run: pnpm check:contrast

function lin(c) {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function L(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
function ratio(a, b) {
  const la = L(a);
  const lb = L(b);
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

const base = '#f6f4f1'; // page background
const white = '#ffffff';

// [label, foreground, background, isLargeText]
const pairs = [
  ['body ink on base', '#2b2426', base, false],
  ['muted ink on base', '#6e4a4e', base, false],
  ['accent link on base', '#256b76', base, false],
  ['accent-strong on base', '#8e2f5a', base, false],
  ['white on accent (button)', white, '#256b76', false],
  ['white on accent-strong (button hover)', white, '#8e2f5a', false],
  ['white on provence (dark section)', white, '#17618e', false],
];

let failed = 0;
for (const [label, fg, bg, large] of pairs) {
  const r = ratio(fg, bg);
  const min = large ? 3.0 : 4.5;
  const ok = r >= min;
  if (!ok) failed++;
  const tag = ok ? 'PASS' : 'FAIL';
  console.log(`${tag}  ${r.toFixed(2)}:1  ${label}`);
}

if (failed > 0) {
  console.error(`\n${failed} contrast pairing(s) below WCAG AA. Fix the palette.`);
  process.exit(1);
}
console.log('\nAll text pairings meet WCAG 2.1 AA.');
