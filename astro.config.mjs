// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    clerk()
  ]
});