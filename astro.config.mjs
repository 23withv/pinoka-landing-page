import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    svelte(),
  ],
  vite: {
    server: {
      allowedHosts: true,
    },
    optimizeDeps: {
      exclude: ['@astrojs/svelte'],
    },
    build: {
      chunkSizeWarningLimit: 2000,
    },
    plugins: [
      {
        name: 'sanitize-daisy-layout-transition',
        enforce: 'post',
        transform(/** @type {string} */ code, /** @type {string} */ id) {
          if (id.includes('.css') || id.includes('global.css') || id.includes('type=style')) {
            if (code.includes('margin-top') && code.includes('transition-property')) {
              return code.replaceAll('transition-property: transform, margin-top', 'transition-property: transform');
            }
          }
          return code;
        },
      },
    ],
  },
});
