import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { bind } from "cuelume";
import * as React from "react";
import styles from "~/app/globals.css?url";

interface RootDocumentProps {
  children: React.ReactNode;
}
export const Route = createRootRoute({
  errorComponent: ErrorComponent,
  head: () => ({
    links: [
      { href: "/favicon.ico", rel: "icon", type: "image/x-icon" },
      { href: "/sitemap.xml", rel: "sitemap", type: "application/xml" },
      {
        href: styles,
        rel: "stylesheet",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
    ],
  }),
  notFoundComponent: NotFondComponent,
  shellComponent: RootDocument,
});

function RootDocument({ children }: RootDocumentProps): React.ReactElement {
  React.useEffect(() => {
    bind();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="container relative mx-auto px-5 sm:px-0">
        <div className="relative mx-auto flex w-full flex-col gap-14 pt-10 pb-28 sm:w-10/12 sm:px-10 sm:pt-28 md:w-9/12 lg:w-6/12 xl:w-5/12">
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
