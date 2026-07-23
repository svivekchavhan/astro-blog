// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahasandhi.in',
  redirects: {
    '/age-calculator': '/mpsc-age-calculator-marathi'
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});