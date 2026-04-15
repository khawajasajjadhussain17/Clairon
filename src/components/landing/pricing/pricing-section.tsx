"use client"
import { HelpCircle } from "lucide-react"
import { useMemo, useState, type ReactNode } from "react"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

type Billing = "monthly" | "quarterly" | "yearly"

const BILLING: { id: Billing; label: string; note: string }[] = [
  { id: "monthly", label: "Monthly", note: "Nothing" },
  {
    id: "quarterly",
    label: "Quarterly",
    note: "10% discount & all credits upfront",
  },
  {
    id: "yearly",
    label: "Yearly",
    note: "20% discount & all credits upfront",
  },
]

function formatMoney(n: number) {
  return n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`
}

function BillingPillStrip({
  billing,
  onChange,
  className,
}: {
  billing: Billing
  onChange: (b: Billing) => void
  className?: string
}) {
  return (
    <div
      role="tablist"
      aria-label="Billing period"
      className={cn(
        "flex items-center justify-between gap-[10px] rounded-[14px] border border-[#7EA0FF] bg-white p-[8px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
        className
      )}
    >
      {BILLING.map((b) => (
        <button
          key={b.id}
          type="button"
          role="tab"
          aria-selected={billing === b.id}
          onClick={() => onChange(b.id)}
          className={cn(
            "relative inline-flex h-[36px] w-[103px] items-center justify-center rounded-[7px] px-4 py-2 text-[16px] font-[700] leading-5 tracking-[-0.5px] outline-none",
            billing === b.id
              ? "bg-[#0033FA] text-white shadow-[0_2px_8px_rgba(0,51,250,0.28)]"
              : "bg-[#E5EAFE] text-[#0033FA]",
            "focus-visible:ring-2 focus-visible:ring-[#0033FA]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8EDFF]"
          )}
          style={{ fontFamily: "var(--font-inter), var(--font-sans)" }}
        >
          <span className="relative z-10 block">{b.label}</span>
        </button>
      ))}
    </div>
  )
}

function usePlanPrices(billing: Billing) {
  return useMemo(() => {
    const discount = billing === "monthly" ? 0 : billing === "quarterly" ? 0.1 : 0.2
    const starter = 49
    const pro = 249
    return {
      discount,
      starterPerMonth: Math.round(starter * (1 - discount) * 100) / 100,
      proPerMonth: Math.round(pro * (1 - discount) * 100) / 100,
      badge: billing === "yearly" ? "-20%" : billing === "quarterly" ? "-10%" : null,
    }
  }, [billing])
}

type CreditOption = { value: string; label: string }

const STARTER_CREDITS: CreditOption[] = [
  { value: "490", label: "490 credits / month" },
  { value: "980", label: "980 credits / month" },
  { value: "1960", label: "1,960 credits / month" },
]

const PRO_CREDITS: CreditOption[] = [
  { value: "490", label: "490 credits / month" },
  { value: "2500", label: "2,500 credits / month" },
  { value: "5000", label: "5,000 credits / month" },
]

export function PricingSection() {
  const [billing, setBilling] = useState<Billing>("monthly")
  const { starterPerMonth, proPerMonth } = usePlanPrices(billing)
  const [starterCredit, setStarterCredit] = useState(STARTER_CREDITS[0].value)
  const [proCredit, setProCredit] = useState(PRO_CREDITS[0].value)

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      style={{
        background:
          "radial-gradient(78.32% 366.82% at 80.3% 32.46%, #001A81 0%, #001150 100%)",
      }}
      aria-labelledby="pricing-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(6,11,36,0.65)_0%,rgba(8,14,43,0)_36%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[64%] bg-[radial-gradient(ellipse_at_center,rgba(31,82,255,0.34)_0%,rgba(31,82,255,0.12)_40%,rgba(8,14,43,0)_76%)]"
      />
      <Container className="relative z-10">
        <SectionHeading
          id="pricing-heading"
          className="max-w-[min(100%,42rem)] text-balance px-1 !text-[#FFFFFF]"
        >
          <>
            Being Invisible Is More
            <br />
            Expensive Than Clairon
          </>
        </SectionHeading>

        <div className="mx-auto mt-10 w-full max-w-[860px] md:mt-14">
          <div className="mx-auto w-full max-w-[404.6px]">
            <BillingPillStrip billing={billing} onChange={setBilling} />
          </div>

          <div className="mx-auto mt-7 grid w-full max-w-[404.6px] grid-cols-3 gap-3 text-center">
            <p
              className="text-center text-[13px] font-normal leading-[120%] tracking-normal text-white/90"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Nothing
            </p>
            <p
              className="text-center text-[13px] font-normal leading-[120%] tracking-normal text-white/90"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              <span className="block">10% discount &</span>
              <span className="block">all credits upfront</span>
            </p>
            <div className="relative">
              <p
                className="text-center text-[13px] font-normal leading-[120%] tracking-normal text-white/90"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                <span className="block">20% discount &</span>
                <span className="block">all credits upfront</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-[1200px] lg:mt-16 lg:flex lg:items-start lg:justify-center lg:gap-0">
          <div className="lg:relative lg:z-10 lg:w-[33%] lg:translate-y-10">
            <PricingCard
              title="Starter Plan"
              priceLine={
                <>
                  <span
                    className={cn(
                      "text-[48px] leading-[40px] tracking-normal text-[#03020B] font-[700]"
                    )}
                  >
                    {formatMoney(starterPerMonth)}
                  </span>
                  <span
                    className={cn(
                      "text-lg text-[#6b7280]",
                      LANDING_SUBHEADING_FONT
                    )}
                  >
                    {" "}
                    / month
                  </span>
                </>
              }
              creditValue={starterCredit}
              onCreditChange={setStarterCredit}
              creditOptions={STARTER_CREDITS}
              creditHint={
                <>
                  <p className="whitespace-nowrap text-[14px] font-[600] leading-[160%] tracking-normal text-[#03020B]">
                    1 credit = 1 prompt run in 1 country on 1 AI platforms
                  </p>
                  <p className="mt-1 whitespace-nowrap text-[13px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                    5 prompts run in 2 countries on 2 AI platforms ={" "}
                    <span className="text-[13px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                      20 credits
                    </span>
                  </p>
                  <p className="mt-1 whitespace-nowrap text-[13px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                    10 prompts run in 3 countries on 3 AI platforms ={" "}
                    <span className="text-[13px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                      90 credits
                    </span>
                  </p>
                </>
              }
              featuresHeader={
                <>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 text-[#03020B]",
                      LANDING_HEADING_FONT
                    )}
                  >
                    Automated Prompt Monitoring
                    <span
                      className="inline-flex text-[#03020B]"
                      title="Choose how often we scan your prompts across platforms."
                    >
                      <HelpCircle className="size-4" aria-hidden />
                      <span className="sr-only">More info</span>
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block text-sm text-[#6b7280]",
                      LANDING_SUBHEADING_FONT
                    )}
                  >
                    Daily/Weekly/Monthly
                  </span>
                </>
              }
              features={[
                "Access to: ChatGPT, Perplexity, Gemini, Claude",
                "Incl. Top 5 Competitors & Sources (?)",
                "Unlimited prompts tracked",
                "Unlimited countries",
                "Unlimited users",
                "Credit Rollover",
              ]}
              ctaLabel="Check your AI visibility for free"
              ctaHref="#contact"
              ctaIconVariant="blue"
              className="min-h-[710px] rounded-[24px] lg:w-[404.6px] lg:px-4"
            />
          </div>

          <div className="lg:relative lg:z-20 lg:w-[34%]">
            <PricingCard
              title="Pro Plan"
              priceLine={
                <>
                  <span
                    className={cn(
                      "text-[48px] leading-[40px] tracking-normal text-[#03020B] font-[700]"
                    )}
                  >
                    {formatMoney(proPerMonth)}
                  </span>
                  <span
                    className={cn(
                      "text-lg text-[#6b7280]",
                      LANDING_SUBHEADING_FONT
                    )}
                  >
                    {" "}
                    / month
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full bg-[#0A52FF] px-2 py-0.5 text-xs font-bold text-white">
                    -20%
                  </span>
                </>
              }
              creditValue={proCredit}
              onCreditChange={setProCredit}
              creditOptions={PRO_CREDITS}
              creditHint={
                <>
                  <p className="text-[14px] font-[600] leading-[160%] tracking-normal text-[#03020B]">
                    1 credit = 1 prompt run in 1 country on 1 AI platforms
                  </p>
                  <p className="mt-1 whitespace-nowrap text-[14px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                    30 prompts run in 2 countries on 4 AI platforms = 240
                    <br />
                    <span className="block text-[14px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                      credits
                    </span>
                  </p>
                  <p className="mt-1 whitespace-nowrap text-[14px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                    100 prompts run in 3 countries on 5 AI platforms = 750
                    <br />
                    <span className="block text-[14px] font-[500] leading-[160%] tracking-normal text-[#4B5563]">
                      credits
                    </span>
                  </p>
                </>
              }
              featuresHeader={
                <>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 text-[#03020B]",
                      LANDING_HEADING_FONT
                    )}
                  >
                    Automated Prompt Monitoring
                    <span className="inline-flex text-[#03020B]">
                      <HelpCircle className="size-4" aria-hidden />
                      <span className="sr-only">More info</span>
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block text-sm text-[#6b7280]",
                      LANDING_SUBHEADING_FONT
                    )}
                  >
                    Daily/Weekly/Monthly
                  </span>
                </>
              }
              features={[
                "Everything in plan 1",
                "Access to: AI Overview, Grok, Copilot, Meta, Mistral",
                "Incl. All your Competitors & Sources (?)",
                "Custom Branding for Reports",
                "Slack Support",
              ]}
              ctaLabel="Check your AI visibility for free"
              ctaHref="#contact"
              featured
              ctaIconVariant="white"
              className="min-h-[780px]"
            />
          </div>

          <div className="lg:relative lg:z-10 lg:w-[33%] lg:translate-y-10">
            <PricingCard
              title="Enterprise Plan"
              priceLine={
                <span
                  className={cn(
                    "text-[48px] leading-[40px] tracking-normal text-[#03020B] font-[700]"
                  )}
                >
                  Custom
                </span>
              }
              creditValue="custom"
              onCreditChange={() => {}}
              creditOptions={[{ value: "custom", label: "Custom credits / month" }]}
              creditHint={
                <p className="whitespace-nowrap text-[20px] font-[600] leading-[140%] tracking-normal text-[#03020B]">
                  Custom number of credits
                </p>
              }
              featuresHeader={
                <>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 text-[#03020B]",
                      LANDING_HEADING_FONT
                    )}
                  >
                    Automated Prompt Monitoring
                    <span className="inline-flex text-[#03020B]">
                      <HelpCircle className="size-4" aria-hidden />
                      <span className="sr-only">More info</span>
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block text-sm text-[#6b7280]",
                      LANDING_SUBHEADING_FONT
                    )}
                  >
                    Daily/Weekly/Monthly
                  </span>
                </>
              }
              features={[
                "Everything in Pro Plan",
                "Personal onboarding & training",
                "Custom platform integrations",
                "Custom AI platform tracking",
                "Dedicated success manager",
                "24/7 priority support",
              ]}
              ctaLabel="Contact Sales"
              ctaHref="#contact"
              ctaIconVariant="blue"
              className="min-h-[700px] lg:px-4"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

type PricingCardProps = {
  title: string
  priceLine: ReactNode
  creditValue: string
  onCreditChange: (v: string) => void
  creditOptions: CreditOption[]
  creditHint: ReactNode
  featuresHeader: ReactNode | null
  features: string[]
  ctaLabel: string
  ctaHref: string
  featured?: boolean
  ctaIconVariant?: "blue" | "white"
  className?: string
}

function PricingCard({
  title,
  priceLine,
  creditValue,
  onCreditChange,
  creditOptions,
  creditHint,
  featuresHeader,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
  ctaIconVariant = "blue",
  className,
}: PricingCardProps) {
  const isEnterprise = creditOptions.length === 1 && creditOptions[0].value === "custom"

  return (
    <article
      className={cn(
        "group/card flex flex-col rounded-3xl border-2 bg-white p-6 shadow-sm transition-all duration-300 md:p-8",
        featured
          ? "border-[3px] border-[#0033FA] shadow-[0_12px_30px_rgba(0,51,251,0.18)] lg:-my-3 lg:min-h-[860px]"
          : "border-slate-200"
        ,
        className
      )}
    >
      <h3
        className={cn(
          "transition-colors align-middle",
          featured
            ? "bg-[linear-gradient(97.84deg,#0033FA_0.52%,#001877_100%)] bg-clip-text text-[32px] leading-[28px] font-[700] text-transparent"
            : "text-[18px] leading-[28px] font-[500] text-[#9C9C9C] group-hover/card:text-[#9C9C9C] group-focus-within/card:text-[#9C9C9C]"
        )}
      >
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-1 gap-y-1">{priceLine}</div>

      <label className="mt-5 block">
        <span className="sr-only">Credits per month</span>
        <select
          value={creditValue}
          disabled={isEnterprise}
          onChange={(e) => onCreditChange(e.target.value)}
          className={cn(
            "w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 pr-10 text-sm font-medium text-[#03020B]",
            "bg-[length:1rem_1rem] bg-[position:right_0.75rem_center] bg-no-repeat",
            "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30",
            isEnterprise && "cursor-default opacity-90"
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          }}
        >
          {creditOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <div className="mt-2 text-xs leading-relaxed text-[#03020B]">{creditHint}</div>

      <div className="my-6 h-px w-full bg-slate-200" />

      {featuresHeader ? (
        <div className="mb-4 text-sm">{featuresHeader}</div>
      ) : null}

      <ul className="flex flex-1 flex-col gap-3 text-sm text-[#374151]">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <span
              className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center"
              aria-hidden
            >
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.9599 0.491334C8.71278 -0.164259 9.83382 -0.164259 10.5867 0.491334L10.9184 0.780186C11.3585 1.16337 11.9439 1.33527 12.5213 1.25082L12.9565 1.18717C13.9443 1.04269 14.8874 1.64876 15.1663 2.60732L15.2892 3.02966C15.4522 3.58992 15.8518 4.05105 16.3831 4.29215L16.7837 4.4739C17.6928 4.8864 18.1585 5.90613 17.8749 6.86332L17.75 7.28505C17.5842 7.84451 17.671 8.44846 17.9877 8.93856L18.2264 9.30801C18.7682 10.1465 18.6086 11.2562 17.8526 11.9081L17.5194 12.1953C17.0775 12.5763 16.8241 13.1314 16.8255 13.7149L16.8266 14.1547C16.829 15.153 16.0949 16.0002 15.1064 16.1399L14.6708 16.2015C14.0931 16.2831 13.5798 16.613 13.2655 17.1046L13.0286 17.4752C12.4909 18.3164 11.4153 18.6322 10.5082 18.2153L10.1086 18.0316C9.57838 17.7879 8.96822 17.7879 8.43804 18.0316L8.03838 18.2153C7.1313 18.6322 6.05567 18.3164 5.51799 17.4752L5.28109 17.1046C4.96682 16.613 4.45352 16.2831 3.87576 16.2015L3.44023 16.1399C2.45173 16.0002 1.71761 15.153 1.72005 14.1547L1.72112 13.7149C1.72254 13.1314 1.46907 12.5763 1.02716 12.1953L0.694038 11.9081C-0.0620276 11.2562 -0.221568 10.1465 0.320206 9.30801L0.55891 8.93856C0.875568 8.44846 0.962403 7.84451 0.796649 7.28505L0.6717 6.86332C0.388111 5.90613 0.853804 4.8864 1.76291 4.4739L2.16346 4.29215C2.69482 4.05105 3.09439 3.58992 3.25742 3.02966L3.38031 2.60732C3.65923 1.64876 4.60231 1.04269 5.59011 1.18717L6.02534 1.25082C6.60269 1.33527 7.18814 1.16337 7.62818 0.780186L7.9599 0.491334Z" fill="#0033FB"/>
                <path d="M5.93982 10.5382C5.93982 10.5382 6.65411 10.5382 7.60649 12.2049C7.60649 12.2049 10.2535 7.83981 12.6065 6.9668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={cn(
          "mt-8 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl border px-5 py-4 text-sm font-semibold transition-opacity hover:opacity-90",
          featured
            ? "border-[#0033FB] bg-[#0033FB] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            : "border-[#0033FB] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] text-[#0033FB] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033FB]"
        )}
      >
        {ctaLabel}
        {ctaIconVariant === "blue" ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="shrink-0">
            <path d="M9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699C5.39759 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39759 18.3337 9.99996 18.3337Z" fill="#0033FA" stroke="#0033FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.08334 10H12.0833" stroke="#DEE2E7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.4167 12.5L12.9167 10L10.4167 7.5" stroke="#DEE2E7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="shrink-0">
            <path d="M9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699C5.39759 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39759 18.3337 9.99996 18.3337Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.08331 10H12.0833" stroke="#03020B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.4167 12.5L12.9167 10L10.4167 7.5" stroke="#03020B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </a>
    </article>
  )
}
