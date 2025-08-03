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
    <article className={`${mergeClass("prose", className)}`}>
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
    <div className="relative w-full overflow-hidden rounded-2xl not-prose my-4">
      <img
        src={src}
        alt={alt}
        {...props}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  )
}
