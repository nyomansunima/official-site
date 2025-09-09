import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    viteTsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      tsr: {
        srcDirectory: "src/app",
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
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
    }),
    viteReact(),
  ],
})
