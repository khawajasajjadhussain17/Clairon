import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import { FeaturesSectionDecor } from "./features-section-decor"
import { FeaturesGrid } from "./features-grid"

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative isolate overflow-x-clip bg-[#f8f9fc] py-16 md:py-20 lg:py-[6.25rem]"
    >
      <FeaturesSectionDecor />
      <Container className="relative z-10">
        <SectionHeading>The Features That Make Us Unique</SectionHeading>
        <Subheading className="mt-4 sm:mt-5">
          Clairon equips you with everything to build, train, and seamlessly
          integrate your ideal AI agent into your existing systems.
        </Subheading>
        <FeaturesGrid />
      </Container>
    </section>
  )
}
