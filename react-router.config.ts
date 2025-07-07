import type { Config } from "@react-router/dev/config"

export default {
  appDirectory: "src",
  ssr: true,
  future: {
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config
