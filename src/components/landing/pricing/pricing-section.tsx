"use client"

import { ArrowRightCircle, CheckCircle2, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
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

function HorizontalUnderbrace({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 112 20"
      className={cn("mx-auto h-5 w-[5.5rem] text-[#03020B]", className)}
      aria-hidden
    >
      <path
        d="M6 5 Q56 17 106 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  )
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
        "flex rounded-full border border-[#0033FA]/40 bg-[#E8EDFF] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
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
            "relative flex-1 rounded-full py-2.5 text-xs font-bold outline-none sm:py-3 sm:text-sm md:text-base",
            "focus-visible:ring-2 focus-visible:ring-[#0033FA]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8EDFF]"
          )}
        >
          {billing === b.id ? (
            <motion.div
              layoutId="pricing-billing-active"
              className="absolute inset-0 rounded-full bg-[#0033FA] shadow-sm"
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
            />
          ) : null}
          <span
            className={cn(
              "relative z-10 block",
              billing === b.id ? "text-white" : "text-[#0033FA]"
            )}
          >
            {b.label}
          </span>
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
  const { starterPerMonth, proPerMonth, badge } = usePlanPrices(billing)
  const [starterCredit, setStarterCredit] = useState(STARTER_CREDITS[0].value)
  const [proCredit, setProCredit] = useState(PRO_CREDITS[0].value)

  return (
    <section
      id="pricing"
      className="bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <SectionHeading
          id="pricing-heading"
          className="max-w-[min(100%,42rem)] text-balance px-1"
        >
          <>
            Being Invisible Is More
            <br />
            Expensive Than Clairon
          </>
        </SectionHeading>

        <div className="mx-auto mt-10 w-full max-w-6xl md:mt-14">
          <div className="relative mx-auto flex max-w-[52rem] flex-col items-center pb-20 md:flex-row md:items-start md:justify-center md:gap-2 md:pb-24 lg:gap-4">
            <div className="order-2 hidden min-w-0 shrink-0 items-center gap-0.5 pr-1 pt-2 md:order-1 md:flex lg:pt-2.5">
              <span className="text-right text-xs font-semibold text-[#03020B] sm:text-sm">
                Nothing
              </span>
              <span
                className="select-none font-sans text-[2.5rem] font-light leading-none text-[#03020B] sm:text-[2.75rem]"
                aria-hidden
              >
                {"{"}
              </span>
            </div>

            <div className="relative order-1 w-full min-w-0 max-w-md shrink md:order-2">
              <BillingPillStrip billing={billing} onChange={setBilling} />
              <div className="pointer-events-none absolute left-1/3 top-[calc(100%+0.25rem)] hidden w-1/3 px-1 md:block">
                <HorizontalUnderbrace />
                <p className="mx-auto mt-1 max-w-[9.5rem] text-center text-[10px] font-semibold leading-tight text-[#03020B] sm:text-[11px]">
                  <span className="block">10% discount &</span>
                  <span className="block">all credits upfront</span>
                </p>
              </div>
            </div>

            <div className="order-3 hidden min-w-0 shrink-0 items-center gap-0.5 pl-1 pt-2 md:flex lg:pt-2.5">
              <span
                className="select-none font-sans text-[2.5rem] font-light leading-none text-[#03020B] sm:text-[2.75rem]"
                aria-hidden
              >
                {"}"}
              </span>
              <span className="max-w-[6.75rem] text-left text-[10px] font-semibold leading-tight text-[#03020B] sm:max-w-[8.5rem] sm:text-[11px] lg:max-w-[9.5rem] lg:text-xs">
                <span className="block">20% discount &</span>
                <span className="block">all credits upfront</span>
              </span>
            </div>

            <div className="order-4 mt-8 grid w-full max-w-lg grid-cols-3 gap-2 px-1 text-center text-[10px] font-semibold leading-snug text-[#03020B] sm:text-[11px] md:hidden">
              <span className="self-start pt-0.5">Nothing</span>
              <span>
                <span className="block">10% discount &</span>
                <span className="block">all credits upfront</span>
              </span>
              <span>
                <span className="block">20% discount &</span>
                <span className="block">all credits upfront</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          <PricingCard
            title="Starter Plan"
            priceLine={
              <>
                <span
                  className={cn(
                    "text-3xl tracking-tight text-[#03020B] md:text-4xl",
                    LANDING_HEADING_FONT
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
            creditHint="1 credit = 1 prompt run. Credits roll over while your subscription is active."
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
                    className="inline-flex text-blue-600"
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
                  Daily / Weekly / Monthly
                </span>
              </>
            }
            features={[
              "Access to ChatGPT, Perplexity, Gemini, Claude",
              "Top 5 competitors tracked",
              "Unlimited prompts, countries & users",
              "Credit rollover",
            ]}
            ctaLabel="Check your AI visibility for free"
            ctaHref="#contact"
          />

          <PricingCard
            title="Pro Plan"
            priceLine={
              <>
                <span
                  className={cn(
                    "text-3xl tracking-tight text-[#03020B] md:text-4xl",
                    LANDING_HEADING_FONT
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
                {badge ? (
                  <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
                    {badge}
                  </span>
                ) : null}
              </>
            }
            creditValue={proCredit}
            onCreditChange={setProCredit}
            creditOptions={PRO_CREDITS}
            creditHint="Higher volume example: 100 prompt runs across 5 models ≈ 750 credits / month."
            featuresHeader={null}
            features={[
              "Everything in Starter",
              "Access to AI Overview, Grok, Copilot, Meta, Mistral",
              "Custom branding",
              "Slack support",
            ]}
            ctaLabel="Get started with Pro"
            ctaHref="#contact"
          />

          <PricingCard
            title="Enterprise Plan"
            priceLine={
              <span
                className={cn(
                  "text-3xl tracking-tight text-[#03020B] md:text-4xl",
                  LANDING_HEADING_FONT
                )}
              >
                Custom
              </span>
            }
            creditValue="custom"
            onCreditChange={() => {}}
            creditOptions={[{ value: "custom", label: "Custom credits / month" }]}
            creditHint="We tailor credits, SLAs, and integrations to your team."
            featuresHeader={null}
            features={[
              "Everything in Pro",
              "Personal onboarding",
              "Custom platform integrations",
              "Dedicated success manager",
              "24/7 priority support",
            ]}
            ctaLabel="Contact Sales"
            ctaHref="#contact"
          />
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
  creditHint: string
  featuresHeader: ReactNode | null
  features: string[]
  ctaLabel: string
  ctaHref: string
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
}: PricingCardProps) {
  const isEnterprise = creditOptions.length === 1 && creditOptions[0].value === "custom"

  return (
    <article
      className={cn(
        "group/card flex flex-col rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 md:p-8",
        "hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200/50",
        "focus-within:-translate-y-1 focus-within:border-blue-600 focus-within:shadow-xl focus-within:shadow-blue-200/50"
      )}
    >
      <h3
        className={cn(
          "text-lg transition-colors md:text-xl",
          LANDING_HEADING_FONT,
          "text-[#6b7280] group-hover/card:text-blue-600 group-focus-within/card:text-blue-600"
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
      <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">{creditHint}</p>

      <div className="my-6 h-px w-full bg-slate-200" />

      {featuresHeader ? (
        <div className="mb-4 text-sm">{featuresHeader}</div>
      ) : null}

      <ul className="flex flex-1 flex-col gap-3 text-sm text-[#374151]">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-blue-600"
              aria-hidden
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={cn(
          "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-transparent px-5 py-3 text-sm font-semibold text-blue-600 transition-colors",
          "group-hover/card:border-blue-600 group-hover/card:bg-blue-600 group-hover/card:text-white",
          "group-focus-within/card:border-blue-600 group-focus-within/card:bg-blue-600 group-focus-within/card:text-white",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        )}
      >
        {ctaLabel}
        <ArrowRightCircle className="size-5 shrink-0" aria-hidden />
      </a>
    </article>
  )
}
