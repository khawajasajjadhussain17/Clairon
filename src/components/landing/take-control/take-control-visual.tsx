import Image from "next/image"
import { cn } from "@/lib/utils"

export function TakeControlVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full min-w-0 overflow-hidden rounded-2xl bg-[#3B71FE]",
        className
      )}
    >
      {/* Back image — shifted left so more of the sidebar shows */}
      <div className="pointer-events-none absolute bottom-0 right-[27%] z-10 h-[98%] w-[56%] md:right-[23%]">
        <Image
          src="/assets/backimage.png"
          alt=""
          width={1080}
          height={640}
          sizes="(min-width: 1024px) 420px, 50vw"
          className="absolute bottom-0 left-0 h-full w-full origin-bottom-left object-contain object-bottom-left scale-[1.14]"
        />
      </div>

      {/* Front image — right / on top */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-[90%] w-[64%] md:w-[62%]">
        <Image
          src="/assets/frontimg.png"
          alt="Clairon dashboard — Sources view"
          width={920}
          height={640}
          sizes="(min-width: 1024px) 520px, 62vw"
          className="absolute bottom-0 right-0 h-full w-full origin-bottom-right object-contain object-bottom-right scale-[1.12]"
        />
      </div>
    </div>
  )
}
