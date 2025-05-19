import { loadEnv } from "vite"
import { defineConfig, fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import robots from "astro-robots"
import sitemap from "@astrojs/sitemap"

import vercel from "@astrojs/vercel"

const { BASE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "")

export default defineConfig({
  site: BASE_URL || "http://localhost:4321",

  devToolbar: {
    enabled: false,
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), robots()],
  adapter: vercel({
    isr: true,
    webAnalytics: {
      enabled: true,
    },
  }),
})
