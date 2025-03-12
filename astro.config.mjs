// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://FunnyRakoon.github.io',
  base: 'Td-astro',
  vite: {
    plugins: [tailwindcss()]
  }
});