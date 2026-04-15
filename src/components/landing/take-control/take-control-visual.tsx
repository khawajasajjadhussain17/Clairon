import Image from "next/image"
import { cn } from "@/lib/utils"

export function TakeControlVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[371px] w-full overflow-hidden rounded-[28px]",
        className
      )}
    >
      <Image
        src="/assets/take-control.png"
        alt="Clairon AI sources dashboard"
        fill
        className="object-cover object-center"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority
      />
    </div>
  )
}