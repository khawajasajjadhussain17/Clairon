import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import { Container } from "@/components/layout/container"
import {
  LANDING_HEADING_FONT,
  LANDING_SECTION_HEADING_ON_LIGHT,
  LANDING_SUBHEADING_ON_LIGHT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"
import Image from "next/image"

const CANVAS_W = 1440

const roadmapSteps = [
  {
    num: "001",
    title: "One-Click GEO Content Generation",
    description:
      "Turn any target prompt into a full GEO-optimised article in seconds. Clairon creates GEO-optimised content designed to make your brand visible where it currently isn't.",
  },
  {
    num: "002",
    title: "AI Ranking Difficulty Score",
    description:
      "Clairon assigns a difficulty score to every prompt, showing which opportunities are quick wins and which require more effort. Focus your resources where impact is highest.",
  },
  {
    num: "003",
    title: "On Page GEO Audit",
    description:
      "Clairon crawls any page of your website and gives you a GEO readiness score with a clear checklist. Spot missing schemas, test citations across LLMs, and know exactly what to improve.",
  },
  {
    num: "004",
    title: "Share Of Voice",
    description: "Brand Perception Radar",
  },
]

const PLATFORM_ITEMS = [
  { src: "/assets/claude.png", alt: "Claude" },
  { src: "/assets/chatgpt.png", alt: "ChatGPT" },
  { src: "/assets/grok.png", alt: "Grok" },
  { src: "/assets/gemini.png", alt: "Gemini" },
  { src: "/assets/ask.png", alt: "AI Overview", wide: true },
  { src: "/assets/copilot.png", alt: "Copilot" },
  { src: "/assets/grok1.png", alt: "DeepSeek" },
  { src: "/assets/a.png", alt: "Perplexity" },
  { src: "/assets/b.png", alt: "Mistral" },
]

function Svg1() {
  return (
    <Image
      src="/assets/1.svg"
      alt=""
      aria-hidden
      width={576}
      height={175}
      unoptimized
      className="block h-[175px] w-[576px] max-w-none"
    />
  )
}

function Svg2() {
  return (
    <Image
      src="/assets/2.svg"
      alt=""
      aria-hidden
      width={745}
      height={94}
      unoptimized
      className="block h-[94px] w-[745px] max-w-none"
    />
  )
}

function Svg3() {
  return (
    <Image
      src="/assets/3.svg"
      alt=""
      aria-hidden
      width={851}
      height={120}
      unoptimized
      className="block h-[120px] w-[851px] max-w-none"
    />
  )
}

function PlatformsCoverage() {
  return (
    <div className="mt-12 w-full lg:mt-24 text-left">
      <div className="flex flex-col gap-4">
        <h3
          className={cn(
            LANDING_SECTION_HEADING_ON_LIGHT,
            "max-w-[20ch] text-balance text-[clamp(30px,3.2vw,52px)] leading-[1.08] text-left"
          )}
        >
          We Cover Every Major AI Platform
        </h3>
        <p
          className={cn(
            LANDING_SUBHEADING_ON_LIGHT,
            "max-w-[560px] text-[clamp(15px,1.1vw,19px)] text-left"
          )}
        >
          Clairon monitors your presence across the AI platforms your buyers
          trust most.
        </p>
      </div>

      <div className="relative mt-8">
        <div className="relative w-fit max-w-full">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PLATFORM_ITEMS.map((item) => {
              if (item.wide) {
                return (
                  <div
                    key={item.src}
                    className="relative h-16 w-56 shrink-0 overflow-hidden"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )
              }

              return (
                <div
                  key={item.src}
                  className="relative size-16 shrink-0 overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              )
            })}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28"
            style={{
              background:
                "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
            style={{
              background:
                "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0) 100%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </div>
  )
}



const STEP1_LEFT = 24        

const STEP1_TOP = 0
const SVG1_H = 175
const STEP2_TOP = STEP1_TOP + (165 - 35) + 40
const STEP2_RIGHT = 240
const STEP4_RIGHT = 130
const STEP2_W = 460
const STEP3_TOP = STEP2_TOP + 64 + (85 - 9) + 62  
const STEP3_LEFT = 24
const SVG2_OFFSET_X = 260
const SVG2_OFFSET_Y = 18
const SVG3_LEFT = 0
const SVG3_TOP_GAP = 10

const STEP4_TOP = STEP3_TOP + 202
const STEP4_W = 420

const CANVAS_H = STEP3_TOP + 420
const roadmapStepTitleClassName = cn(
  LANDING_HEADING_FONT,
  "text-balance text-[clamp(20px,1.7vw,28px)] leading-[1.15] tracking-tight text-black"
)
const roadmapStepDescriptionClassName =
  "text-[clamp(12px,0.95vw,16px)] leading-relaxed text-slate-500"

export function RoadmapSection() {
  return (
    <section className="bg-white py-24">
      <Container>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading className={cn(LANDING_SECTION_HEADING_ON_LIGHT)}>
          What We Are Building Next
        </SectionHeading>
        <Subheading className={cn(LANDING_SUBHEADING_ON_LIGHT, "mt-5")}>
          We keep adding new features to keep your brand ahead in AI search.
        </Subheading>
      </div>

      <div className="mx-auto mt-12 w-full max-w-3xl lg:hidden">
        <div className="space-y-5">
          {roadmapSteps.map((step) => (
            <article
              key={step.num}
              className="rounded-2xl border border-[#E5E9F2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <div className="inline-flex rounded-full bg-[#EEF3FF] px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#0033FA]">
                {`{ ${step.num} }`}
              </div>
              <h3
                className={cn(
                  LANDING_HEADING_FONT,
                  "mt-3 text-[22px] leading-tight tracking-tight text-black sm:text-[24px]"
                )}
              >
                {step.title}
                {step.num === "004" ? (
                  <span
                    className={cn(
                      LANDING_HEADING_FONT,
                      "mt-1 block text-[22px] leading-tight tracking-tight text-black sm:text-[24px]"
                    )}
                  >
                    {step.description}
                  </span>
                ) : null}
              </h3>
              {step.num !== "004" ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
      <div
        className="relative mt-20 hidden w-full overflow-x-hidden overflow-y-visible lg:block"
        style={{
          minHeight: `calc(${CANVAS_H}px * min(1, (100vw - 48px) / ${CANVAS_W}))`,
        }}
      >
        <div
          className="mx-auto"
          style={{
            width: CANVAS_W,
            transform: `scale(min(1, calc((100vw - 48px) / ${CANVAS_W})))`,
            transformOrigin: "top center",
          }}
        >
          <div
            className="relative"
            style={{
              width: CANVAS_W,
              height: CANVAS_H,
            }}
          >
          <div
            className="absolute"
            style={{ left: STEP1_LEFT, top: STEP1_TOP }}
          >
            {/* Title */}
            <h3
              className={roadmapStepTitleClassName}
            >
              {roadmapSteps[0].title}
            </h3>

            <p className={cn("mt-3 max-w-[420px]", roadmapStepDescriptionClassName)}>
              {roadmapSteps[0].description}
            </p>

            <div
              className="absolute"
              style={{
                left: "100%",
                marginLeft: -10,
                top: 18 - 18,
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Svg1 />
            </div>
          </div>

          <div
            className="absolute"
            style={{
              right: STEP2_RIGHT,
              top: STEP2_TOP,
              width: STEP2_W,
            }}
          >
            <h3
              className={cn(roadmapStepTitleClassName, "text-center")}
            >
              {roadmapSteps[1].title}
            </h3>
            <p className={cn("mx-auto mt-3 max-w-[460px] text-center", roadmapStepDescriptionClassName)}>
              {roadmapSteps[1].description}
            </p>

            <div
              className="absolute"
              style={{
                right: "100%",
                top: "100%",
                marginTop: SVG2_OFFSET_Y,
                transform: `translateX(${SVG2_OFFSET_X}px)`,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Svg2 />
            </div>
          </div>

          <div
            className="absolute"
            style={{ left: STEP3_LEFT, top: STEP3_TOP }}
          >
            <h3
              className={roadmapStepTitleClassName}
            >
              {roadmapSteps[2].title}
            </h3>
            <p className={cn("mt-3 max-w-[420px]", roadmapStepDescriptionClassName)}>
              {roadmapSteps[2].description}
            </p>

            <div
              className="absolute"
              style={{
                left: SVG3_LEFT,
                top: "100%",
                marginTop: SVG3_TOP_GAP,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Svg3 />

            </div>
          </div>

          <div
            className="absolute text-left"
            style={{
              right: STEP4_RIGHT,
              top: STEP4_TOP,
              width: STEP4_W,
            }}
          >
            <h3 className={roadmapStepTitleClassName}>
              {roadmapSteps[3].title}
              <span className={cn(roadmapStepTitleClassName, "mt-1 block")}>
                {roadmapSteps[3].description}
              </span>
            </h3>
          </div>

          </div>
        </div>
      </div>

      <PlatformsCoverage />
      </Container>

    </section>
  )
}