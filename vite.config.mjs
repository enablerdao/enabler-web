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
        format: 'iife',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac|jpg|png|jpeg|gif|svg|webp)$/i.test(assetInfo.name)) {
            return `common/images/[name][extname]`;
          }
          if (assetInfo.name.endsWith('.css')) {
            return 'common/css/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'common/js/[name]-[hash].js',
        chunkFileNames: 'common/js/[name]-[hash].js'
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'common/images/*',
          dest: 'dist/common/images'
        },
        {
          src: 'common/css/*',
          dest: 'dist/common/css'
        },
        {
          src: 'common/js/common.js',
          dest: 'dist/common/js'
        },
        {
          src: 'common/js/slick.js',
          dest: 'dist/common/js'
        },
        {
          src: 'node_modules/slick-carousel/slick/slick.css',
          dest: 'dist/common/css'
        },
        {
          src: 'node_modules/slick-carousel/slick/slick-theme.css',
          dest: 'dist/common/css'
        },
        {
          src: 'node_modules/slick-carousel/slick/fonts/*',
          dest: 'dist/common/css/fonts'
        },
        {
          src: 'node_modules/slick-carousel/slick/ajax-loader.gif',
          dest: 'dist/common/css'
        }
      ]
    })
  ]
}); 