import { defineConfig } from 'astro/config';

// Dynamically use repository name for GitHub Pages if running in GitHub Actions
const repoName = process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
  : '/HR-Galabau';

// https://astro.build/config
export default defineConfig({
  base: repoName,
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
