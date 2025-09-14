import * as React from "react"
import { mergeClass } from "@shared/libs"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

interface MarkdownContentProps {
  content: any
}

export function MarkdownContent({
  content,
}: MarkdownContentProps): React.ReactElement {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  )
}

export function ArticleContent({
  children,
  className,
}: ArticleContentProps): React.ReactElement {
  return (
    <article className={`${mergeClass("prose", className)}`}>
      {children}
    </article>
  )
}
