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
}: MarkdownContentProps): React.ReactNode {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ ...props }) => {
          return <ContentImage {...props} />
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article
      className={`${mergeClass("prose prose-p:leading-7 prose-li:leading-7 prose-a:text-link", className)}`}
    >
      {children}
    </article>
  )
}

type ContentImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {}

export function ContentImage({
  src,
  alt,
  className,
  ...props
}: ContentImageProps) {
  return (
    <span
      className={`${mergeClass(
        "flex rounded-2xl p-1 border border-border bg-surface cursor-pointer my-4",
        className,
      )}`}
    >
      <div className="relative w-full overflow-hidden rounded-xl not-prose">
        <img
          src={src}
          alt={alt}
          {...props}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </div>
    </span>
  )
}
