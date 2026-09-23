import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://ydlee0620.github.io',
  base: '/travel-journal',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
