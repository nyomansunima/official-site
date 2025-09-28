import { createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { QueryClient } from "@tanstack/react-query"
import { routerWithQueryClient } from "@tanstack/react-router-with-query"

export function getRouter() {
  // Define the integrations
  // eg. query, etc.
  const queryClient = new QueryClient()

  // Define the router and provide
  // with the context and wrap it
  const router = routerWithQueryClient(
    createRouter({
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
