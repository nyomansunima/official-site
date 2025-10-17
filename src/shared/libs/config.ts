export function loadConfig() {
  const isOnBrowser = typeof window !== "undefined";
  const env = isOnBrowser ? (import.meta.env as any) : process.env;

  return {
    app: {
      host: env.VITE_APP_HOST || "http://localhost:5173",
    },
    verification: {
      google: env.VITE_GOOGLE_VERIFICATION,
    },
    kit: {
      key: env.KIT_API_KEY,
    },
  } as const;
}

declare global {
  type Window = {
    __ENV__: any;
  };
}
