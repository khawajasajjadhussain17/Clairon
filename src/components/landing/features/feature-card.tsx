"use client"

import type { FeatureVisualIcon } from "@/lib/feature-icons"
import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { MapPin, Sparkles } from "lucide-react"
import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"

const FEATURE_SVG_ASSETS = {
  feacture1: { src: "/assets/feacture1.svg", width: 334, height: 256 },
  feacture2: { src: "/assets/feacture2.svg", width: 334, height: 256 },
  feacture3: { src: "/assets/feacture3.svg", width: 268, height: 191 },
} as const

const GRID7_ASSETS = {
  frame: { src: "/assets/grid7_1.svg", width: 334, height: 256 },
  globe: { src: "/assets/grid7_2.svg", width: 153, height: 151 },
} as const

const GRID8_SVG = {
  src: "/assets/grid8.svg",
  width: 268,
  height: 341,
} as const

const GRID9_ASSETS = {
  frame: { src: "/assets/grid_9_1.svg", width: 334, height: 256 },
  inner: { src: "/assets/grid_9_2.svg", width: 155, height: 155 },
} as const

function usesFeactureSvg(icon: FeatureVisualIcon): boolean {
  return icon === "feacture1" || icon === "feacture2" || icon === "feacture3"
}

/** Same fixed card shell as feacture row (416px, 60/40 split). */
function usesFixedFeatureLayout(icon: FeatureVisualIcon): boolean {
  return (
    usesFeactureSvg(icon) ||
    icon === "aiVisibility" ||
    icon === "knowCompetition" ||
    icon === "identifySources" ||
    icon === "grid7" ||
    icon === "grid8" ||
    icon === "grid9"
  )
}

/** Last row cards (7–9): shared background divider + slightly taller art band. */
function usesTrailingFeatureRow(icon: FeatureVisualIcon): boolean {
  return icon === "grid7" || icon === "grid8" || icon === "grid9"
}

/** Top ~60% of 416px card ≈ 250px; padding leaves ~200px for art (matches reference). */
function FeatureSvgGraphic({
  variant,
  title,
  compact,
}: {
  variant: keyof typeof FEATURE_SVG_ASSETS
  title: string
  compact?: boolean
}) {
  const asset = FEATURE_SVG_ASSETS[variant]
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center",
        compact ? "max-h-[200px] max-w-[280px]" : "max-w-[320px]"
      )}
    >
      <Image
        src={asset.src}
        alt={`${title} illustration`}
        width={asset.width}
        height={asset.height}
        className={cn(
          "h-auto w-full object-contain",
          compact && "max-h-[200px] object-contain"
        )}
        unoptimized
      />
    </div>
  )
}

/** Third card: `feacture3.svg` base, `f1.png` (files) above `f2.png` (text). */
function FeatureThirdCompositeGraphic({
  title,
  compact,
}: {
  title: string
  compact?: boolean
}) {
  const base = FEATURE_SVG_ASSETS.feacture3
  return (
    <div
      role="img"
      aria-label={`${title} illustration`}
      className={cn(
        "relative mx-auto flex items-center justify-center",
        compact ? "h-[200px] w-[280px]" : "min-h-[191px] w-full max-w-[320px]"
      )}
    >
      <Image
        src={base.src}
        alt=""
        width={base.width}
        height={base.height}
        className="absolute left-1/2 top-1/2 z-0 max-h-[88%] max-w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain"
        unoptimized
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1.5 px-3 pt-1 pb-2">
        <Image
          src="/assets/f1.png"
          alt=""
          width={220}
          height={120}
          className="max-h-[46%] w-auto max-w-[82%] shrink-0 object-contain drop-shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
          unoptimized
        />
        <Image
          src="/assets/f2.png"
          alt=""
          width={240}
          height={100}
          className="max-h-[40%] w-auto max-w-[88%] shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(15,23,42,0.06)]"
          unoptimized
        />
      </div>
    </div>
  )
}

