import Link from "next/link"
import { cn } from "@/lib/utils"
import { LANDING_SUBHEADING_FONT } from "@/lib/landing-typography"

export function HeroCtas() {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <Link
        href="#start"
        className={cn(
          LANDING_SUBHEADING_FONT,
          "px-5 py-2 text-sm font-medium text-white rounded-[10px] bg-gradient-to-b from-[#2b3445] to-[#1c2230] border border-[#DCE5ED] shadow-[0_2px_6px_rgba(0,0,0,0.2)] no-underline transition-all hover:opacity-90 active:scale-[0.98]"
        )}
      >
        Start for Free
      </Link>
      <Link
        href="#sales"
        className={cn(
          LANDING_SUBHEADING_FONT,
          "px-5 py-2 text-sm font-medium text-[#1a1a1a] rounded-[10px] border border-black bg-white/20 no-underline transition-all hover:bg-white/30 active:scale-[0.98]"
        )}
      >
        Talk to sales
      </Link>
    </div>
  )
}


