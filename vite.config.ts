import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import generouted from "@generouted/react-router/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    cssCodeSplit: true, //css dipisaha perhalamnta
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }

          if (id.includes("/src/pages/")) {
            const match = id.match(/src\/pages\/([^/]+)/);
            if (match) {
              return `page-${match[1]}`;
            }
          }
        },
      },
    },
  },
});
