import { reactRouter } from "@react-router/dev/vite"
import { reactRouterHonoServer } from "react-router-hono-server/dev"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    reactRouterHonoServer(),
    reactRouter(),
    tailwindcss(),
    tsconfigPaths(),
  ],
})
