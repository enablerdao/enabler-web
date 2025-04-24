import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: resolve('.', 'index.html')
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [{ src: 'common/**/*', dest: '' }]
    })
  ]
}); 