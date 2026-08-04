// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahasandhi.in',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  redirects: {
    '/age-calculator': '/mpsc-age-calculator-marathi'
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.wrangler/**', '**/.astro/**']
      }
    },
    ssr: {
      external: ['cloudflare:workers']
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: ['cloudflare:workers']
    }
  }
});