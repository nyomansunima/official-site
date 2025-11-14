import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  // Define the router and provide
  // with the context and wrap it
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
  });

  return router;
}
