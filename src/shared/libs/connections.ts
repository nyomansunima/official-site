import { config } from "./config"

type FetcherOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: HeadersInit
  body?: any
  cache?: RequestCache
}

function createConnection<T = any>(
  baseUrl: string,
  options: FetcherOptions = {},
) {
  return async (url: string, opts: FetcherOptions = {}): Promise<T> => {
    const combinedOptions: FetcherOptions = {
      method: "GET",
      headers: {},
      cache: "no-cache",
      ...options,
      ...opts,
    }

    const { method, headers, body, cache } = combinedOptions
    const fetchUrl = `${baseUrl}${url}`

    const res = await fetch(fetchUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      cache,
    })

    if (!res.ok) {
      throw new Error("Error fetching data")
    }

    return await res.json()
  }
}

export const kitConnection = createConnection("https://api.kit.com/v4", {
  headers: {
    "X-Kit-Api-Key": `${config.kit.apiKey}`,
  },
})
