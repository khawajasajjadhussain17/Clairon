import { LANDING_SUBHEADING_FONT } from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

export function HeroAttribution() {
  return (
    <p
      className={cn(
        "mt-8 text-center text-[18px] text-[#03020B]",
        LANDING_SUBHEADING_FONT
      )}
    >
      Developped by Crescendo Agency
    </p>
  )
}
