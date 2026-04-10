"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const items = [
  {
    id: "monitor",
    title: "1. Monitor & Analyze",
    body: "Watch prompts, citations, and competitor moves in one place. Spot shifts early with live snapshots across the AI surfaces that matter.",
  },
  {
    id: "report",
    title: "2. Report & Act",
    body: "Turn data into clear, automated reports. Share insights with your team, prove impact, and act on missed opportunities with confidence.",
  },
  {
    id: "generate",
    title: "3. Generate & Grow",
    body: "Move from insight to shipped GEO content — briefs, articles, and updates tuned for how models talk about your brand.",
  },
] as const

export function TakeControlAccordion() {
  return (
    <Accordion
      multiple
      defaultValue={["monitor", "report", "generate"]}
      className="divide-y divide-[#e9edf2] rounded-[12px] border border-[#e9edf2] bg-[#f7f8fa]"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-0 px-0">
          <AccordionTrigger
            className={cn(
              "px-4 py-3.5 text-left text-[15px] font-semibold text-[#03020B] hover:no-underline sm:px-6 sm:py-4 sm:text-base md:text-[17px]",
              "data-[panel-open]:bg-[#f0f1f4]/80",
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
          <AccordionContent className="border-t border-[#e9edf2]/90 bg-white/90 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
            <p className="pt-4 text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
              {item.body}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
