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
import type { CSSProperties } from "react"

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

const FAQ_CONTACT_BUTTON_STYLE: CSSProperties = {
  backgroundColor: "#0E121B",
  backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
  boxShadow:
    "inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 0 0 2px rgba(32, 17, 72, 0.15), 0 1px 2px rgba(32, 17, 72, 0.48)",
}

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
          className="overflow-hidden rounded-[18px] border border-[#E3E8F3] bg-[#F3F5FA] px-0 not-last:border-b-0"
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
                className="relative inline-flex size-9 shrink-0 items-center justify-center"
                aria-hidden
              >
                <span className="group-data-[panel-open]/accordion-trigger:hidden">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12H16M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#112544"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="hidden group-data-[panel-open]/accordion-trigger:inline">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#112544"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="bg-[#F3F5FA] px-5 pb-5 sm:px-6">
            <p className="pt-0 text-sm leading-relaxed text-[#4B5563] sm:text-[15px]">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

function FaqQuestionBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-20 w-20 shrink-0 drop-shadow-[0_4px_14px_rgba(0,51,250,0.22)] sm:h-24 sm:w-24",
        className
      )}
      aria-hidden
    >
      <path
        d="M47.0586 4.90234C70.2146 4.90234 89.2158 22.8963 89.2158 45.3604C89.2156 67.8242 70.2144 85.8174 47.0586 85.8174C44.3299 85.8206 41.6094 85.5687 38.9297 85.0654C37.9996 84.8908 37.4084 84.7801 36.9688 84.7197C36.6409 84.6695 36.3114 84.792 36.1875 84.8594C35.7385 85.0726 35.1402 85.39 34.2246 85.877C28.6101 88.8627 22.0591 89.9221 15.7412 88.7471C14.721 88.5573 13.8765 87.8432 13.5186 86.8691C13.1608 85.8952 13.3425 84.8051 13.9971 84C15.8315 81.7437 17.0925 79.0254 17.6504 76.0996C17.8013 75.295 17.4602 74.2011 16.4102 73.1348C9.2934 65.9081 4.90244 56.1354 4.90234 45.3604C4.90234 22.8964 23.9028 4.90249 47.0586 4.90234ZM47.0586 60.7852C44.8929 60.7853 43.1377 62.5413 43.1377 64.707C43.1378 66.8727 44.8929 68.6288 47.0586 68.6289H47.1055C49.2712 68.6289 51.0273 66.8728 51.0273 64.707C51.0273 62.5412 49.2713 60.7852 47.1055 60.7852H47.0586ZM47.0586 25.4912C41.0512 25.4913 35.2941 29.8745 35.2939 36.3076C35.2939 38.4734 37.05 40.2295 39.2158 40.2295C41.3816 40.2294 43.1377 38.4734 43.1377 36.3076C43.1379 35.1249 44.4032 33.3341 47.0586 33.334C49.7142 33.334 50.9803 35.1248 50.9805 36.3076C50.9805 36.7861 50.827 37.2643 50.4951 37.7178C50.0483 38.3282 49.4727 38.9805 48.7461 39.7744C48.6341 39.8968 48.5175 40.0238 48.3975 40.1543C47.7894 40.8155 47.093 41.5728 46.459 42.3389C45.0043 44.0966 43.1378 46.7351 43.1377 50.0977V51.8213C43.1377 53.987 44.8929 55.743 47.0586 55.7432C49.2244 55.7432 50.9805 53.9871 50.9805 51.8213V50.0977C50.9806 49.6524 51.2419 48.8602 52.501 47.3389C52.9924 46.7452 53.5228 46.1683 54.1279 45.5098C54.2588 45.3673 54.394 45.2204 54.5322 45.0693C55.2629 44.2711 56.0991 43.3412 56.8242 42.3506C58.0652 40.6552 58.8232 38.5743 58.8232 36.3076C58.8231 29.8744 53.066 25.4912 47.0586 25.4912Z"
        fill="#0033FB"
      />
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
          "mt-10 inline-flex h-14 min-w-[10.75rem] items-center justify-center gap-1.5 rounded-[1rem] border border-white/15 px-6 py-4 text-[1.03rem] font-medium text-white",
          "transition-opacity hover:opacity-90",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E121B]"
        )}
        style={FAQ_CONTACT_BUTTON_STYLE}
      >
        Contact Us
        <ChevronRight className="size-[0.95rem] shrink-0" strokeWidth={2.2} aria-hidden />
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
