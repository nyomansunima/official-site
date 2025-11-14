import { Button, CenteredLayout, Header } from "@shared/components";
import styles from "@shared/styles/globals.css?url";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type * as React from "react";

type RootDocumentProps = {
  children: React.ReactNode;
};
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
      <body>
        <CenteredLayout>
          <Header />
          <div className="mt-5 tablet:mt-10 min-h-screen pt-6 pb-28 tablet:pb-56">
            {children}
          </div>
        </CenteredLayout>
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
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            404.
          </span>
          <h2 className="mt-2 font-medium text-lg">Not found.</h2>

          <p className="mt-6 text-pretty leading-7">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="mt-10 flex">
          <Button asChild variant={"secondary"}>
            <a href="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </a>
          </Button>
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
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            500.
          </span>
          <h2 className="mt-2 font-medium text-lg">Error found.</h2>

          <p className="mt-6 text-pretty leading-7">
            It seems like something went wrong on our end. Please try again
            later, or contact support if the problem persists.
          </p>
        </div>

        <div className="mt-10 flex">
          <Button asChild variant={"secondary"}>
            <a href="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
