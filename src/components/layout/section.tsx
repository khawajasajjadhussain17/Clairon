import { cn } from "@/lib/utils"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  variant?: "default" | "large" | "tinted"
}

export function Section({
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        variant === "large" && "py-20 md:py-28 lg:py-32",
        variant === "default" && "py-16 md:py-20 lg:py-24",
        variant === "tinted" && "bg-surface-tint/60 py-16 md:py-20 lg:py-24",
        className
      )}
      {...props}
    />
  )
}
