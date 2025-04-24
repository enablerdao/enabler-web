import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'common', dest: '' }
      ]
    })
  ]
}); 