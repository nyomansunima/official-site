import { getWorkPaths } from "@features/works"
import type { Config } from "@react-router/dev/config"

export default {
  appDirectory: "src",
  ssr: true,
  prerender: async ({ getStaticPaths }) => {
    const staticPaths = getStaticPaths()
    const workPaths = await getWorkPaths()

    return [...staticPaths, ...workPaths]
  },
} satisfies Config
