import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-1.5 outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      aria-label="Clairon home"
    >
      <Image
        src="/assets/group.svg"
        alt=""
        width={22}
        height={15}
        className="shrink-0"
        priority
      />
      <Image
        src="/assets/group2.svg"
        alt="Clairon"
        width={76}
        height={20}
        className="shrink-0 max-[380px]:h-[18px] max-[380px]:w-auto"
        priority
      />
    </Link>
  )
}
