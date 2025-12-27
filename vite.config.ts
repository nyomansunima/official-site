import contentCollections from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    contentCollections(),
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: false,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
      },
      sitemap: {
        enabled: true,
        host: "https://www.heysunima.com",
      },
      srcDirectory: "src/app",
    }),
    react(),
    nitro(),
  ],
});
