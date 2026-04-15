import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import {
  LANDING_HEADING_FONT,
  LANDING_SECTION_HEADING_ON_LIGHT,
  LANDING_SUBHEADING_ON_LIGHT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

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
    <svg
      width="576"
      height="175"
      viewBox="0 0 576 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16.2 35.2H514.2V172.2"
        stroke="#0033FA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="20 20"
      />
      <circle cx="23.2" cy="35.2" r="9" fill="#0033FA" />
      <circle cx="514.2" cy="165.2" r="9" fill="#0033FA" />
      <text
        x="23"
        y="17"
        textAnchor="middle"
        dominantBaseline="hanging"
        fontSize="14"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fill="#0033FA"
      >
        {"{001}"}
      </text>
      <path d="M4.59201 14.9282C2.45868 15.0882 1.39201 14.1335 1.39201 12.0642V9.6002C1.39201 9.09886 1.28001 8.77353 1.05601 8.6242C0.832012 8.46419 0.480012 8.39486 1.2219e-05 8.41619V6.7362C0.480012 6.75753 0.832012 6.69353 1.05601 6.5442C1.28001 6.3842 1.39201 6.05353 1.39201 5.5522V3.08819C1.39201 1.02953 2.45868 0.0801945 4.59201 0.240194V1.90419C4.08001 1.8402 3.70668 1.89353 3.47201 2.06419C3.23735 2.23486 3.12001 2.5762 3.12001 3.08819V5.5522C3.12001 6.57619 2.77335 7.24819 2.08001 7.56819C2.77335 7.90953 3.12001 8.58686 3.12001 9.6002V12.0642C3.12001 12.5762 3.23735 12.9175 3.47201 13.0882C3.70668 13.2589 4.08001 13.3175 4.59201 13.2642V14.9282ZM17.1908 11.8242C16.4228 12.8802 15.3454 13.4082 13.9588 13.4082C12.5721 13.4082 11.4894 12.8802 10.7108 11.8242C9.94276 10.7682 9.55876 9.3602 9.55876 7.60019C9.55876 5.84019 9.94276 4.43219 10.7108 3.37619C11.4894 2.32019 12.5721 1.79219 13.9588 1.79219C15.3454 1.79219 16.4228 2.32019 17.1908 3.37619C17.9694 4.43219 18.3588 5.84019 18.3588 7.60019C18.3588 9.3602 17.9694 10.7682 17.1908 11.8242ZM13.9588 11.6162C14.7908 11.6162 15.4254 11.2695 15.8628 10.5762C16.3001 9.88286 16.5188 8.89086 16.5188 7.60019C16.5188 6.30953 16.3001 5.31753 15.8628 4.6242C15.4254 3.93086 14.7908 3.5842 13.9588 3.5842C13.1374 3.5842 12.5028 3.93086 12.0548 4.6242C11.6174 5.31753 11.3988 6.30953 11.3988 7.60019C11.3988 8.89086 11.6174 9.88286 12.0548 10.5762C12.5028 11.2695 13.1374 11.6162 13.9588 11.6162ZM27.2689 11.8242C26.5009 12.8802 25.4236 13.4082 24.0369 13.4082C22.6502 13.4082 21.5676 12.8802 20.7889 11.8242C20.0209 10.7682 19.6369 9.3602 19.6369 7.60019C19.6369 5.84019 20.0209 4.43219 20.7889 3.37619C21.5676 2.32019 22.6502 1.79219 24.0369 1.79219C25.4236 1.79219 26.5009 2.32019 27.2689 3.37619C28.0476 4.43219 28.4369 5.84019 28.4369 7.60019C28.4369 9.3602 28.0476 10.7682 27.2689 11.8242ZM24.0369 11.6162C24.8689 11.6162 25.5036 11.2695 25.9409 10.5762C26.3782 9.88286 26.5969 8.89086 26.5969 7.60019C26.5969 6.30953 26.3782 5.31753 25.9409 4.6242C25.5036 3.93086 24.8689 3.5842 24.0369 3.5842C23.2156 3.5842 22.5809 3.93086 22.1329 4.6242C21.6956 5.31753 21.4769 6.30953 21.4769 7.60019C21.4769 8.89086 21.6956 9.88286 22.1329 10.5762C22.5809 11.2695 23.2156 11.6162 24.0369 11.6162ZM31.9145 2.00019H33.5145V13.2002H31.6745V3.96819L29.4185 4.6082L28.9705 3.04019L31.9145 2.00019ZM39.0356 14.9282V13.2642C39.5476 13.3175 39.921 13.2589 40.1556 13.0882C40.3903 12.9175 40.5076 12.5762 40.5076 12.0642V9.6002C40.5076 8.58686 40.8543 7.90953 41.5476 7.56819C40.8543 7.24819 40.5076 6.57619 40.5076 5.5522V3.08819C40.5076 2.5762 40.3903 2.23486 40.1556 2.06419C39.921 1.89353 39.5476 1.8402 39.0356 1.90419V0.240194C41.169 0.0801945 42.2356 1.02953 42.2356 3.08819V5.5522C42.2356 6.05353 42.3476 6.3842 42.5716 6.5442C42.7956 6.69353 43.1476 6.75753 43.6276 6.7362V8.41619C43.1476 8.39486 42.7956 8.46419 42.5716 8.6242C42.3476 8.77353 42.2356 9.09886 42.2356 9.6002V12.0642C42.2356 14.1335 41.169 15.0882 39.0356 14.9282Z" fill="#0033FB"/>
      <path d="M533.592 172.928C531.459 173.088 530.392 172.134 530.392 170.064V167.6C530.392 167.099 530.28 166.774 530.056 166.624C529.832 166.464 529.48 166.395 529 166.416V164.736C529.48 164.758 529.832 164.694 530.056 164.544C530.28 164.384 530.392 164.054 530.392 163.552V161.088C530.392 159.03 531.459 158.08 533.592 158.24V159.904C533.08 159.84 532.707 159.894 532.472 160.064C532.237 160.235 532.12 160.576 532.12 161.088V163.552C532.12 164.576 531.773 165.248 531.08 165.568C531.773 165.91 532.12 166.587 532.12 167.6V170.064C532.12 170.576 532.237 170.918 532.472 171.088C532.707 171.259 533.08 171.318 533.592 171.264V172.928ZM546.191 169.824C545.423 170.88 544.345 171.408 542.959 171.408C541.572 171.408 540.489 170.88 539.711 169.824C538.943 168.768 538.559 167.36 538.559 165.6C538.559 163.84 538.943 162.432 539.711 161.376C540.489 160.32 541.572 159.792 542.959 159.792C544.345 159.792 545.423 160.32 546.191 161.376C546.969 162.432 547.359 163.84 547.359 165.6C547.359 167.36 546.969 168.768 546.191 169.824ZM542.959 169.616C543.791 169.616 544.425 169.27 544.863 168.576C545.3 167.883 545.519 166.891 545.519 165.6C545.519 164.31 545.3 163.318 544.863 162.624C544.425 161.931 543.791 161.584 542.959 161.584C542.137 161.584 541.503 161.931 541.055 162.624C540.617 163.318 540.399 164.31 540.399 165.6C540.399 166.891 540.617 167.883 541.055 168.576C541.503 169.27 542.137 169.616 542.959 169.616ZM556.269 169.824C555.501 170.88 554.424 171.408 553.037 171.408C551.65 171.408 550.568 170.88 549.789 169.824C549.021 168.768 548.637 167.36 548.637 165.6C548.637 163.84 549.021 162.432 549.789 161.376C550.568 160.32 551.65 159.792 553.037 159.792C554.424 159.792 555.501 160.32 556.269 161.376C557.048 162.432 557.437 163.84 557.437 165.6C557.437 167.36 557.048 168.768 556.269 169.824ZM553.037 169.616C553.869 169.616 554.504 169.27 554.941 168.576C555.378 167.883 555.597 166.891 555.597 165.6C555.597 164.31 555.378 163.318 554.941 162.624C554.504 161.931 553.869 161.584 553.037 161.584C552.216 161.584 551.581 161.931 551.133 162.624C550.696 163.318 550.477 164.31 550.477 165.6C550.477 166.891 550.696 167.883 551.133 168.576C551.581 169.27 552.216 169.616 553.037 169.616ZM558.337 171.2V169.76L562.241 165.776C563.19 164.827 563.665 164.006 563.665 163.312C563.665 162.768 563.499 162.347 563.169 162.048C562.849 161.739 562.438 161.584 561.937 161.584C560.998 161.584 560.305 162.048 559.857 162.976L558.305 162.064C558.657 161.318 559.153 160.752 559.793 160.368C560.433 159.984 561.142 159.792 561.921 159.792C562.902 159.792 563.745 160.102 564.449 160.72C565.153 161.339 565.505 162.182 565.505 163.248C565.505 164.39 564.87 165.606 563.601 166.896L561.073 169.424H565.713V171.2H558.337ZM570.629 172.928V171.264C571.141 171.318 571.515 171.259 571.749 171.088C571.984 170.918 572.101 170.576 572.101 170.064V167.6C572.101 166.587 572.448 165.91 573.141 165.568C572.448 165.248 572.101 164.576 572.101 163.552V161.088C572.101 160.576 571.984 160.235 571.749 160.064C571.515 159.894 571.141 159.84 570.629 159.904V158.24C572.763 158.08 573.829 159.03 573.829 161.088V163.552C573.829 164.054 573.941 164.384 574.165 164.544C574.389 164.694 574.741 164.758 575.221 164.736V166.416C574.741 166.395 574.389 166.464 574.165 166.624C573.941 166.774 573.829 167.099 573.829 167.6V170.064C573.829 172.134 572.763 173.088 570.629 172.928Z" fill="#0033FB"/>
    </svg>
  )
}

