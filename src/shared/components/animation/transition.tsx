"use client"

import * as React from "react"

type PageTransitionProps = {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-in fade-in-0 slide-in-from-bottom-20 duration-300">
      {children}
    </div>
  )
}
