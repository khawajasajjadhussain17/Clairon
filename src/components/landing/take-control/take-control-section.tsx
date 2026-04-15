import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import { TakeControlAccordion } from "./take-control-accordion"
import { TakeControlVisual } from "./take-control-visual"

export function TakeControlSection() {
  return (
    <section
      id="take-control"
      className="bg-white py-16 md:py-20 lg:py-[6.25rem]"
    >
      <Container>
        <SectionHeading>Take Control of AI Visibility</SectionHeading>
        <Subheading className="mt-4 sm:mt-5">
          See exactly how your brand shows up in AI, take action with data, and
          grow your visibility, all in one platform.
        </Subheading>
        <div className="mt-10 grid items-start gap-10 md:mt-12 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 lg:flex lg:flex-col lg:justify-center">
            <TakeControlAccordion />
          </div>
          <TakeControlVisual className="h-[min(72vw,380px)] min-h-[260px] shrink-0 sm:h-[min(68vw,420px)] sm:min-h-[300px] md:h-[460px] md:min-h-0 lg:h-[500px]" />
        </div>
      </Container>
    </section>
  )
}
