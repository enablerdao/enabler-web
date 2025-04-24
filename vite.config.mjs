import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'common/css/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'common/**/*',
          dest: '.'
        },
        {
          src: 'node_modules/slick-carousel/slick/slick.css',
          dest: 'common/css'
        },
        {
          src: 'node_modules/slick-carousel/slick/slick-theme.css',
          dest: 'common/css'
        },
        {
          src: 'node_modules/slick-carousel/slick/fonts/*',
          dest: 'common/css/fonts'
        },
        {
          src: 'node_modules/slick-carousel/slick/ajax-loader.gif',
          dest: 'common/css'
        }
      ]
    })
  ]
}); 