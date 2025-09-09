import * as React from "react"
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import styles from "@shared/styles/globals.css?url"
import { ThemeProvider } from "next-themes"
import { CenteredLayout, Footer, Header } from "@shared/components"
import type { QueryClient } from "@tanstack/react-query"

interface RootDocumentProps {
  children: React.ReactNode
}

interface RouteWithContextProps {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteWithContextProps>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: RootDocumentProps): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CenteredLayout>
            <Header />
            <div className="min-h-screen pb-28 mt-5 tablet:mt-10 tablet:pb-56">
              {children}
            </div>
            <Footer />
          </CenteredLayout>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
