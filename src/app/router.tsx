import { createRouter as createTanstackRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { QueryClient } from "@tanstack/react-query"
import { routerWithQueryClient } from "@tanstack/react-router-with-query"

export const createRouter = () => {
  // Define the integrations
  // eg. query, etc.
  const queryClient = new QueryClient()

  // Define the router and provide
  // with the context and wrap it
  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
      defaultPreload: "intent",
      context: { queryClient },
    }),
    queryClient,
  )

  return router
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
