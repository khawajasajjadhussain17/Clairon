import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"
import { HeroAttribution } from "@/components/landing/hero/hero-attribution"
import { HeroCard } from "@/components/landing/hero/hero-card"
import { HeroCtas } from "@/components/landing/hero/hero-ctas"

export function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <h1
        id="hero-heading"
        className={cn(
          "mb-5 text-balance text-center align-middle text-[clamp(1.75rem,5.5vw+0.35rem,4.5rem)] leading-[1.12] tracking-normal text-[#03020B] sm:mb-6",
          LANDING_HEADING_FONT
        )}
      >
        Monitor and Grow Your
        <br />
        Visibility On All AI Platforms
      </h1>

      <p
        className={cn(
          "mx-auto mb-8 max-w-[40rem] px-1 text-center text-[15px] leading-[1.65] tracking-normal text-[#6B7280] sm:text-[17px] sm:leading-[1.6] md:text-[18px]",
          LANDING_SUBHEADING_FONT
        )}
      >
        Track your AI visibility, generate detailed reports, and create GEO-
        optimised content — automatically in a single platform.
      </p>

      <HeroCtas />
      <HeroAttribution />
      <HeroCard />
    </div>
  )
}
