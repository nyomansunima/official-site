import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src/app",
      prerender: {
        enabled: true,
      },
      sitemap: {
        enabled: true,
        host: "https://www.nyomansunima.com",
      },
    }),
    react(),
    nitro(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
