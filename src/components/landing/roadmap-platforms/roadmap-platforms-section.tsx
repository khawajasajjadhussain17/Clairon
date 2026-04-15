import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import {
  LANDING_HEADING_FONT,
  LANDING_SECTION_HEADING_ON_LIGHT,
  LANDING_SUBHEADING_ON_LIGHT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

const CANVAS_W = 1200 

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

/* ─── inline SVGs ─────────────────────────────────────────────────────────── */

function Svg1() {
  /* dot1=(23,35) dot2=(514,165) label {001} near dot1, {002} near dot2 */
  return (
    <svg
      width="576"
      height="175"
      viewBox="0 0 576 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* dashed path: right then down */}
      <path
        d="M16.2 35.2H514.2V172.2"
        stroke="#0033FA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="20 20"
      />
      {/* dot1 */}
      <circle cx="23.2" cy="35.2" r="9" fill="#0033FA" />
      {/* dot2 */}
      <circle cx="514.2" cy="165.2" r="9" fill="#0033FA" />
      {/* {001} label */}
      <text
        x="23"
        y="21"
        textAnchor="middle"
        fontSize="11"
        fontFamily="monospace"
        fill="#0033FA"
        letterSpacing="1"
      >
        &#123; 001 &#125;
      </text>
      {/* {002} label */}
      <text
        x="535"
        y="163"
        textAnchor="start"
        fontSize="11"
        fontFamily="monospace"
        fill="#0033FA"
        letterSpacing="1"
      >
        &#123; 002 &#125;
      </text>
    </svg>
  )
}

function Svg2() {
  /* dot1=(735,9) top-right  dot2=(23,85) bottom-left  label {003} near dot2 */
  return (
    <svg
      width="745"
      height="94"
      viewBox="0 0 745 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M735.2 6V85H15.2"
        stroke="#E1E2E5"
        strokeWidth="3"
        strokeDasharray="20 20"
      />
      <circle cx="735.2" cy="9" r="9" fill="#E1E2E5" />
      <circle cx="23.2" cy="85" r="9" fill="#E1E2E5" />
      {/* {003} label above dot2 */}
      <text
        x="23"
        y="71"
        textAnchor="middle"
        fontSize="11"
        fontFamily="monospace"
        fill="#525866"
        letterSpacing="1"
      >
        &#123; 003 &#125;
      </text>
    </svg>
  )
}

function Svg3() {
  /* dot1=(9,9) top-left  dot2=(826,111) bottom-right  label {004} near dot2 */
  return (
    <svg
      width="851"
      height="120"
      viewBox="0 0 851 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M832 111L9 111L9 7"
        stroke="#DEE2E7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="20 20"
      />
      <circle cx="9" cy="9" r="9" fill="#E1E2E5" />
      <circle cx="826" cy="111" r="9" fill="#E1E2E5" />
      {/* {004} label above dot2 */}
      <text
        x="826"
        y="97"
        textAnchor="middle"
        fontSize="11"
        fontFamily="monospace"
        fill="#525866"
        letterSpacing="1"
      >
        &#123; 004 &#125;
      </text>
    </svg>
  )
}

function PlatformsCoverage() {
  return (
    <div className="mx-auto mt-28 w-full max-w-[1209px] px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h3
          className={cn(LANDING_SECTION_HEADING_ON_LIGHT, "max-w-[12ch] text-balance")}
        >
          We Cover Every Major AI Platform
        </h3>
        <p className={cn(LANDING_SUBHEADING_ON_LIGHT, "max-w-[560px] pb-1")}>
          Clairon monitors your presence across the AI platforms your buyers
          trust most.
        </p>
      </div>

      <div className="relative mt-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PLATFORM_ITEMS.map((item) => {
            if (item.wide) {
              return (
                <div
                  key={item.src}
                  className="relative h-[72px] w-[252px] shrink-0 overflow-hidden rounded-[22px] bg-[#F7F8FC] shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_6px_18px_rgba(15,23,42,0.06)]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
              )
            }

            return (
              <div
                key={item.src}
                className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[18px] bg-[#F7F8FC] shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_6px_18px_rgba(15,23,42,0.06)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
            )
          })}
        </div>

        {/* Edge fades: left + right */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-28"
          style={{
            background:
              "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-28"
          style={{
            background:
              "linear-gradient(270deg, #fff 0%, rgba(255,255,255,0) 100%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  )
}

/* ─── Layout constants (all in design-space px) ───────────────────────────── *
 *
 * The canvas top = 0.
 *
 * Step 1 title sits at y=0. Its dot is the left-end of SVG1 at (23, 35),
 * so SVG1 is placed with its top offset such that row y=35 of SVG1 aligns
 * with the vertical centre of the title (~18px from top → offset = 18-35 = -17).
 *
 * Step 2 block: SVG1 dot2 is at absolute (STEP1_LEFT + SVG1_W - 62, STEP1_TOP + 35 + 130)
 *   = step2 leading dot position. Step 2 title is right-aligned at x=1160.
 *
 * We just hard-code y positions derived from the SVG heights + logical gaps.
 */

const STEP1_LEFT = 64           // left padding

// SVG1: 576×175. Dot1 at (23,35), dot2 at (514,165)
// Step 1 title sits so its center-y ≈ SVG1.dot1.y → STEP1_TITLE_Y = 0
const STEP1_TOP = 0
const SVG1_H = 175

// Step 2 block: dot2 of SVG1 lands here
// SVG1 is placed starting at x = STEP1_LEFT + title_width ≈ but we place SVG1 to the right of title (left-full)
// We set Step 2 top = STEP1_TOP + SVG1.dot2.y - 35 (because dot1 is at y=35 aligned to title mid)
const STEP2_TOP = STEP1_TOP + (165 - 35) + 28   // ≈ 158 — clears {002} vs step 2 title
const STEP2_RIGHT = 64   // right padding (right-aligned)
const STEP2_W = 360

// SVG2: 745×94. dot1=(735,9) at Step2 right, dot2=(23,85) at Step3 left
// Step3 top = STEP2_TOP + STEP2 title height (≈64) + SVG2.dot2.y - SVG2.dot1.y
const STEP3_TOP = STEP2_TOP + 64 + (85 - 9) + 72  // gap after SVG2 (below step 2 copy); aligns step 3 with grey path
const STEP3_LEFT = 64

// SVG3: 851×120. dot1=(9,9) at Step3 left, dot2=(826,111)
// Step 4 is anchored directly from SVG3.dot2.y (exact SVG coordinate).
const STEP4_TOP = 98
const STEP4_W = 360

// Enough canvas to include Step 4 content after anchoring from SVG3.dot2.
const CANVAS_H = STEP3_TOP + 420
const roadmapStepTitleClassName = cn(
  LANDING_HEADING_FONT,
  "whitespace-nowrap text-[28px] leading-tight tracking-tight text-black"
)

export function RoadmapSection() {
  return (
    <section className="bg-white py-24">

      {/* Heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading className={cn(LANDING_SECTION_HEADING_ON_LIGHT)}>
          What We Are Building Next
        </SectionHeading>
        <Subheading className={cn(LANDING_SUBHEADING_ON_LIGHT, "mt-5")}>
          We keep adding new features to keep your brand ahead in AI search.
        </Subheading>
      </div>

      {/* ── Mobile/Tablet: readable stacked roadmap cards */}
      <div className="mx-auto mt-12 w-full max-w-3xl px-6 lg:hidden">
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

      {/* ── Desktop canvas: design-space px, scales down as viewport narrows */}
      <div
        className="relative mt-20 hidden w-full overflow-hidden lg:block"
        style={{
          minHeight: `calc(${CANVAS_H}px * min(1, 100vw / ${CANVAS_W}))`,
        }}
      >
        <div
          className="mx-auto"
          style={{
            width: CANVAS_W,
            transform: `scale(min(1, calc(100vw / ${CANVAS_W})))`,
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

          {/* ════ STEP 1 ════════════════════════════════════════════ */}
          {/*
            Title block on the left.
            SVG1 is positioned absolutely to the right of the title block,
            with its y=35 row aligned to the title's vertical mid (~18px from top).
          */}
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

            <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-slate-500">
              {roadmapSteps[0].description}
            </p>

            {/* SVG1 — anchored so its dot1(y=35) aligns to title center(y≈18) */}
            <div
              className="absolute"
              style={{
                /* left-full: x = title width; margin pulls SVG so {001} has breathing room from title */
                left: "100%",
                marginLeft: -10,
                top: 18 - 35,   /* title-center-y(18) minus svg.dot1.y(35) */
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Svg1 />
            </div>
          </div>

          {/* ════ STEP 2 ════════════════════════════════════════════ */}
          {/*
            Right-aligned block.
            Its leading dot (SVG1.dot2 at relative x=514,y=165 within SVG1)
            becomes the connector between SVG1 and Step 2.
            SVG2 is left of the step block, anchored below the description (top: 100% + marginTop).
          */}
          <div
            className="absolute"
            style={{
              right: STEP2_RIGHT,
              top: STEP2_TOP,
              width: STEP2_W,
            }}
          >
            <h3
              className={roadmapStepTitleClassName}
            >
              {roadmapSteps[1].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {roadmapSteps[1].description}
            </p>

            {/* SVG2 — below title + description (top: 100% of step-2 block), hangs left */}
            <div
  className="absolute"
  style={{
    right: "100%",
    top: "100%",
    marginTop: 12,

    /* 🔥 KEY FIX */
    transform: "translateX(300px)",

    zIndex: 0,
    pointerEvents: "none",
  }}
>
  <Svg2 />
</div>
          </div>

          {/* ════ STEP 3 ════════════════════════════════════════════ */}
          {/*
            Left-aligned block.
            SVG2.dot2 is at absolute canvas coords ≈ (STEP2_LEFT - 745+23, STEP2_TOP+85).
            We put Step 3 there.
            SVG3 is anchored with dot1(9,9) at the title dot position then sweeps right.
          */}
          <div
            className="absolute"
            style={{ left: STEP3_LEFT, top: STEP3_TOP }}
          >
            <h3
              className={roadmapStepTitleClassName}
            >
              {roadmapSteps[2].title}
            </h3>
            <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-slate-500">
              {roadmapSteps[2].description}
            </p>

            <div
              className="absolute"
              style={{
                left: "50%",
                transform: "translateX(-5%)",
                top: "100%",
                marginTop: -3,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Svg3 />

              {/* Step 4 anchored to exact SVG3 dot2 (826,111). */}
              <div
                className="absolute text-left"
                style={{
                  left: 826 + 12,
                  top: STEP4_TOP,
                  width: STEP4_W,
                }}
              >
                <h3
                  className={roadmapStepTitleClassName}
                >
                  {roadmapSteps[3].title}
                  <span className={cn(roadmapStepTitleClassName, "mt-1 block")}>
                    {roadmapSteps[3].description}
                  </span>
                </h3>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>

      <PlatformsCoverage />

    </section>
  )
}