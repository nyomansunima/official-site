import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"
import type { Route } from "./+types/root"
import "@shared/globals.css"
import { Button, CenteredLayout, Footer, Header } from "@shared/components"
import { loadConfig } from "@shared/libs"
import { subscribeToNewsletter } from "@features/newsletter"

type LayoutProps = {
  children: React.ReactNode
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const action = formData.get("action")

  if (action === "subscribe-to-newsletter") {
    const email = formData.get("email")

    if (!email) {
      return {
        errors: {
          email: "Please add your email",
        },
      }
    }

    if (email && !email.toString().includes("@")) {
      return {
        errors: {
          email: "Opps, your email looks weird",
        },
      }
    }

    await subscribeToNewsletter({ email: email.toString() })

    return { status: "ok" }
  }

  return {}
}

export function links() {
  const config = loadConfig()

  return [
    { rel: "canonical", href: config.app.host },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
    },
  ]
}

export function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CenteredLayout>
          <Header />
          <div className="min-h-screen pb-28 mt-5 tablet:mt-10 tablet:pb-56">
            {children}
          </div>
          <Footer />
        </CenteredLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