/** Grid 7: `grid7_1.svg` white browser frame, `grid7_2.svg` globe centered in content area. */
function FeatureGrid7CompositeGraphic({
  title,
  compact,
}: {
  title: string
  compact?: boolean
}) {
  const { frame, globe } = GRID7_ASSETS
  return (
    <div
      role="img"
      aria-label={`${title} illustration`}
      className={cn(
        "relative mx-auto flex items-center justify-center",
        compact ? "h-[252px] w-[308px]" : "min-h-[252px] w-full max-w-[348px]"
      )}
    >
      <div className="absolute left-1/2 top-1/2 z-0 w-full max-w-[100%] -translate-x-1/2 -translate-y-1/2 scale-[1.085]">
        <Image
          src={frame.src}
          alt=""
          width={frame.width}
          height={frame.height}
          className="mx-auto max-h-[min(244px,100%)] w-auto max-w-[100%] object-contain drop-shadow-[0_16px_40px_-8px_rgba(99,102,241,0.2)]"
          unoptimized
        />
      </div>
      <Image
        src={globe.src}
        alt=""
        width={globe.width}
        height={globe.height}
        className="pointer-events-none absolute left-1/2 top-[56%] z-10 max-h-[min(56%,140px)] w-auto max-w-[min(56%,172px)] -translate-x-1/2 -translate-y-1/2 object-contain"
        unoptimized
      />
    </div>
  )
}

/** Grid 8: full `grid8.svg` (tall collaboration browser mock). */
function FeatureGrid8Graphic({
  title,
  compact,
}: {
  title: string
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex min-h-0 w-full max-w-full items-center justify-center",
        compact ? "h-full min-h-[200px] w-[296px] max-w-full" : "min-h-[220px] max-w-[328px]"
      )}
    >
      <Image
        src={GRID8_SVG.src}
        alt={`${title} illustration`}
        width={GRID8_SVG.width}
        height={GRID8_SVG.height}
        className="h-auto max-h-[224px] w-auto max-w-[min(96%,260px)] object-contain object-center drop-shadow-[0_16px_40px_-8px_rgba(99,102,241,0.18)]"
        unoptimized
      />
    </div>
  )
}

/** Grid 9: `grid_9_1.svg` frame, `grid_9_2.svg` centered, line just below Snoo circle. */
function FeatureGrid9CompositeGraphic({
  title,
  compact,
}: {
  title: string
  compact?: boolean
}) {
  const { frame, inner } = GRID9_ASSETS
  return (
    <div
      role="img"
      aria-label={`${title} illustration`}
      className={cn(
        "relative mx-auto flex items-center justify-center",
        compact ? "h-[236px] w-[304px]" : "min-h-[236px] w-full max-w-[344px]"
      )}
    >
      <Image
        src={frame.src}
        alt=""
        width={frame.width}
        height={frame.height}
        className="absolute left-1/2 top-1/2 z-0 max-h-[100%] max-w-[98%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_16px_40px_-8px_rgba(99,102,241,0.2)]"
        unoptimized
      />
      <Image
        src={inner.src}
        alt=""
        width={inner.width}
        height={inner.height}
        className="pointer-events-none absolute left-1/2 top-[52%] z-10 max-h-[min(50%,124px)] w-auto max-w-[min(50%,158px)] -translate-x-1/2 -translate-y-1/2 object-contain"
        unoptimized
      />
      {/* Below circular Reddit mark, inside window (reference) */}
      <div
        className="pointer-events-none absolute left-1/2 top-[78%] z-[11] h-[1.5px] w-[min(54%,152px)] -translate-x-1/2 rounded-full bg-[#CBD5E1]"
        aria-hidden
      />
    </div>
  )
}

export type { FeatureVisualIcon }

type FeatureCardProps = {
  title: string
  description: string
  icon: FeatureVisualIcon
  className?: string
}

function WindowBase({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative h-[180px] w-[260px] overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.05)]",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-50/30 px-6 py-5">
        <div className="flex gap-1.5">
          <div className="size-1.5 rounded-full bg-[#E2E8F0]" />
          <div className="size-1.5 rounded-full bg-[#E2E8F0]" />
          <div className="size-1.5 rounded-full bg-[#E2E8F0]" />
        </div>
        <div className="h-2 w-32 rounded-full bg-[#F1F5F9]" />
        <div className="size-1.5 rounded-full bg-[#E2E8F0]" />
      </div>
      {children}
    </div>
  )
}

