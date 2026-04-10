import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import { ChallengesCallout } from "./challenges-callout"
import { ChallengesVisual } from "./challenges-visual"

export function ChallengesSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-stretch lg:gap-10">
          <div className="min-w-0 max-w-none lg:flex lg:max-w-[480px] lg:flex-col lg:justify-center">
            <SectionHeading align="left" className="mb-6">
              The Challenges You
              <br />
              Face Today
            </SectionHeading>
            <Subheading align="left" className="mb-8">
              From setup to deployment, manage every part of your AI
              support workflow in one place. No code, no hassle—just
              powerful, human-like AI support.
            </Subheading>
            <ChallengesCallout />
          </div>

          <ChallengesVisual className="h-full min-h-[260px] w-full sm:min-h-[320px] md:min-h-[380px] lg:ml-5 xl:ml-7" />
        </div>
      </Container>
    </section>
  )
}
