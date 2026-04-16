"use client"

import type { FeatureVisualIcon } from "@/lib/feature-icons"
import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { CSSProperties } from "react"

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

const FULL_BLEED_VISUAL_BASE: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgba(232,236,255,0.95) 0%, rgba(241,244,255,0.88) 58%, rgba(241,244,255,0.68) 100%)",
}

type FeatureCardProps = {
  title: string
  description: string
  icon: FeatureVisualIcon
  className?: string
}

function FeatureGraphic({
  icon,
  title,
  isFirstCard,
  isSixthCard,
  imageOffsetClass,
}: {
  icon: FeatureVisualIcon
  title: string
  isFirstCard?: boolean
  isSixthCard?: boolean
  imageOffsetClass?: string
}) {
  const imageSrc =
    isFirstCard ? "/assets/feacturecard/feacture1.svg" : `/assets/feacturecard/${icon}.svg`

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[190px] w-full items-center justify-center p-2",
        (isFirstCard || isSixthCard) && "overflow-hidden rounded-[16px] p-0"
      )}
    >
      {isFirstCard ? (
        <>
          <div className="absolute inset-0" style={FULL_BLEED_VISUAL_BASE} aria-hidden />
          <Image
            src={imageSrc}
            alt={`${title} illustration`}
            unoptimized
            sizes="(min-width: 1024px) 339px, (min-width: 640px) 50vw, 100vw"
            fill
            className={cn(
              "z-[1] transition-transform duration-700 group-hover:scale-[1.03]",
              "object-cover object-top"
            )}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-[#F1F4FF] via-[#F1F4FF]/85 to-transparent"
            aria-hidden
          />
        </>
      ) : isSixthCard ? (
        <div className="relative flex h-full w-full items-start justify-center pt-6 px-6">
          <div className="relative mx-auto w-[85%] max-w-[260px] rounded-[14px] border border-white/80 bg-white/80 shadow-[0_10px_28px_rgba(99,119,194,0.16)] backdrop-blur-[2px] p-3">
            <Image
              src={imageSrc}
              alt={`${title} illustration`}
              width={260}
              height={180}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              unoptimized
            />
          </div>

          {/* Bottom fade layer */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F1F4FF] via-[#F1F4FF]/80 to-transparent" />
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt={`${title} illustration`}
          width={270}
          height={208}
          className={cn(
            "h-auto max-h-[200px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]",
            imageOffsetClass
          )}
          unoptimized
        />
      )}
    </div>
  )
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  // We'll keep the same layout for all cards now as they use the new SVGs
  const isTrailingRow = icon === "feacture7" || icon === "feacture8" || icon === "feacture9"
  const isFirstCard = icon === "feacture1"
  const isSixthCard = icon === "feacture6"
  const isPromptsCard = icon === "feacture2"
  const usesDottedSvgBackground = icon === "feacture1"

  return (
    <article
      className={cn(
        "group relative mx-auto flex h-full min-h-[360px] w-full max-w-[339px] flex-col overflow-hidden rounded-[17.84px] border-[1.49px] border-solid border-[#D7E0FF] transition-transform duration-500 hover:-translate-y-0.5",
        className
      )}
      style={FEATURE_CARD_SURFACE}
    >
      {/* Blueprint dots for feature cards 1 and 6 */}
      {usesDottedSvgBackground && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[74%] overflow-hidden opacity-70"
          aria-hidden
        >
          <Image
            src="/assets/feacturecard/dotted-grid.svg"
            alt=""
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 340px, 100vw"
          />
        </div>
      )}

      {/* Subtle default blueprint for other cards */}
      {!usesDottedSvgBackground && (
        <div
          className="pointer-events-none absolute top-0 right-0 left-0 h-[60%] overflow-hidden opacity-[0.16]"
          aria-hidden
        >
          <div className="absolute inset-0" style={BLUEPRINT_GRID_STYLE} />
        </div>
      )}

      <div className="pointer-events-none absolute -top-20 -left-20 size-56 rounded-full bg-indigo-200/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-8 -right-16 size-48 rounded-full bg-blue-200/20 blur-3xl" />

      {/* Graphic Section */}
      <div
        className={cn(
          "relative flex h-[214px] items-center justify-center overflow-visible px-6 pt-5 pb-1",
          (isFirstCard || isSixthCard) && "h-[236px] overflow-hidden px-0 pt-0 pb-0"
        )}
      >
        <FeatureGraphic
          icon={icon}
          title={title}
          isFirstCard={isFirstCard}
          isSixthCard={isSixthCard}
          imageOffsetClass={isPromptsCard ? "translate-y-[12px]" : "translate-y-[6px]"}
        />
      </div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-7 pb-6 pt-1 text-center">
        <h3
          className={cn(
            "mb-2 max-w-[21ch] text-[16px] leading-[1.25] tracking-[-0.01em] sm:text-[17px]",
            LANDING_HEADING_FONT,
            isTrailingRow ? "text-[#222B4A]" : "text-[#222B4A]"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "max-w-[270px] text-[15px] leading-[1.35] tracking-[-0.005em] sm:text-[15px]",
            LANDING_SUBHEADING_FONT,
            isTrailingRow ? "text-[#5E6F8F]" : "text-[#5E6F8F]"
          )}
        >
          {description}
        </p>
      </div>
    </article>
  )
}
