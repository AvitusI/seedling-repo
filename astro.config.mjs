import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://avitusi.github.io',
  base: '/seedling-repo',
  output: 'static',
  integrations: [sitemap()],
});
