import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHtmlPlugin } from "vite-plugin-html"; // 用于生成 HTML 文件
import compress from "rollup-plugin-gzip"; // 用于 Gzip 压缩

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createHtmlPlugin()],
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
    reportCompressedSize: true, // 启用压缩大小报告
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 根据模块路径进行分块
          if (id.includes("node_modules")) {
            // 提取 @codemirror 系列包
            if (id.includes("@codemirror")) {
              return "codemirror";
            }

            // 提取 @emotion 系列包
            if (id.includes("@emotion")) {
              return "emotion";
            }

            // 提取 @monaco-editor 系列包
            if (id.includes("monaco-editor")) {
              return "monaco-editor";
            }

            // 提取 @tanstack 系列包
            if (id.includes("@tanstack")) {
              return "tanstack";
            }

            if (id.includes("@ui-aurora")) {
              return "ui";
            }

            // 将 axios 单独分到一个 chunk
            if (id.includes("axios")) {
              return "axios";
            }

            if (id.includes("@codemirror") || id.includes("codemirror")) {
              return "codemirror";
            }

            // 将其他常用的库单独分块
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }

            // 将 zustand 单独分块
            if (id.includes("zustand")) {
              return "zustand";
            }

            // 其他库统一分到 vendor chunk
            return "vendor";
          }

          if (id.includes("src/components")) {
            return "components";
          }

          if (id.includes("src/hooks")) {
            return "hooks";
          }
        },
      },
      plugins: [
        compress(), // 启用 Gzip 压缩
      ],
    },
    emptyOutDir: true, // 确保输出目录在每次构建前清空
  },
});
