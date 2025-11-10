import { mergeClass } from "@shared/libs/utils";
import type * as React from "react";

type ArticleContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function ArticleContent({
  children,
  className,
}: ArticleContentProps): React.ReactElement {
  return (
    <article className={`${mergeClass("prose", className)}`}>
      {children}
    </article>
  );
}
