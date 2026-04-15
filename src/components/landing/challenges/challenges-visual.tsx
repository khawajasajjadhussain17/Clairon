import Image from "next/image"
import { cn } from "@/lib/utils"

export function ChallengesVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full min-h-[260px] w-full min-w-0 overflow-hidden rounded-2xl",
        "bg-[linear-gradient(114.11deg,_#3E75FE_0%,_#274896_80.37%)] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[440px]",
        className
      )}
    >
      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-[94%] w-[92%]">
        <Image
          src="/assets/challenges.png"
          alt="Dashboard preview"
          width={1078}
          height={744}
          sizes="(min-width: 1024px) 52vw, (min-width: 768px) 58vw, 92vw"
          className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom-right"
        />
      </div>
    </div>
  )
}