function DashboardGraphic() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-[300px] w-16 -translate-x-32 rounded-full bg-blue-100/30" />
      <div className="absolute h-[300px] w-16 translate-x-32 rounded-full bg-blue-100/30" />
      <div className="absolute h-16 w-[400px] -translate-y-24 rounded-full bg-blue-100/30" />
      <div className="absolute h-16 w-[400px] translate-y-24 rounded-full bg-blue-100/30" />

      <WindowBase className="z-10 !h-[200px] !w-[280px] !rounded-[2.5rem]">
        <div className="-mt-2 flex h-full flex-col items-center justify-center space-y-3 p-6">
          <div className="h-4 w-20 rounded-full bg-[#7C9BFF]" />
          <div className="h-0.5 w-24 rounded-full bg-gray-100" />
          <div className="h-3 w-8 rounded-full bg-[#A5B4FC]" />

          <div className="mt-2 w-full rounded-[1.5rem] bg-[#F1F5F9] px-4 py-5">
            <p className="text-center text-[12px] leading-tight font-bold text-[#94A3B8]">
              Generate GEO
              <br />
              Article in one click
            </p>
          </div>
        </div>
      </WindowBase>
    </div>
  )
}

function PromptsGraphic() {
  return (
    <WindowBase>
      <div className="-mt-4 flex h-full items-center justify-center">
        <div className="relative size-20">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x = Math.cos(angle) * 28
            const y = Math.sin(angle) * 28
            const size = 4 + i * 0.6
            const baseOpacity = (i + 1) / 12
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `calc(50% + ${x}px - ${size / 2}px)`,
                  top: `calc(50% + ${y}px - ${size / 2}px)`,
                  opacity: baseOpacity,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [baseOpacity, 1, baseOpacity],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
              />
            )
          })}
        </div>
      </div>
    </WindowBase>
  )
}

function GEOGraphic() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -left-8 -top-8 h-32 w-48 rounded-[2rem] bg-blue-50/40" />
      <div className="flex h-[180px] w-[260px] flex-col rounded-[2rem] border border-white/60 bg-white p-6 shadow-lg">
        <div className="mb-6 flex gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
            <div className="size-5 rounded-md border-2 border-blue-500" />
          </div>
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-2.5 w-16 rounded-full bg-blue-500/20" />
            <div className="h-2 w-10 rounded-full bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center rounded-2xl bg-gray-50/50 p-5">
          <p className="text-sm leading-tight font-bold text-blue-900/60">
            Multiple
            <br />
            brands one
            <br />
            dashboard
          </p>
        </div>
      </div>
    </div>
  )
}

const AI_VISIBILITY_DOTS: readonly {
  top: string
  left: string
  size: number
  opacity: number
}[] = [
  { top: "10%", left: "12%", size: 4, opacity: 0.5 },
  { top: "22%", left: "38%", size: 3, opacity: 0.35 },
  { top: "18%", left: "62%", size: 2, opacity: 0.45 },
  { top: "38%", left: "8%", size: 3, opacity: 0.4 },
  { top: "48%", left: "28%", size: 5, opacity: 0.55 },
  { top: "42%", left: "52%", size: 2, opacity: 0.3 },
  { top: "58%", left: "18%", size: 3, opacity: 0.42 },
  { top: "68%", left: "42%", size: 4, opacity: 0.38 },
  { top: "72%", left: "65%", size: 2, opacity: 0.32 },
  { top: "28%", left: "78%", size: 3, opacity: 0.36 },
  { top: "55%", left: "72%", size: 2, opacity: 0.28 },
  { top: "14%", left: "48%", size: 2, opacity: 0.33 },
]

