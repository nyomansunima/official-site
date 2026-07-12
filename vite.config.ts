import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        enabled: true,
      },
      sitemap: {
        enabled: true,
        host: "https://www.nyomansunima.com",
      },
      srcDirectory: "src/app",
    }),
    react(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
  ],
  preview: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
});
