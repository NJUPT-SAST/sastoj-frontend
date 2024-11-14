import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import compress from "rollup-plugin-gzip";

const ReactCompilerConfig = {
  target: "18",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    createHtmlPlugin(),
  ],
  resolve: {
    alias: {
      "@/variables": `${__dirname}/src/_variables.scss`,
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://acm.sast.fun/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    reportCompressedSize: true, // Enable compressed size report
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Chunking logic
          if (id.includes("node_modules")) {
            if (id.includes("@emotion")) {
              return "emotion";
            }
            if (id.includes("monaco-editor")) {
              return "monaco-editor";
            }
            if (id.includes("@tanstack")) {
              return "tanstack";
            }
            if (id.includes("@ui-aurora")) {
              return "ui";
            }
            if (id.includes("axios")) {
              return "axios";
            }
            if (id.includes("@codemirror") || id.includes("codemirror")) {
              return "codemirror";
            }
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("zustand")) {
              return "zustand";
            }
            return "vendor"; // Other libraries go to vendor chunk
          }

          if (id.includes("src/components")) {
            if (id.includes("monacoEditor")) {
              return "my-monacoEditor";
            }
            return "components";
          }

          if (id.includes("src/hooks")) {
            return "hooks";
          }

          if (id.includes("src/pages")) {
            if (id.includes("problems")) {
              return "problems";
            }
            return "pages";
          }
        },
      },
      plugins: [
        compress(), // Enable Gzip compression
      ],
    },
    emptyOutDir: true, // Ensure output directory is emptied before each build
  },
});