function AIVisibilityGraphic() {
  return (
    <div className="relative flex h-[200px] w-[280px] shrink-0 items-center justify-center">
      <div
        className="absolute top-1/2 left-[2px] z-0 h-[132px] w-[92px] -translate-y-1/2 rounded-[14px] border border-white/90 bg-white shadow-[0_10px_28px_rgba(99,102,241,0.11),0_2px_8px_rgba(15,23,42,0.04)]"
        aria-hidden
      />
      <div
        className="absolute top-1/2 right-[2px] z-0 h-[132px] w-[92px] -translate-y-1/2 rounded-[14px] border border-white/90 bg-white shadow-[0_10px_28px_rgba(99,102,241,0.11),0_2px_8px_rgba(15,23,42,0.04)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-[168px] w-[244px] overflow-hidden rounded-[16px] border border-white/95 bg-white shadow-[0_18px_50px_-10px_rgba(99,102,241,0.22),0_6px_16px_-4px_rgba(15,23,42,0.07)]">
        <div className="relative h-full w-1/2 overflow-hidden border-r border-[#DDD6FE] bg-white">
          {AI_VISIBILITY_DOTS.map((d, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-violet-500"
              style={{
                top: d.top,
                left: d.left,
                width: d.size,
                height: d.size,
                opacity: d.opacity,
              }}
              aria-hidden
            />
          ))}
        </div>
        <div className="flex h-full w-1/2 flex-col justify-center gap-2.5 bg-gradient-to-b from-slate-50/50 to-indigo-50/25 px-4 py-5">
          <div className="h-2 w-[92%] rounded-full bg-[#1e1b4b]/88" />
          <div className="h-2 w-[68%] rounded-full bg-[#6366f1]/75" />
          <div className="h-2 w-[84%] rounded-full bg-slate-200" />
          <div className="h-2 w-[52%] rounded-full bg-[#4338ca]/65" />
          <div className="h-2 w-[76%] rounded-full bg-[#818cf8]/55" />
          <div className="h-2 w-[40%] rounded-full bg-slate-200/90" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative flex size-[46px] items-center justify-center rounded-[10px] border-2 border-[#818CF8] bg-white shadow-[0_8px_20px_rgba(99,102,241,0.18)]">
            <div className="relative flex size-8 items-center justify-center rounded-full bg-white">
              <Sparkles
                className="size-[18px] text-violet-500"
                strokeWidth={1.75}
                aria-hidden
              />
              <Sparkles
                className="absolute -top-0.5 -right-0.5 size-2.5 text-violet-400"
                strokeWidth={2}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Grid 4: three stacked browser windows; foreground bubble + UI (no orange H avatar). */
function KnowCompetitionGraphic() {
  return (
    <div className="relative flex h-[200px] w-[280px] shrink-0 items-center justify-center">
      <div
        className="absolute top-[18px] left-0 z-0 w-[118px] scale-[0.88] opacity-[0.38]"
        aria-hidden
      >
        <div className="overflow-hidden rounded-[12px] border border-white/90 bg-white shadow-[0_8px_20px_rgba(99,102,241,0.1)]">
          <div className="flex items-center gap-1 border-b border-gray-100 px-2 py-1.5">
            <div className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-1 rounded-full bg-[#E5E7EB]" />
              ))}
            </div>
            <div className="h-1 flex-1 rounded-full bg-[#F3F4F6]" />
          </div>
          <div className="h-[72px] bg-gradient-to-b from-slate-50/80 to-white" />
        </div>
      </div>
      <div
        className="absolute top-[18px] right-0 z-0 w-[118px] scale-[0.88] opacity-[0.38]"
        aria-hidden
      >
        <div className="overflow-hidden rounded-[12px] border border-white/90 bg-white shadow-[0_8px_20px_rgba(99,102,241,0.1)]">
          <div className="flex items-center gap-1 border-b border-gray-100 px-2 py-1.5">
            <div className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-1 rounded-full bg-[#E5E7EB]" />
              ))}
            </div>
            <div className="h-1 flex-1 rounded-full bg-[#F3F4F6]" />
          </div>
          <div className="h-[72px] bg-gradient-to-b from-slate-50/80 to-white" />
        </div>
      </div>

      <div className="relative z-10 w-[204px] overflow-hidden rounded-[14px] border border-white/95 bg-white shadow-[0_16px_40px_-8px_rgba(99,102,241,0.2),0_4px_14px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-gray-100/90 px-3 py-2">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-1.5 rounded-full bg-[#E5E7EB]" />
            ))}
          </div>
          <div className="mx-2 h-1.5 max-w-[72px] flex-1 rounded-full bg-[#F3F4F6]" />
          <span className="size-1.5 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="space-y-2 px-2.5 pb-2.5 pt-2">
          <div className="relative flex h-[52px] items-center justify-center rounded-[10px] bg-[#F3F4F6]">
            <div className="rounded-md border-2 border-[#708DFF] bg-white px-2.5 py-1 shadow-sm">
              <span className="font-mono text-[11px] font-semibold tracking-tight text-[#708DFF]">
                &gt;_
              </span>
            </div>
            <Sparkles
              className="absolute top-1 right-2 size-3.5 text-[#708DFF]"
              strokeWidth={2}
              aria-hidden
            />
            <Sparkles
              className="absolute top-2.5 right-0.5 size-2 text-[#708DFF]/75"
              strokeWidth={2}
              aria-hidden
            />
          </div>
          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="h-2 w-[70%] rounded-full bg-[#708DFF]" />
              <div className="h-0.5 w-full rounded-full bg-[#E5E7EB]" />
              <div className="h-0.5 w-[80%] rounded-full bg-[#E5E7EB]" />
              <div className="h-2 w-[44%] rounded-full border border-[#A5B4FC] bg-white" />
            </div>
            <div className="h-11 w-[38%] shrink-0 rounded-lg bg-[#E5E7EB]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function TrackingGraphic() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -left-12 h-32 w-48 rounded-[2rem] bg-blue-50/40" />
      <div className="absolute -right-12 h-32 w-48 rounded-[2rem] bg-indigo-50/40" />

      <div className="relative flex h-[180px] w-[260px] overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-xl">
        <div className="relative w-1/2 border-r border-gray-50 p-6">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(#3b82f6 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>
        <div className="w-1/2 space-y-3 bg-gray-50/30 p-5">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex gap-2">
              <div
                className={cn(
                  "h-2 rounded-full",
                  i % 3 === 0
                    ? "w-full bg-blue-500/60"
                    : "w-2/3 bg-blue-200/40"
                )}
              />
              <div className="h-2 flex-1 rounded-full bg-gray-100" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex size-14 items-center justify-center rounded-full border border-gray-100 bg-white shadow-lg">
            <div className="text-2xl text-blue-400">✦</div>
            <div className="absolute top-3 right-3 text-xs text-blue-300">✦</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SourcesGraphic() {
  return (
    <WindowBase>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-16 rounded-full bg-blue-500/40" />
          <div className="flex size-6 items-center justify-center rounded-lg bg-blue-500/10">
            <MapPin className="size-3 text-blue-500" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex h-12 items-end rounded-lg border border-gray-100 bg-gray-50 p-2">
            <div className="h-3 w-4 rounded-sm bg-gray-200" />
          </div>
          <div className="flex h-12 items-end rounded-lg border border-gray-100 bg-gray-50 p-2">
            <div className="h-3 w-4 rounded-sm bg-gray-200" />
          </div>
        </div>
      </div>
    </WindowBase>
  )
}

function IdentifySourcesFolder({ label }: { label: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-md border border-white bg-white shadow-[0_1px_4px_rgba(15,23,42,0.06)]">
      <div className="relative z-[1] -mb-px ml-0.5 h-2 w-[18px] rounded-t border border-b-0 border-gray-200/90 bg-[#F9FAFB]" />
      <div className="grid min-h-[36px] flex-1 grid-cols-2 grid-rows-2 gap-px bg-gray-200/80 p-px">
        <div className="bg-white" />
        <div className="bg-white" />
        <div className="bg-white" />
        <div className="bg-white" />
      </div>
      <p className="px-0.5 pt-0.5 pb-1 text-center text-[5.5px] leading-[1.2] font-medium text-slate-400">
        {label}
      </p>
    </div>
  )
}

/** Grid 6: browser mock with map pin, folders, brand labels. */
function IdentifySourcesGraphic() {
  return (
    <div className="relative flex h-[200px] w-[280px] shrink-0 items-center justify-center">
      <div className="absolute top-1/2 left-1/2 h-[120%] w-10 -translate-x-[120%] -translate-y-1/2 rounded-full bg-indigo-200/12 blur-md" aria-hidden />
      <div className="absolute top-1/2 left-1/2 h-[120%] w-10 translate-x-[20%] -translate-y-1/2 rounded-full bg-indigo-200/12 blur-md" aria-hidden />

      <div className="relative z-10 w-[238px] overflow-hidden rounded-[14px] border border-white/95 bg-white shadow-[0_16px_44px_-10px_rgba(99,102,241,0.18),0_4px_14px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-gray-100/90 px-3 py-2">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-1.5 rounded-full bg-[#E5E7EB]" />
            ))}
          </div>
          <div className="mx-2 h-1.5 max-w-[100px] flex-1 rounded-full bg-[#F3F4F6]" />
          <span className="size-1.5 rounded-full bg-[#E5E7EB]" />
        </div>

        <div className="space-y-2 px-2.5 pb-2 pt-2">
          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="h-2.5 w-[56%] rounded-full bg-[#708DFF]" />
              <div className="h-px w-full rounded-full bg-[#E5E7EB]" />
              <div className="h-px w-[72%] rounded-full bg-[#E5E7EB]" />
              <div className="h-2 w-[36%] rounded-full bg-[#ACBDFF]" />
            </div>
            <div className="flex shrink-0 items-start gap-1">
              <div className="relative flex size-8 items-center justify-center rounded-md bg-[#F3F4F6]">
                <MapPin className="size-[18px] text-[#708DFF]" strokeWidth={2} />
                <span
                  className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 text-[8px] leading-none text-white drop-shadow-[0_0_1.5px_rgb(112,141,255)]"
                  aria-hidden
                >
                  ✦
                </span>
              </div>
              <div className="h-14 w-5 shrink-0 rounded-md bg-[#E5E7EB]" />
            </div>
          </div>

          <div className="rounded-lg bg-[#F3F4F6] p-1.5">
            <div className="flex gap-1.5">
              <IdentifySourcesFolder label="Brand 1: ∞ Gbs files" />
              <IdentifySourcesFolder label="Brand 2: ∞ Gbs files" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorldwideGraphic() {
  return (
    <WindowBase>
      <div className="relative flex h-full items-center justify-center">
        <div className="relative size-24">
          <svg
            className="absolute inset-0 size-full"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#E0E7FF"
              strokeWidth="1"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="35"
              ry="15"
              fill="none"
              stroke="#E0E7FF"
              strokeWidth="1"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="15"
              ry="35"
              fill="none"
              stroke="#E0E7FF"
              strokeWidth="1"
            />
            <circle cx="20" cy="40" r="1.5" fill="#818CF8" />
            <circle cx="80" cy="60" r="1.5" fill="#818CF8" />
            <circle cx="50" cy="15" r="1.5" fill="#818CF8" />
            <circle cx="50" cy="85" r="1.5" fill="#818CF8" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-16 rounded-full bg-blue-500/10 blur-sm" />
          </div>
        </div>
      </div>
    </WindowBase>
  )
}

function TrackingThumbnail() {
  return (
    <div className="relative flex h-[75px] w-[110px] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
      <div className="relative w-1/2 border-r border-gray-50 p-2">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(#3b82f6 1.5px, transparent 1.5px)",
            backgroundSize: "8px 8px",
          }}
        />
      </div>
      <div className="w-1/2 space-y-1 bg-gray-50/30 p-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-1">
            <div
              className={cn(
                "h-1 rounded-full",
                i % 2 === 0 ? "w-full bg-blue-400" : "w-2/3 bg-blue-200"
              )}
            />
            <div className="h-1 flex-1 rounded-full bg-gray-100" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-7 items-center justify-center rounded-full border border-gray-50 bg-white shadow-sm">
          <div className="text-xs text-blue-400">✦</div>
        </div>
      </div>
    </div>
  )
}

