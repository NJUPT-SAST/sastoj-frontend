import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/variables": `${__dirname}/src/_variables.scss`,
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://192.168.1.61",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
