import { defineConfig } from 'astro/config';

// TODO: Replace with the production canonical URL before deployment.
const SITE_URL = 'https://monikalewicka.pl';

export default defineConfig({
  site: SITE_URL,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
