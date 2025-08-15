import * as React from "react"
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@shared/styles/globals.css"
import { Button, CenteredLayout, Footer, Header } from "@shared/components"
import { loadServerEnv } from "@shared/libs"
import { ThemeProvider } from "next-themes"

interface LayoutProps {
  children: React.ReactNode
}

export function loader() {
  const ENV = loadServerEnv()

  return { ENV }
}

export function Layout({ children }: LayoutProps) {
  const { ENV } = useLoaderData<typeof loader>()
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ENV__ = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="flex flex-col items-center text-center pt-16 p-4 container mx-auto">
      <h1 className="text-4xl">{message}.</h1>
      <p className="text-foreground/60 mt-6">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto mt-16">
          <code>{stack}</code>
        </pre>
      )}

      <div className="flex justify-center items-center mt-16">
        <Button asChild>
          <Link to={"/"}>Back to home</Link>
        </Button>
      </div>
    </main>
  )
}

export default function App() {
  return <Outlet />
}
