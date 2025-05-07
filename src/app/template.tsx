import * as React from "react"
import { PageTransition } from "@shared/components"

type RootTemplateProps = {
  children: React.ReactNode
}

export default function RootTemplate({ children }: RootTemplateProps) {
  return <PageTransition>{children}</PageTransition>
}
