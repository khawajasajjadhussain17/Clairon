import Image from "next/image"
import { ArrowRight } from "lucide-react"
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
        "inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#829BFF] bg-[#E6EBFF] px-8 py-[14px] text-center font-sans text-[18px] font-bold leading-none text-[#0033FA] shadow-sm transition hover:bg-[#d8e0ff] hover:shadow",
        className
      )}
    >
      Scheduled a Call
      <ArrowRight className="size-5 shrink-0 text-[#0033FA]" aria-hidden />
    </a>
  )
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-[14px]">
      {items.map((text) => (
        <li key={text} className={cn("flex items-start gap-3 text-[18px] font-semibold leading-[1.6] text-[#03020B]", LANDING_HEADING_FONT)}>
          <Image
            src="/assets/tick-circle.svg"
            alt=""
            width={26}
            height={26}
            className="mt-1.5 size-[26px] shrink-0"
            aria-hidden
          />
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
                  "text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] capitalize text-[#03020B] md:text-[40px]",
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
                  "text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] capitalize text-[#03020B] md:text-[40px]",
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
