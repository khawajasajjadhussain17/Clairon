import Image from "next/image"
import { cn } from "@/lib/utils"

export function TakeControlVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[371px] w-full overflow-hidden rounded-2xl",
        "bg-[#3B71FE]",
        className
      )}
    >
      {/* BACK PANEL */}
      <div
        className="pointer-events-none absolute
        bottom-0 right-[46%] z-10
        h-[86%] w-[38%]"
      >
        <Image
          src="/assets/backimg.png"
          alt=""
          width={605}
          height={350}
          className="h-full w-full
            object-cover
            object-left-top
            rounded-[10px]
            opacity-95"
        />
      </div>

      {/* FRONT PANEL */}
      <div
        className="pointer-events-none absolute
        bottom-0 right-0 z-20
        h-[94%] w-[74%]"
      >
        <Image
          src="/assets/frontimg.png"
          alt="Clairon dashboard"
          width={655}
          height={375}
          className="h-full w-full
            object-cover
            object-left-top
            rounded-l-[10px]
            drop-shadow-2xl"
        />
      </div>
    </div>
  )
}