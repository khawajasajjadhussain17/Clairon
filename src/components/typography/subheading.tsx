import { LANDING_SUBHEADING_ON_LIGHT } from "@/lib/landing-typography"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type SubheadingProps = HTMLAttributes<HTMLParagraphElement> & {
  align?: "center" | "left"
}

export function Subheading({
  className,
  align = "center",
  ...props
}: SubheadingProps) {
  return (
    <p
      className={cn(
        LANDING_SUBHEADING_ON_LIGHT,
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-2xl text-left",
        className
      )}
      {...props}
    />
  )
}
