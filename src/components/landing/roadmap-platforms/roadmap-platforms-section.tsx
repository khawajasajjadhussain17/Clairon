"use client"

import Image from "next/image"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import {
  LANDING_HEADING_FONT,
  LANDING_SECTION_HEADING_ON_LIGHT,
  LANDING_SUBHEADING_ON_LIGHT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"

const roadmapSteps = [
  {
    id: "001",
    title: "One-Click GEO Content Generation",
    description:
      "Turn any target prompt into a full GEO-optimised article in seconds. Clairon creates GEO-optimised content designed to make your brand visible where it currently isn't.",
    accent: "blue" as const,
  },
  {
    id: "002",
    title: "AI Ranking Difficulty Score",
    description:
      "Clairon assigns a difficulty score to every prompt, showing which opportunities are quick wins and which require more effort. Focus your resources where impact is highest.",
    accent: "blue" as const,
  },
  {
    id: "003",
    title: "On Page GEO Audit",
    description:
      "Clairon crawls any page of your website and gives you an GEO readiness score with a clear checklist. Spot missing schemas, test citations across LLMs, and know exactly what to improve.",
    accent: "muted" as const,
  },
] as const

const futureItems = [
  "Share Of Voice",
  "Brand Perception Radar",
  "XXX",
  "XXXXXXX",
] as const

/**
 * Single row, left → right — matches “We Cover Every Major AI Platform” reference.
 * Assets: a ≈ Perplexity, grok1 ≈ DeepSeek whale, b ≈ Mistral gradient M.
 */
const PLATFORM_LOGOS = [
  { src: "/assets/claude.png", alt: "Claude" },
  { src: "/assets/chatgpt.png", alt: "ChatGPT" },
  { src: "/assets/a.png", alt: "Perplexity" },
  { src: "/assets/gemini.png", alt: "Google Gemini" },
  { src: "/assets/ask.png", alt: "AI Overview", wide: true },
  { src: "/assets/copilot.png", alt: "Microsoft Copilot" },
  { src: "/assets/grok.png", alt: "Grok" },
  { src: "/assets/grok1.png", alt: "DeepSeek" },
  { src: "/assets/b.png", alt: "Mistral" },
] as const

/** Roadmap step card titles (smaller than page section headings). */
const roadmapStepTitleClassName = cn(
  LANDING_HEADING_FONT,
  "text-xl capitalize leading-[1.2] tracking-[-0.01em] text-[#03020B] align-middle sm:text-2xl md:text-[28px] lg:text-[32px]"
)

const PATH_BLUE = "#0033FA"
const PATH_GREY = "#E5E5E5"
const PATH_STROKE_W = 2.5
const PATH_DASH = "12 12"

/** Wide zigzag. VB_H trims empty space below last node (dot ~723) so the chart doesn’t reserve a huge white band. */
const VB_W = 1000
const VB_H = 820
const X_LEFT = 105
const X_RIGHT = 895

/** Vertical legs, scaled with VB_H so geometry matches previous 1040-tall design without empty tail. */
const SEGMENT_V = 118
const ROW_DROP = 122

const Y_COORDS = {
  S1_START: 69,
  S1_END: 227,
  S2_START: 448,
} as const

const Y_004 = Y_COORDS.S2_START + ROW_DROP

function RoadmapPathsSvg() {
  const connectorY = Y_COORDS.S1_END + SEGMENT_V
  const lowerY = Y_004

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={`M ${X_LEFT} ${Y_COORDS.S1_START} H ${X_RIGHT} V ${Y_COORDS.S1_END}`}
        stroke={PATH_BLUE}
        strokeWidth={PATH_STROKE_W}
        strokeDasharray={PATH_DASH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M ${X_RIGHT} ${Y_COORDS.S1_END} V ${connectorY} H ${X_LEFT} V ${Y_COORDS.S2_START}`}
        stroke={PATH_GREY}
        strokeWidth={PATH_STROKE_W}
        strokeDasharray={PATH_DASH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M ${X_LEFT} ${Y_COORDS.S2_START} V ${lowerY} H ${X_RIGHT}`}
        stroke={PATH_GREY}
        strokeWidth={PATH_STROKE_W}
        strokeDasharray={PATH_DASH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RoadmapStepBlock({
  id,
  title,
  description,
  accent,
  x,
  y,
  align,
  badgePosition = "below",
  isFinal = false,
}: {
  id: string
  title: string
  description?: string
  accent: "blue" | "muted"
  x: number
  y: number
  align: "start" | "end"
  /** `above`: only 001 (left) — label over the path node. `below`: 002–004 — label under the dot. */
  badgePosition?: "above" | "below"
  isFinal?: boolean
}) {
  const isRight = align === "end"
  const isBlue = accent === "blue"

  const badgeClass = cn(
    "z-10 rounded-sm px-2 py-0.5 text-[10px] font-bold tracking-widest whitespace-nowrap",
    "bg-white",
    isBlue ? "text-[#0033FA]" : "text-slate-400"
  )

  const copyWidths =
    "w-[min(22rem,calc(100vw-4rem))] sm:w-[min(26rem,34vw)] md:max-w-lg lg:max-w-xl"

  return (
    <div
      className={cn(
        "absolute flex flex-col items-center",
        isFinal ? "z-20" : "z-10"
      )}
      style={{
        left: `${(x / VB_W) * 100}%`,
        top: `${(y / VB_H) * 100}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {isFinal ? (
        <div
          className={cn(
            "absolute left-full top-1/2 z-10 max-w-[min(22rem,calc(100vw-4rem))] sm:max-w-[min(26rem,34vw)] md:max-w-lg lg:max-w-xl",
            "ml-4 -translate-y-1/2 text-left sm:ml-5"
          )}
        >
          <h3 className={cn(roadmapStepTitleClassName)}>{title}</h3>
          <ul className="mt-4 space-y-1.5">
            {futureItems.slice(1).map((item) => (
              <li
                key={item}
                className={cn(
                  LANDING_HEADING_FONT,
                  "text-base capitalize leading-[1.2] tracking-[-0.01em] text-[#03020B] md:text-lg"
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Dot sits on SVG node (x,y); grid cell is only the dot so translate(-50%,-50%) stays aligned with the path. */}
      <div
        className={cn(
          "relative inline-grid shrink-0 place-items-center",
          badgePosition === "below" && !isFinal && "mb-8"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "col-start-1 row-start-1 inline-block size-3 rounded-full border-2 border-white",
            isBlue ? "bg-[#0033FA]" : "bg-slate-400"
          )}
        />
        {badgePosition === "above" ? (
          <span
            className={cn(
              badgeClass,
              "absolute bottom-full left-1/2 mb-2 -translate-x-1/2"
            )}
          >
            {"{ "}
            {id}
            {" }"}
          </span>
        ) : (
          <span
            className={cn(
              badgeClass,
              "absolute left-1/2 top-full mt-2 -translate-x-1/2"
            )}
          >
            {"{ "}
            {id}
            {" }"}
          </span>
        )}
      </div>

      {!isFinal ? (
        <div
          className={cn(
            "relative mt-4",
            copyWidths,
            "rounded-lg bg-white px-4 py-4",
            isRight ? "text-right" : "text-left"
          )}
        >
          <h3 className={cn(roadmapStepTitleClassName)}>{title}</h3>

          {description ? (
            <p className="mt-3 text-[13px] leading-relaxed text-[#6b7280] md:text-[14px]">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
const LOGO_TILE =
  "relative shrink-0 overflow-hidden rounded-[22px] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/75"
const LOGO_TILE_SIZE = "h-[4.75rem] w-[4.75rem] sm:h-[5.25rem] sm:w-[5.25rem]"

function LogoCloud() {
  return (
    <div className="mt-12 border-t border-slate-200/70 pt-12 md:mt-16 md:pt-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <h2
          id="platforms-heading"
          className={cn(
            LANDING_SECTION_HEADING_ON_LIGHT,
            "max-w-[min(100%,18ch)] shrink-0 text-left text-balance"
          )}
        >
          We Cover Every
          <br />
          Major AI Platform
        </h2>
        <p
          className={cn(
            LANDING_SUBHEADING_ON_LIGHT,
            "max-w-md text-left text-[#4B5563] lg:max-w-[min(100%,26rem)] lg:pb-0.5"
          )}
        >
          Clairon monitors your presence across the AI platforms your buyers
          trust most.
        </p>
      </div>

      <div className="mt-12 md:mt-14">
        <div
          className={cn(
            "flex flex-nowrap items-center gap-4 sm:gap-5 md:gap-6",
            "overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none]",
            "[&::-webkit-scrollbar]:hidden",
            "lg:justify-start"
          )}
        >
          {PLATFORM_LOGOS.map((logo) => {
            const isWide = "wide" in logo && logo.wide
            return (
              <div
                key={logo.src}
                className={cn(
                  isWide
                    ? "rounded-[26px] bg-[#FAFAFE] shadow-[0_10px_36px_rgba(15,23,42,0.11)] ring-1 ring-slate-200/85"
                    : LOGO_TILE,
                  isWide
                    ? "relative h-[4.75rem] w-[min(18rem,78vw)] shrink-0 overflow-hidden sm:h-[5.25rem] sm:w-[min(19rem,52vw)] lg:w-[min(19rem,22rem)]"
                    : LOGO_TILE_SIZE
                )}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes={
                    isWide
                      ? "(max-width:640px) 78vw, 304px"
                      : "(max-width:640px) 76px, 84px"
                  }
                  className={cn(
                    "object-contain",
                    isWide ? "px-4 py-2.5 sm:px-5" : "p-2 sm:p-2.5"
                  )}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function RoadmapPlatformsSection() {
  return (
    <section
      id="roadmap"
      className="bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="roadmap-heading"
    >
      <Container>
        <div className="text-center">
          <SectionHeading id="roadmap-heading">
            What We Are Building Next
          </SectionHeading>
          <Subheading className="mt-6 sm:mt-8">
            We keep adding new features to keep your brand ahead in AI search.
          </Subheading>
        </div>

        <div className="relative mt-20 md:mt-28 lg:mt-32">
          {/* Mobile + tablet: vertical timeline; large screens: zigzag SVG */}
          <div className="flex flex-col gap-10 md:gap-12 lg:hidden">
             {roadmapSteps.map((step) => (
              <div key={step.id} className="relative border-l-2 border-dashed border-slate-200 pl-6">
                <div className={cn(
                  "absolute -left-[1.35rem] top-0 size-2.5 rounded-full ring-4 ring-white",
                  step.accent === "blue" ? "bg-[#0033FA]" : "bg-slate-400"
                )} />
                <p className={cn(
                  "text-[10px] font-bold tracking-widest",
                  step.accent === "blue" ? "text-[#0033FA]" : "text-slate-400"
                )}>
                  {"{ "}{step.id}{" }"}
                </p>
                <h3 className={cn(roadmapStepTitleClassName, "mt-2")}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{step.description}</p>
              </div>
            ))}
            <div className="relative border-l-2 border-dashed border-slate-200 pl-6 opacity-60">
                <div className="absolute -left-[1.35rem] top-0 size-2.5 rounded-full bg-slate-400 ring-4 ring-white" />
                <p className="text-[10px] font-bold tracking-widest text-slate-400">{"{ 004 }"}</p>
                <ul className="mt-4 space-y-1">
                  {futureItems.map(item => <li key={item} className="text-lg font-bold text-slate-900">{item}</li>)}
                </ul>
            </div>
          </div>

          {/* Desktop: full container width, wide zigzag */}
          <div className="relative hidden w-full lg:block">
            <div className="relative isolate mx-auto aspect-[1000/820] w-full max-w-7xl overflow-visible pb-4 lg:px-0">
              <RoadmapPathsSvg />

              <RoadmapStepBlock
                {...roadmapSteps[0]}
                x={X_LEFT}
                y={Y_COORDS.S1_START}
                align="start"
                badgePosition="above"
              />
              <RoadmapStepBlock
                {...roadmapSteps[1]}
                x={X_RIGHT}
                y={Y_COORDS.S1_END}
                align="end"
              />
              <RoadmapStepBlock
                {...roadmapSteps[2]}
                x={X_LEFT}
                y={Y_COORDS.S2_START}
                align="start"
              />
              <RoadmapStepBlock
                id="004"
                title="Share Of Voice"
                accent="muted"
                x={X_RIGHT}
                y={Y_004}
                align="end"
                isFinal
              />

            </div>
          </div>
        </div>

        <LogoCloud />
      </Container>
    </section>
  )
}
