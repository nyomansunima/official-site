import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    compatibilityDate: "2025-09-02",
    compatibilityFlags: ["nodejs_compat"],
    entrypoint: "@tanstack/react-start/server-entry",
    name: "personal-site",
  },
});
