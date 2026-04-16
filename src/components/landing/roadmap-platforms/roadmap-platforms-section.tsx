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
  {
    src: "/assets/icons/claude.svg",
    alt: "Claude",
    width: 94.23828887939453,
    height: 94.23828887939453,
    visualScale: 1,
  },
  {
    src: "/assets/icons/chatgpt.svg",
    alt: "ChatGPT",
    width: 80,
    height: 80,
    borderRadius: 10,
    visualScale: 1,
  },
  {
    src: "/assets/icons/perplexity.svg",
    alt: "Perplexity",
    width: 94.23828887939453,
    height: 94.23828887939453,
    visualScale: 1,
  },
  {
    src: "/assets/icons/gemini.svg",
    alt: "Gemini",
    width: 93.64435577392578,
    height: 94.23828887939453,
    borderRadius: 24,
    visualScale: 1,
  },
  {
    src: "/assets/icons/ask.svg",
    alt: "AI Overview",
    width: 334.4573974609375,
    height: 94.23828125,
    borderRadius: 24,
    visualScale: 1,
    fit: "cover",
  },
  {
    src: "/assets/icons/copilot.svg",
    alt: "Copilot",
    width: 94.23828887939453,
    height: 94.23828887939453,
    visualScale: 1,
  },
  {
    src: "/assets/icons/deepseek.svg",
    alt: "DeepSeek",
    width: 94.23828887939453,
    height: 94.23828887939453,
    visualScale: 1.08,
  },
  {
    src: "/assets/icons/orange.svg",
    alt: "Orange",
    width: 94.23828887939453,
    height: 94.23828887939453,
    visualScale: 1.33,
  },
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
    <div className="mt-12 w-full lg:mt-24">
      <div className="mx-auto flex w-full max-w-[1120px] px-4 md:px-6 flex-col gap-4 text-left md:flex-row md:items-end md:justify-start md:gap-8">
        <h3
          className={cn(
            LANDING_SECTION_HEADING_ON_LIGHT,
            "max-w-[20ch] text-balance text-[clamp(30px,3.2vw,52px)] leading-[1.08]"
          )}
        >
          We Cover Every Major AI Platform
        </h3>
        <p
          className={cn(
            LANDING_SUBHEADING_ON_LIGHT,
            "text-[clamp(15px,1.1vw,19px)] md:mb-2 md:whitespace-nowrap md:text-left"
          )}
        >
          Clairon monitors your presence across the AI platforms your buyers
          trust most.
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-[1120px] px-4 md:px-6">
        <div className="flex w-full justify-center">
          <div
            className="relative mx-auto inline-flex w-fit max-w-full flex-nowrap items-center justify-start xl:justify-center gap-4 px-4 md:px-6 overflow-x-auto overflow-y-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-12 lg:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0) 100%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-12 lg:block"
              style={{
                background:
                  "linear-gradient(to left, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0) 100%)",
              }}
              aria-hidden
            />
            {PLATFORM_ITEMS.map((item) => (
              <div
                key={item.src}
                className="flex-shrink-0 overflow-hidden"
                style={{
                  width: `${item.width}px`,
                  minWidth: `${item.width}px`,
                  maxWidth: `${item.width}px`,
                  height: `${item.height}px`,
                  minHeight: `${item.height}px`,
                  maxHeight: `${item.height}px`,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={cn(
                    "block h-full w-full",
                    item.fit === "cover" ? "object-cover" : "object-contain"
                  )}
                  style={{
                    ...(item.borderRadius ? { borderRadius: `${item.borderRadius}px` } : {}),
                    transform: `scale(${item.visualScale ?? 1})`,
                    transformOrigin: "center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



const SIDE_GUTTER = 24
const STEP_BODY_GAP_CLASS = "mt-3"

const STEP1_TOP = 0
const STEP1_LEFT = SIDE_GUTTER
const STEP2_TOP = STEP1_TOP + 164
const STEP2_RIGHT = 220
const STEP2_W = 380

const STEP3_TOP = STEP2_TOP + 220
const STEP3_LEFT = SIDE_GUTTER

const STEP4_TOP = STEP3_TOP + 210
const STEP4_RIGHT = 120
const STEP4_W = 420

const SVG2_OFFSET_X_LG = 145
const SVG2_OFFSET_X_XL = 180
const SVG2_TOP_LG = 134
const SVG2_TOP_XL = 158
const SVG3_LEFT = 0
const SVG3_LEFT_LG = 36
const SVG3_TOP_GAP = 16

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
        className="relative mt-20 hidden w-full overflow-visible lg:block"
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
            <div className="relative inline-block">
              <h3 className={roadmapStepTitleClassName}>{roadmapSteps[0].title}</h3>

              <div
                className="absolute"
                style={{
                  left: "100%",
                  top: -15,
                  transform: "none",
                  marginLeft: 12,
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <Svg1 />
              </div>
            </div>

            <p className={cn(STEP_BODY_GAP_CLASS, "max-w-[420px]", roadmapStepDescriptionClassName)}>
              {roadmapSteps[0].description}
            </p>
          </div>

          <div
            className="absolute -translate-x-12 xl:translate-x-0"
            style={{
              right: STEP2_RIGHT,
              top: STEP2_TOP,
              width: STEP2_W,
            }}
          >
            <h3
              className={cn(roadmapStepTitleClassName, "text-left")}
            >
              {roadmapSteps[1].title}
            </h3>
            <p
              className={cn(
                STEP_BODY_GAP_CLASS,
                "max-w-[320px] text-left",
                roadmapStepDescriptionClassName
              )}
            >
              {roadmapSteps[1].description}
            </p>

            <div
              className="absolute xl:hidden"
              style={{
                right: "100%",
                top: SVG2_TOP_LG,
                transform: `translateX(${SVG2_OFFSET_X_LG}px)`,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Svg2 />
            </div>
            <div
              className="absolute hidden xl:block"
              style={{
                right: "100%",
                top: SVG2_TOP_XL,
                transform: `translateX(${SVG2_OFFSET_X_XL}px)`,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Svg2 />
            </div>
          </div>

          <div
            className="absolute lg:-translate-y-4 xl:translate-y-0"
            style={{ left: STEP3_LEFT, top: STEP3_TOP }}
          >
            <h3
              className={roadmapStepTitleClassName}
            >
              {roadmapSteps[2].title}
            </h3>
            <p className={cn(STEP_BODY_GAP_CLASS, "max-w-[420px]", roadmapStepDescriptionClassName)}>
              {roadmapSteps[2].description}
            </p>

            <div
              className="absolute xl:hidden"
              style={{
                left: SVG3_LEFT_LG,
                top: "100%",
                marginTop: SVG3_TOP_GAP,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Svg3 />
            </div>

            <div
              className="absolute hidden xl:block"
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
            className="absolute text-left lg:-translate-y-4 xl:translate-y-0"
            style={{
              right: STEP4_RIGHT,
              top: STEP4_TOP,
              width: STEP4_W,
            }}
          >
            <h3 className={roadmapStepTitleClassName}>
              {roadmapSteps[3].title}
              <span className={cn(roadmapStepTitleClassName, "block")}>
                {roadmapSteps[3].description}
              </span>
              <span className={cn(roadmapStepTitleClassName, "block")}>XXX</span>
              <span className={cn(roadmapStepTitleClassName, "block")}>XX</span>
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