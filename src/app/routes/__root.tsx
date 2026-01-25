import { Header } from "@shared/components/header";
import styles from "@shared/styles/globals.css?url";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type * as React from "react";

interface RootDocumentProps {
  children: React.ReactNode;
}
export const Route = createRootRoute({
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
});

function RootDocument({ children }: RootDocumentProps): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="container mx-auto bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[24px_24px] bg-fixed px-5 [--pattern-fg:var(--color-gray-950)]/5 lg:px-10">
        <div className="mx-auto w-full pb-28 sm:w-10/12 md:w-9/12 lg:w-6/12 xl:w-5/12">
          <Header />
          {children}
        </div>
        <Scripts />
      </body>
    </html>
  );
}

function NotFondComponent(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-foreground/40 text-sm tracking-tighter">
            404.
          </span>
          <h2 className="mt-2 font-medium text-xl tracking-tighter">
            Not found.
          </h2>

          <p className="mt-6 text-pretty leading-7">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="mt-10 flex">
          <a
            className="flex h-10 items-center gap-3 rounded-full bg-secondary px-4 text-secondary-foreground"
            href="/"
          >
            <svg
              fill="none"
              height="14"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
            </svg>
            Bring me back
          </a>
        </div>
      </section>
    </main>
  );
}

function ErrorComponent(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-foreground/40 text-sm tracking-tighter">
            500.
          </span>
          <h2 className="mt-2 font-medium text-xl tracking-tighter">
            Error found.
          </h2>

          <p className="mt-6 text-pretty leading-7">
            It seems like something went wrong on our end. Please try again
            later, or contact support if the problem persists.
          </p>
        </div>

        <div className="mt-10 flex">
          <a
            className="flex h-10 items-center gap-3 rounded-full bg-secondary px-4 text-secondary-foreground"
            href="/"
          >
            <svg
              fill="none"
              height="14"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
            </svg>
            Bring me back
          </a>
        </div>
      </section>
    </main>
  );
}
