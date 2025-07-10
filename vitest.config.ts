import { defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ["./src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
      reporters: ["default", "json"],
      outputFile: {
        json: "./reports/report.json",
      },
      coverage: {
        enabled: true,
        reportsDirectory: "./reports/coverage",
      },
    },
  }),
)
