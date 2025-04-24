import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'common/**/*',
          dest: '.'
        }
      ]
    })
  ]
}); 