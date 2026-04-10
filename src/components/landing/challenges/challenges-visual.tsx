import Image from "next/image"
import { cn } from "@/lib/utils"

export function ChallengesVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full min-h-[260px] w-full min-w-0 overflow-hidden rounded-2xl",
        "bg-[#3B71FE] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[440px]",
        className
      )}
    >
      {/* Bottom-anchored mockups — shorter % leaves more blue “frame” above (matches tall blue panel in design) */}
      <div className="pointer-events-none absolute bottom-0 right-[29%] z-10 h-[90%] w-[56%] md:right-[25%]">
        <Image
          src="/assets/backimage.png"
          alt=""
          width={1080}
          height={640}
          sizes="(min-width: 768px) 360px, 45vw"
          className="absolute bottom-0 left-0 h-full w-full origin-bottom-left object-contain object-bottom-left scale-[1.14]"
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-[88%] w-[64%] md:w-[62%]">
        <Image
          src="/assets/frontimg.png"
          alt="Dashboard preview"
          width={920}
          height={640}
          sizes="(min-width: 768px) 480px, 65vw"
          className="absolute bottom-0 right-0 h-full w-full origin-bottom-right object-contain object-bottom-right scale-[1.12]"
        />
      </div>
    </div>
  )
}
