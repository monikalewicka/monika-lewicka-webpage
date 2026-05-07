import { defineConfig } from 'astro/config';

// GitHub Pages bez własnej domeny:
//   site → https://<twój-login>.github.io
//   base → '/monika-lewicka-webpage'
//
// Po przejściu na własną domenę (monikalewicka.pl):
//   site → 'https://monikalewicka.pl'
//   base → '/'           (lub usuń to pole)
//   + dodaj public/CNAME z zawartością: monikalewicka.pl

// TODO: Gdy URL będzie znany, dodaj do defineConfig:
//   site: 'https://<login>.github.io',
const BASE_PATH = '/';

export default defineConfig({
  base: BASE_PATH,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
