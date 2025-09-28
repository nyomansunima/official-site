import * as React from "react"
import {
  HeadContent,
  Link,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import styles from "@shared/styles/globals.css?url"
import { Button, CenteredLayout, Footer, Header } from "@shared/components"
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
  notFoundComponent: NotFondComponent,
  errorComponent: ErrorComponent,
})

function RootDocument({ children }: RootDocumentProps): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <CenteredLayout>
          <Header />
          <div className="min-h-screen pb-28 mt-5 tablet:mt-10 tablet:pb-56">
            {children}
          </div>
          <Footer />
        </CenteredLayout>
        <Scripts />
      </body>
    </html>
  )
}

function NotFondComponent(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-sm text-foreground/40 font-mono tracking-tight">
            404.
          </span>
          <h2 className="text-lg font-medium mt-2">Not found.</h2>

          <p className="mt-6 text-pretty leading-7">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="flex mt-10">
          <Button asChild variant={"secondary"}>
            <Link to="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function ErrorComponent(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-sm text-foreground/40 font-mono tracking-tight">
            500.
          </span>
          <h2 className="text-lg font-medium mt-2">Error found.</h2>

          <p className="mt-6 text-pretty leading-7">
            It seems like something went wrong on our end. Please try again
            later, or contact support if the problem persists.
          </p>
        </div>

        <div className="flex mt-10">
          <Button asChild variant={"secondary"}>
            <Link to="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