function TextBlock() {
  return (
    <div className="space-y-2">
      <div className="h-2.5 w-14 rounded-full bg-[#7C9BFF]" />
      <div className="h-0.5 w-20 rounded-full bg-gray-100" />
      <div className="h-2 w-10 rounded-full border border-[#A5B4FC]/60" />
    </div>
  )
}

function GrayBox() {
  return <div className="h-[75px] w-[110px] rounded-2xl bg-[#F1F5F9]" />
}

function CollaborationGraphic() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-[340px] w-16 -translate-x-40 rounded-full bg-blue-100/30" />
      <div className="absolute h-[340px] w-16 translate-x-40 rounded-full bg-blue-100/30" />
      <div className="absolute h-16 w-[440px] -translate-y-32 rounded-full bg-blue-100/30" />
      <div className="absolute h-16 w-[440px] translate-y-32 rounded-full bg-blue-100/30" />

      <WindowBase className="z-10 !h-[340px] !w-[320px] !scale-[0.8] !rounded-[2.5rem]">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 p-8">
          <TrackingThumbnail />
          <div className="pt-4">
            <TextBlock />
          </div>
          <div className="pt-4">
            <TextBlock />
          </div>
          <GrayBox />
          <GrayBox />
          <div className="pt-4">
            <TextBlock />
          </div>
        </div>
      </WindowBase>
    </div>
  )
}

