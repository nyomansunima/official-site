function isBrowser() {
  return typeof window !== "undefined" ? true : false
}

export function loadServerEnv() {
  const env = {
    APP_HOST: process.env.APP_HOST,
    POSTHOG_KEY: process.env.POSTHOG_KEY,
    GOOGLE_VERIFICATION: process.env.GOOGLE_VERIFICATION,
    KIT_API_KEY: process.env.KIT_API_KEY,
  }

  return env
}

export function loadConfig() {
  const isOnBrowser = isBrowser()
  const ENV = isOnBrowser ? window.__ENV__ : process.env

  return {
    app: {
      host: ENV.APP_HOST || "http://localhost:5173",
    },
    posthog: {
      key: ENV.POSTHOG_KEY,
    },
    verification: {
      google: ENV.GOOGLE_VERIFICATION,
    },
    kit: {
      key: ENV.KIT_API_KEY,
    },
  } as const
}

declare global {
  interface Window {
    __ENV__: any
  }
}
