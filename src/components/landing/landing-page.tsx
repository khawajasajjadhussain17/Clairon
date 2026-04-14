import { ClaironMotionFooter } from "@/components/ui/motion-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ChallengesSection } from "./challenges/challenges-section"
import { FaqSection } from "./faq/faq-section"
import { FeaturesSection } from "./features/features-section"
import { HeroSection } from "./hero/hero-section"
import { BrandsAgenciesSection } from "./brands-agencies/brands-agencies-section"
import { PricingSection } from "./pricing/pricing-section"
import { RoadmapSection } from "./roadmap-platforms/roadmap-platforms-section"
import { TestimonialsSection } from "./testimonials/testimonials-section"
import { TakeControlSection } from "./take-control/take-control-section"

export function LandingPage() {
  return (
    <div className="landing-font-root flex min-h-0 flex-1 flex-col overflow-x-clip">
      <main id="top" className="flex min-h-0 flex-1 flex-col bg-white overflow-x-clip">
        <div className="relative isolate min-h-[100dvh] min-h-screen overflow-x-clip bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fafc_12%,#eef4ff_28%,#dbeafe_48%,#bfdbfe_68%,#93c5fd_82%,#60a5fa_92%,#3b82f6_100%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_25%,transparent_50%)] after:pointer-events-none after:absolute after:bottom-[-15%] after:left-1/2 after:z-0 after:h-[90%] after:w-[140%] after:max-w-[200vw] after:-translate-x-1/2 after:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(219,234,254,0.7)_30%,rgba(147,197,253,0.35)_55%,transparent_75%)] after:blur-[90px]">
          <SiteHeader />
          <div
            className="pointer-events-none absolute bottom-0 z-[1] h-[65%] w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45 [mask-image:linear-gradient(to_top,black_12%,rgba(0,0,0,0.6)_40%,transparent_85%)] [-webkit-mask-image:linear-gradient(to_top,black_12%,rgba(0,0,0,0.6)_40%,transparent_85%)]"
            aria-hidden
          />
          <section
            className="relative z-[2] overflow-x-clip overflow-y-visible bg-transparent pb-24 pt-16 sm:pb-28 sm:pt-20 md:pb-32 md:pt-24 lg:pb-[160px] lg:pt-[120px]"
            aria-labelledby="hero-heading"
          >
            <div className="relative z-[1] mx-auto w-full min-w-0 max-w-[80rem] px-3 sm:px-6 lg:px-8">
              <HeroSection />
            </div>
          </section>
        </div>
        <ChallengesSection />
        <FeaturesSection />
        <TakeControlSection />
        <BrandsAgenciesSection />
        <RoadmapSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <ClaironMotionFooter />
    </div>
  )
}
