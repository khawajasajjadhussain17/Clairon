import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  className?: string
  size?: "default" | "footer"
}

const LOGO_SIZE_CONFIG = {
  default: {
    containerGap: "gap-1.5",
    iconWidth: 22,
    iconHeight: 15,
    wordWidth: 76,
    wordHeight: 20,
    wordClassName: "max-[380px]:h-[18px] max-[380px]:w-auto",
  },
  footer: {
    containerGap: "gap-1",
    iconWidth: 33,
    iconHeight: 22,
    wordWidth: 114,
    wordHeight: 30,
    wordClassName: "",
  },
} as const

export function Logo({ className, size = "default" }: LogoProps) {
  const config = LOGO_SIZE_CONFIG[size]

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring/50",
        config.containerGap,
        className
      )}
      aria-label="Clairon home"
    >
      <Image
        src="/assets/group.svg"
        alt=""
        width={config.iconWidth}
        height={config.iconHeight}
        className="shrink-0"
        priority
      />
      <Image
        src="/assets/group2.svg"
        alt="Clairon"
        width={config.wordWidth}
        height={config.wordHeight}
        className={cn("shrink-0", config.wordClassName)}
        priority
      />
    </Link>
  )
}
