import { cn } from "@/lib/utils"

type HBadgeProps = {
  className?: string
}

export function HBadge({ className }: HBadgeProps) {
  return (
    <div
      className={cn(
        "flex size-12 items-center justify-center rounded-full bg-brand-accent text-lg font-semibold text-white shadow-md",
        className
      )}
      aria-hidden
    >
      H
    </div>
  )
}
