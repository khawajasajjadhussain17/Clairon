import {
  LANDING_HEADING_FONT,
  LANDING_SECTION_HEADING_ON_LIGHT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3"
}

export function DisplayHeading({
  className,
  as: Comp = "h1",
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn(
        "mx-auto max-w-4xl text-center text-[clamp(1.85rem,4.5vw+0.5rem,4rem)] leading-[1.1] tracking-[-0.02em] text-[#03020B]",
        LANDING_HEADING_FONT,
        className
      )}
      {...props}
    />
  )
}

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3"
  align?: "center" | "left"
}

export function SectionHeading({
  className,
  as: Comp = "h2",
  align = "center",
  ...props
}: SectionHeadingProps) {
  return (
    <Comp
      className={cn(
        LANDING_SECTION_HEADING_ON_LIGHT,
        align === "center" && "mx-auto max-w-4xl text-center",
        align === "left" && "max-w-4xl text-left",
        className
      )}
      {...props}
    />
  )
}