function Svg2() {
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
      <text
        x="23"
        y="67"
        textAnchor="middle"
        fontSize="14"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fill="#525866"
      >
        {"{003}"}
      </text>
    </svg>
  )
}

function Svg3() {
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
        fontSize="14"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fill="#525866"
      >
        {"{004}"}
      </text>
    </svg>
  )
}

function PlatformsCoverage() {
  return (
    <div className="mt-12 w-full px-8 sm:px-10 lg:mt-14 lg:pl-60 lg:pr-16 xl:pl-65 xl:pr-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-start md:gap-8">
        <h3
          className={cn(
            LANDING_SECTION_HEADING_ON_LIGHT,
            "max-w-[14ch] text-balance text-[clamp(30px,3.2vw,52px)] leading-[1.08] md:max-w-[12ch]"
          )}
        >
          We Cover Every Major AI Platform
        </h3>
        <p
          className={cn(
            LANDING_SUBHEADING_ON_LIGHT,
            "max-w-[560px] text-[clamp(15px,1.1vw,19px)] pb-1 lg:max-w-none lg:whitespace-nowrap"
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
const STEP2_TOP = STEP1_TOP + (165 - 35) + 28  
const STEP2_RIGHT = 240
const STEP4_RIGHT = 120
const STEP2_W = 460
const STEP3_TOP = STEP2_TOP + 64 + (85 - 9) + 62  
const STEP3_LEFT = 24

const STEP4_TOP = STEP3_TOP + 205
const STEP4_W = 330

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

      {/* Heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading className={cn(LANDING_SECTION_HEADING_ON_LIGHT)}>
          What We Are Building Next
        </SectionHeading>
        <Subheading className={cn(LANDING_SUBHEADING_ON_LIGHT, "mt-5")}>
          We keep adding new features to keep your brand ahead in AI search.
        </Subheading>
      </div>

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
                top: 18 - 35,  
                zIndex: 0,
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
    marginTop: 18,

    transform: "translateX(250px)",

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
                left: "50%",
                transform: "translateX(-14%)",
                top: "100%",
                marginTop: -3,
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

    </section>
  )
}