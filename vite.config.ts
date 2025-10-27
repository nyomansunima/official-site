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
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        concurrency: 14,
        autoSubfolderIndex: true,
        retryCount: 7,
      },
      sitemap: {
        enabled: true,
        host: "https://www.nyomansunima.com",
      },
      pages: [
        { path: "/works", prerender: { enabled: true } },
        { path: "/resources", prerender: { enabled: true } },
        { path: "/stories", prerender: { enabled: true } },
        { path: "/journeys", prerender: { enabled: true } },
        { path: "/support", prerender: { enabled: true } },
      ],
      srcDirectory: "src/app",
    }),
    react(),
    nitro(),
  ],
});