function RedditGraphic() {
  return (
    <WindowBase>
      <div className="-mt-4 flex h-full items-center justify-center">
        <div className="relative flex size-20 items-center justify-center rounded-full bg-blue-500/5">
          <svg
            className="size-12 text-blue-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.04.21.06.427.06.646 0 2.734-3.075 4.957-6.868 4.957-3.793 0-6.868-2.223-6.868-4.957 0-.216.021-.43.059-.639a1.747 1.747 0 0 1-1.054-1.604c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.179.475 1.187-.85 2.824-1.411 4.633-1.497l.932-4.364c.027-.13.115-.241.244-.28l2.877.607c.226-.212.535-.344.876-.344zM8.503 11.803c-.692 0-1.254.562-1.254 1.254 0 .692.562 1.254 1.254 1.254.692 0 1.254-.562 1.254-1.254 0-.692-.562-1.254-1.254-1.254zm6.994 0c-.692 0-1.254.562-1.254 1.254 0 .692.562 1.254 1.254 1.254.692 0 1.254-.562 1.254-1.254 0-.692-.562-1.254-1.254-1.254zM12 17.254c-1.606 0-2.996-.81-3.54-1.978a.249.249 0 0 1 .418-.244c.433.874 1.574 1.472 3.122 1.472 1.547 0 2.689-.598 3.122-1.472a.249.249 0 0 1 .418.244c-.544 1.168-1.934 1.978-3.54 1.978z" />
          </svg>
        </div>
      </div>
    </WindowBase>
  )
}

