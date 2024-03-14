// vite.config.js
import path from 'path';
import dts from 'vite-plugin-dts';
import { join } from 'path';

/** @type {import('vite').UserConfig} */
export default {
  // config options
  plugins: [
    dts(), // Output .d.ts files
  ],
  resolve: {
    alias: {
      "@": "/lib",
    },
  },
  build: {
    target: 'ESNEXT',
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, join('lib', 'index.ts')),
      formats: ['es', 'cjs', 'umd'],
      name: 'index',
      fileName: format => `index.${format}.js`,
    },
  },
};
