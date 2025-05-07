import Image from "next/image"
import * as React from "react"
import { mergeClass } from "@shared/utils"

type ArticleContentProps = {
  children: React.ReactNode
  className?: string
}

type ProtectedHtmlContentProps = {
  children: string
}

type GalleryItemProps = {
  image: string
}

type GalleryListImageProps = {
  images: string[]
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

export function ProtectedHtmlContent({ children }: ProtectedHtmlContentProps) {
  // The content that passed throgh the elements
  const content = { __html: children }

  return <div dangerouslySetInnerHTML={content}></div>
}

type ContentImageProps = {
  src: string
  alt: string
  height?: number
  width?: number
  className?: string
}

export function ContentImage({ src, alt, className }: ContentImageProps) {
  return (
    <span
      className={`${mergeClass(
        "flex rounded-2xl p-1 border border-border bg-surface cursor-pointer my-4",
        className,
      )}`}
    >
      <picture className="relative w-full h-[200px] tablet:h-[400px] overflow-hidden rounded-xl not-prose">
        <Image
          src={src}
          alt={alt}
          quality={100}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </picture>
    </span>
  )
}

export function GalleryItem({ image }: GalleryItemProps) {
  const imageUrl = image

  return (
    <div className="flex col-span-1 rounded-2xl p-1 border border-border bg-surface cursor-pointer">
      <picture className="relative w-full h-[290px] overflow-hidden rounded-xl not-prose">
        <Image
          src={imageUrl}
          alt="Gallery"
          fill
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </picture>
    </div>
  )
}

export function GalleryListImage({ images }: GalleryListImageProps) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-3 gap-2">
      {images.map((image, index) => (
        <GalleryItem image={image} key={index} />
      ))}
    </div>
  )
}
