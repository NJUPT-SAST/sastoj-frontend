// vite.config.js
import path from 'path';
import dts from 'vite-plugin-dts';
import { join } from 'path';
import { litScss } from 'rollup-plugin-scss-lit'
import copy from 'rollup-plugin-copy'

/** @type {import('vite').UserConfig} */
export default {
  // config options
  plugins: [
    dts(), // Output .d.ts files
    litScss({ minify: process.env.NODE_ENV === 'production', options: { loadPaths: ["node_modules"] }, }), // Support for lit-element scss
    copy({
      targets: [{ src: "lib/**/*.scss", dest: "dist" }], // build is configured as outDir in tsconfig.json
      flatten: false, // important - preserves folder structure
      hook: "buildStart", // important - needs to run before other plugins
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./lib/variables" as *;`, // Import global scss variables
        includePaths: [path.resolve(__dirname, 'lib')], // Include paths for scss
      },
    },
  },
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
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  },
};
