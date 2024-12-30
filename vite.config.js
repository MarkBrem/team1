import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input:{
        main: resolve(__dirname, './src/index.html'),
        nested: resolve(__dirname, './src/team.html'),
      }
      // rollupOptions: {
      //   input: glob.sync('./src/team.html'),
      // },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});