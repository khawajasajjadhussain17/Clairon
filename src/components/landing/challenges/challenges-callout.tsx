import { Eye } from "lucide-react"
import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

export function ChallengesCallout() {
  return (
    <div className="relative mt-8">
      {/* Three layering effect - simulated with stacked divs/shadows */}
      <div className="absolute -bottom-2 left-[2%] h-full w-[96%] rounded-[12px] bg-white/40 shadow-sm" aria-hidden />
      <div className="absolute -bottom-4 left-[4%] h-full w-[92%] rounded-[12px] bg-white/20 shadow-sm" aria-hidden />

      <div className="relative flex w-full max-w-[480px] items-start gap-3 rounded-[12px] border border-[#e9edf9] bg-[#f4f6fb] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:gap-4 sm:p-6">
        <div className="flex shrink-0 items-center justify-center pt-0.5">
          <Eye
            className="size-6 text-[#3B71FE]"
            strokeWidth={2}
            aria-hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[15px] leading-snug text-[#38404A] sm:text-[16px] sm:leading-[22px]">
            <span className={cn(LANDING_HEADING_FONT)}>
              Your Team Can&apos;t Track AI Visibility:
            </span>
            {" "}
            <span className={cn(LANDING_SUBHEADING_FONT)}>
              You&apos;re stuck testing prompts manually, with no way to monitor your presence across AI Platforms.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
