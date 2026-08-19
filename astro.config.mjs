import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hr-galabau.com',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