function renderGraphic(
  icon: FeatureVisualIcon,
  title: string,
  feactureCompact?: boolean
) {
  switch (icon) {
    case "feacture1":
      return (
        <FeatureSvgGraphic
          variant="feacture1"
          title={title}
          compact={feactureCompact}
        />
      )
    case "feacture2":
      return (
        <FeatureSvgGraphic
          variant="feacture2"
          title={title}
          compact={feactureCompact}
        />
      )
    case "feacture3":
      return (
        <FeatureThirdCompositeGraphic
          title={title}
          compact={feactureCompact}
        />
      )
    case "grid7":
      return (
        <FeatureGrid7CompositeGraphic
          title={title}
          compact={feactureCompact}
        />
      )
    case "grid8":
      return (
        <FeatureGrid8Graphic title={title} compact={feactureCompact} />
      )
    case "grid9":
      return (
        <FeatureGrid9CompositeGraphic
          title={title}
          compact={feactureCompact}
        />
      )
    case "dashboard":
      return <DashboardGraphic />
    case "prompts":
      return <PromptsGraphic />
    case "geo":
      return <GEOGraphic />
    case "aiVisibility":
      return <AIVisibilityGraphic />
    case "knowCompetition":
      return <KnowCompetitionGraphic />
    case "identifySources":
      return <IdentifySourcesGraphic />
    case "tracking":
      return <TrackingGraphic />
    case "sources":
      return <SourcesGraphic />
    case "worldwide":
      return <WorldwideGraphic />
    case "collaboration":
      return <CollaborationGraphic />
    case "reddit":
      return <RedditGraphic />
    default:
      return null
  }
}

