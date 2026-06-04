import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lewickamonika.pl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
