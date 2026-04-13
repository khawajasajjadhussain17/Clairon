"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { BadgeCheck } from "lucide-react"

const items = [
  {
    id: "monitor",
    title: "1. Monitor & Analyze",
    body: "Watch prompts, citations, and competitor moves in one place. Spot shifts early with live snapshots across the AI surfaces that matter.",
    features: [
      "Real-time AI visibility tracking",
      "Live citation monitoring across platforms",
      "Historical data and trend analysis"
    ]
  },
  {
    id: "report",
    title: "2. Report & Act",
    body: "Turn data into clear, automated reports. Share insights with your team, prove impact, and act on missed opportunities with confidence.",
    features: [
      "AI citation analysis and recommendations",
      "Automated PDF and shareable digital reports",
      "Competitor benchmarking across AI platforms"
    ]
  },
  {
    id: "generate",
    title: "3. Generate & Grow",
    body: "Move from insight to shipped GEO content — briefs, articles, and updates tuned for how models talk about your brand.",
    features: [
      "GEO-optimized content generation",
      "Brand-safe AI content briefs",
      "Multi-platform distribution tracking"
    ]
  },
] as const

export function TakeControlAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="report"
      className="flex flex-col gap-4"
    >
      {items.map((item) => (
        <AccordionItem 
          key={item.id} 
          value={item.id} 
          className="rounded-[20px] border border-[#f1f3f6] bg-[#f8f9fb] px-0 transition-all data-[state=open]:bg-white data-[state=open]:shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
        >
          <AccordionTrigger
            className={cn(
              "px-6 py-5 text-left text-[18px] font-bold text-[#03020B] hover:no-underline sm:text-[20px] md:text-[22px]",
              /* Circular chevron control on the right */
              "[&_[data-slot=accordion-trigger-icon]]:!ml-3 [&_[data-slot=accordion-trigger-icon]]:shrink-0",
              "[&_[data-slot=accordion-trigger-icon]]:!h-8 [&_[data-slot=accordion-trigger-icon]]:!w-8 [&_[data-slot=accordion-trigger-icon]]:rounded-full",
              "[&_[data-slot=accordion-trigger-icon]]:!border [&_[data-slot=accordion-trigger-icon]]:!border-[#e2e6ec] [&_[data-slot=accordion-trigger-icon]]:!bg-white [&_[data-slot=accordion-trigger-icon]]:!p-1.5",
              "[&_[data-slot=accordion-trigger-icon]]:!text-[#5c6570]",
              "[&_[data-slot=accordion-trigger-icon]]:shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            )}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-0">
            <div className="flex flex-col gap-5">
              <p className="text-[15px] leading-relaxed text-[#5c6570] sm:text-[16px]">
                {item.body}
              </p>
              
              <ul className="flex flex-col gap-3">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-11 w-full items-center gap-3 rounded-xl border-l-[3px] border-[#3B71FE] bg-[#f4f7ff] px-4 py-2 sm:h-12">
                      <BadgeCheck className="size-5 shrink-0 fill-[#3B71FE] text-white" />
                      <span className="text-[14px] font-semibold text-[#03020B] sm:text-[15px]">
                        {feature}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

