import Image from "next/image"
import { LANDING_SUBHEADING_FONT } from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

export function HeroAttribution() {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-[18px] text-[#03020B]",
        LANDING_SUBHEADING_FONT
      )}
    >
      <span className="translate-y-[5px] leading-none">Developed by</span>
      <Image
        src="/assets/Crescendo.png"
        alt="Crescendo"
        width={160}
        height={36}
        className="h-7 w-auto object-contain sm:h-9"
      />
    </div>

  )
}

