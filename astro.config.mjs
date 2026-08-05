// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://allisondvm.com',
  integrations: [sitemap()],
  // Flat file output (/about.html, not /about/index.html) so the static host
  // serves clean URLs without directory redirects. Directory redirects behind a
  // reverse proxy leak the internal origin host:port in the Location header.
  build: {
    format: 'file',
  },
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
