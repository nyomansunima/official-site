import { mergeClass } from "@shared/libs/utils";
import type * as React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

type ArticleContentProps = {
  children: React.ReactNode;
  className?: string;
};

type MarkdownContentProps = {
  content: any;
};

export function MarkdownContent({
  content,
}: MarkdownContentProps): React.ReactElement {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}

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