const FEATURE_CARD_SURFACE: CSSProperties = {
  /* Figma: top layer = white lift at bottom, bottom = #E8ECFF → #F1F4FF */
  backgroundImage: [
    "linear-gradient(180deg, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, 0.8) 100%)",
    "linear-gradient(180deg, #E8ECFF 0%, #F1F4FF 100%)",
  ].join(", "),
}

const BLUEPRINT_GRID_STYLE: CSSProperties = {
  backgroundImage: [
    "linear-gradient(to right, rgba(100, 116, 139, 0.09) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(100, 116, 139, 0.09) 1px, transparent 1px)",
    "radial-gradient(rgba(100, 116, 139, 0.45) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "24px 24px",
  maskImage:
    "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  const fixedLayout = usesFixedFeatureLayout(icon)
  const trailingRow = usesTrailingFeatureRow(icon)

  return (
    <article
      className={cn(
        "group relative mx-auto w-full max-w-[401.51px] overflow-hidden rounded-[17.84px] border-[1.49px] border-solid border-[#D7E0FF] transition-transform duration-500 hover:-translate-y-0.5",
        fixedLayout
          ? cn(
              "grid h-[416.38px]",
              trailingRow ? "grid-rows-[3.2fr_1.8fr]" : "grid-rows-[3fr_2fr]"
            )
          : "flex min-h-[416.38px] h-full flex-col",
        className
      )}
      style={FEATURE_CARD_SURFACE}
    >
      {/* Blueprint: dots + faint lines in upper ~60% (reference) */}
      <div
        className={cn(
          "pointer-events-none absolute top-0 right-0 left-0 overflow-hidden opacity-[0.28]",
          fixedLayout ? "h-[60%]" : "h-[min(58%,22rem)] sm:h-[min(55%,20rem)]"
        )}
        aria-hidden
      >
        <div className="absolute inset-0" style={BLUEPRINT_GRID_STYLE} />
      </div>

      {/* Faint horizontal rule behind art (~⅓ down) — grids 7–9 reference */}
      {trailingRow ? (
        <div
          className="pointer-events-none absolute top-[32%] right-6 left-6 z-[2] h-px bg-gradient-to-r from-transparent via-[#B8C5F0]/55 to-transparent"
          aria-hidden
        />
      ) : null}

      <div className="pointer-events-none absolute -top-20 -left-20 size-56 rounded-full bg-indigo-200/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-8 -right-16 size-48 rounded-full bg-blue-200/20 blur-3xl" />

      {fixedLayout ? (
        <>
          <div className="relative flex min-h-0 items-center justify-center overflow-visible px-8 pt-7 pb-2">
            <div className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              {renderGraphic(icon, title, true)}
            </div>
          </div>
          <div className="relative z-10 flex min-h-0 flex-col items-center justify-center px-8 pb-8 pt-0 text-center">
            <h3
              className={cn(
                "mb-2 max-w-[22ch] text-[21px] leading-snug tracking-tight sm:text-[23px]",
                LANDING_HEADING_FONT,
                trailingRow ? "text-[#1A1F36]" : "text-[#0f172a]"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "max-w-[300px] text-[15px] leading-relaxed sm:text-[16px]",
                LANDING_SUBHEADING_FONT,
                trailingRow ? "text-[#4F5B76]" : "text-slate-500"
              )}
            >
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="relative flex h-[min(300px,68vw)] items-center justify-center overflow-hidden px-5 pt-8 pb-2 sm:h-[min(320px,36vw)] sm:px-8 sm:pt-10">
            <div className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              {renderGraphic(icon, title)}
            </div>
          </div>
          <div className="relative z-10 flex flex-1 flex-col items-center px-6 pt-2 pb-9 text-center sm:px-10 sm:pb-10">
            <h3
              className={cn(
                "mb-3 max-w-[18ch] text-[21px] tracking-tight text-slate-900 sm:mb-4 sm:max-w-none sm:text-[24px]",
                LANDING_HEADING_FONT
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "max-w-[300px] text-[15px] leading-relaxed text-slate-500 sm:text-[16px]",
                LANDING_SUBHEADING_FONT
              )}
            >
              {description}
            </p>
          </div>
        </>
      )}
    </article>
  )
}
