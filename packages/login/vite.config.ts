import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@/variables": `${__dirname}/src/variables.scss`,
  //   },
  // },
  server: {
    proxy: {
      "/api": {
        target: "https://acm.sast.fun/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
