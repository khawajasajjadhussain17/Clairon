import Image from "next/image"
import { cn } from "@/lib/utils"

export function ChallengesVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[486px] w-full max-w-[667px] overflow-hidden rounded-[14px]",
        "bg-[linear-gradient(114.11deg,_#3E75FE_0%,_#274896_80.37%)]",
        className
      )}
    >
      <div className="absolute inset-y-0 right-0 w-[86%] sm:w-[88%] md:w-[90%]">
        <Image
          src="/assets/challenges.png"
          alt="Dashboard preview"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain object-right-bottom"
          priority
        />
      </div>
    </div>
  )
}
