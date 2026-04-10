import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_ON_LIGHT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

function ScheduleCallButton({ className }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#3B71FE] bg-[#eff4ff] px-6 py-2.5 text-[15px] font-semibold text-[#3B71FE] shadow-sm transition hover:bg-[#e7eeff] hover:shadow",
        className
      )}
    >
      Schedule a Call
      <ArrowRight className="size-4 shrink-0" aria-hidden />
    </a>
  )
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((text) => (
        <li key={text} className="flex gap-3 text-[15px] leading-snug text-[#4b5563]">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-[#dcfce7] bg-white text-[#16a34a] shadow-sm">
            <Check className="size-3 stroke-[3]" aria-hidden />
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}

const brandsBullets = [
  "Real-time AI visibility tracking",
  "GEO Content Generator to boost citations",
  "Competitor benchmarking across AI platforms",
] as const

const agenciesBullets = [
  "Multi-client dashboard management",
  "White-label monthly reports ready to share",
  "Team collaboration & role-based access",
] as const

export function BrandsAgenciesSection() {
  return (
    <section
      id="brands-agencies"
      className="bg-[#eef3ff] py-16 md:py-20 lg:py-[6.25rem]"
      aria-labelledby="brands-agencies-heading"
    >
      <Container>
        <SectionHeading id="brands-agencies-heading">
          Designed For Ambitious Brands &amp; Agencies
        </SectionHeading>
        <Subheading className="mt-4 sm:mt-5">
          Clairon is built for growth leaders and agencies who can&apos;t afford
          to be invisible in AI results.
        </Subheading>

        <div className="mt-14 space-y-16 md:mt-16 md:space-y-20 lg:space-y-24">
          {/* Row 1 — image left, copy right */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200/60 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]">
              <Image
                src="/assets/img1.png"
                alt="Team collaborating with a laptop in a bright office"
                fill
                className="object-cover object-bottom"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col gap-5 lg:max-w-xl lg:justify-center">
              <h3
                className={cn(
                  "text-2xl leading-[1.1] tracking-[-0.02em] capitalize text-[#03020B] md:text-[28px]",
                  LANDING_HEADING_FONT
                )}
              >
                Built For Brands
              </h3>
              <p className={cn(LANDING_SUBHEADING_ON_LIGHT)}>
                See how you rank in AI answers, tighten your narrative, and ship
                content that earns citations — without losing your brand&apos;s
                voice.
              </p>
              <BulletList items={brandsBullets} />
              <ScheduleCallButton className="mt-2 w-full justify-center sm:w-fit" />
            </div>
          </div>

          {/* Row 2 — copy left, image right */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="flex flex-col gap-5 lg:max-w-xl lg:justify-center lg:pr-4">
              <h3
                className={cn(
                  "text-2xl leading-[1.1] tracking-[-0.02em] capitalize text-[#03020B] md:text-[28px]",
                  LANDING_HEADING_FONT
                )}
              >
                Built For Agencies
              </h3>
              <p className={cn(LANDING_SUBHEADING_ON_LIGHT)}>
                Run every client from one cockpit: white-label reporting, clear
                roles, and a workflow that scales as your book grows.
              </p>
              <BulletList items={agenciesBullets} />
              <ScheduleCallButton className="mt-2 w-full justify-center sm:w-fit" />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-200/60 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] lg:pl-0">
              <Image
                src="/assets/img2.png"
                alt="Team reviewing notes together by the window"
                fill
                className="object-cover object-bottom"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
