"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

const FAQ_ITEMS = [
  {
    id: "per-user",
    question: "Do you charge per user?",
    answer:
      "No. Clairon is priced by credits and plan tier, not seat count. Your whole team can collaborate under one subscription without paying extra per person.",
  },
  {
    id: "coding",
    question: "Do I need to know how to code to use it?",
    answer:
      "No code is required to get started. You can connect sources, run visibility checks, and act on insights from the dashboard. Developers can go deeper with APIs when you’re ready.",
  },
  {
    id: "trial",
    question: "Is there a free trial?",
    answer:
      "You can check your AI visibility for free to see how Clairon surfaces gaps and opportunities before you commit to a paid plan.",
  },
  {
    id: "platforms",
    question: "Which AI platforms do you support?",
    answer:
      "We cover major surfaces including ChatGPT, Gemini, Claude, Perplexity, AI Overview, Grok, Copilot, and more—so you can track visibility where your audience actually asks questions.",
  },
  {
    id: "billing",
    question: "How does billing work?",
    answer:
      "Choose monthly, quarterly, or yearly billing. Longer terms include a discount and credits upfront. Enterprise plans are customized to your volume and needs.",
  },
  {
    id: "data",
    question: "Is my data secure?",
    answer:
      "We follow industry-standard security practices for data in transit and at rest. Enterprise customers can discuss additional controls, SLAs, and compliance with our team.",
  },
] as const

const CONTACT_AVATARS = [
  { src: "/assets/guillermo.jpeg.png", alt: "Team member" },
  { src: "/assets/maayan.jpeg.png", alt: "Team member" },
  { src: "/assets/zeno.jpeg.png", alt: "Team member" },
] as const

function FaqAccordion() {
  return (
    <Accordion
      defaultValue={["per-user"]}
      className="flex flex-col gap-3"
    >
      {FAQ_ITEMS.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="rounded-2xl border border-slate-200/80 bg-slate-100/80 px-0 not-last:border-b-0 data-[open]:bg-slate-100"
        >
          <AccordionTrigger
            className={cn(
              "px-5 py-4 text-left text-base font-semibold text-[#03020B] hover:no-underline sm:px-6",
              "[&_[data-slot=accordion-trigger-icon]]:!hidden"
            )}
          >
            <span className="flex w-full items-center justify-between gap-4">
              <span className="min-w-0 leading-snug">{item.question}</span>
              <span
                className="relative inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-light text-slate-600 shadow-sm"
                aria-hidden
              >
                <span className="group-data-[panel-open]/accordion-trigger:hidden">
                  +
                </span>
                <span className="hidden group-data-[panel-open]/accordion-trigger:inline">
                  −
                </span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="border-t border-slate-200/60 bg-white/70 px-5 pb-5 sm:px-6">
            <p className="pt-4 text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

/** Circular chat bubble + bottom-left tail, #0033FA — matches FAQ CTA reference (~94×94). */
function FaqQuestionBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "size-[min(4.5rem,20vw)] shrink-0 drop-shadow-[0_4px_14px_rgba(0,51,250,0.22)] sm:size-[5.5rem] md:size-[5.875rem]",
        className
      )}
      aria-hidden
    >
      <circle cx="52" cy="40" r="31" fill="#0033FA" />
      <path d="M 18 82 L 33 56 L 44 62 Z" fill="#0033FA" />
      <text
        x="52"
        y="49"
        textAnchor="middle"
        fill="white"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "30px",
          fontWeight: 700,
        }}
      >
        ?
      </text>
    </svg>
  )
}

function FaqContactCard() {
  return (
    <aside
      className={cn(
        "mx-auto flex w-full max-w-[420px] flex-col items-center rounded-[28px] bg-[#F8FAFC] px-5 pb-10 pt-9 text-center sm:rounded-[36px] sm:px-8 sm:pb-12 sm:pt-10 md:rounded-[40px] md:px-10 md:pb-[52px] md:pt-11",
        "shadow-[0_1px_3px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.04)]",
        "lg:sticky lg:top-28 lg:mx-0 lg:max-w-[420px] lg:self-start"
      )}
    >
      <FaqQuestionBubbleIcon />

      <div className="mt-8 flex h-[76px] w-full items-center justify-center">
        {CONTACT_AVATARS.map((a, i) => {
          const isCenter = i === 1
          return (
            <Image
              key={a.src}
              src={a.src}
              alt={a.alt}
              width={isCenter ? 64 : 48}
              height={isCenter ? 64 : 48}
              className={cn(
                "rounded-full border-[2.5px] border-white object-cover shadow-[0_1px_4px_rgba(15,23,42,0.12)]",
                isCenter
                  ? "relative z-30 size-16 shrink-0"
                  : "relative z-10 size-12 shrink-0",
                i === 0 && "z-10 -mr-[22px]",
                i === 2 && "z-10 -ml-[22px]"
              )}
            />
          )
        })}
      </div>

      <h3
        className={cn(
          "mt-8 max-w-[280px] text-[22px] capitalize leading-[1.15] tracking-[-0.02em] text-[#03020B] sm:text-2xl",
          LANDING_HEADING_FONT
        )}
      >
        Still Have Any Questions?
      </h3>
      <p
        className={cn(
          "mx-auto mt-4 max-w-[300px] text-center text-[15px] leading-[1.65] text-[#4B5563] sm:text-base",
          LANDING_SUBHEADING_FONT
        )}
      >
        Can&apos;t find the answer you&apos;re looking for?
        <br />
        Please chat to our friendly team.
      </p>

      <a
        href="#contact"
        className={cn(
          "mt-10 inline-flex items-center gap-2 rounded-full bg-[#1F2937] px-8 py-3 text-sm font-semibold text-white",
          "shadow-[0_4px_14px_rgba(15,23,42,0.18)] transition-opacity hover:opacity-90",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2937]"
        )}
      >
        Contact Us
        <ChevronRight className="size-4 shrink-0" strokeWidth={2.5} aria-hidden />
      </a>
    </aside>
  )
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionHeading id="faq-heading" className="max-w-3xl">
          Your Most Frequently Asked Questions
        </SectionHeading>
        <Subheading className="mt-4 md:mt-5">
          Find the answer to your most common questions asked about Clairon
        </Subheading>

        <div className="mt-10 grid items-start gap-8 sm:mt-12 sm:gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <FaqAccordion />
          <FaqContactCard />
        </div>
      </Container>
    </section>
  )
}
