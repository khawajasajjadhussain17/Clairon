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
  imageOffsetClass,
}: {
  icon: FeatureVisualIcon
  title: string
  isFirstCard?: boolean
  imageOffsetClass?: string
}) {
  const imageSrc =
    isFirstCard ? "/assets/feacturecard/feacture1.svg" : `/assets/feacturecard/${icon}.svg`

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[190px] w-full items-center justify-center p-2",
        isFirstCard && "overflow-hidden rounded-[16px]"
      )}
    >
      <Image
        src={imageSrc}
        alt={`${title} illustration`}
        width={isFirstCard ? 334 : 270}
        height={isFirstCard ? 256 : 208}
        className={cn(
          "h-auto max-h-[200px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]",
          isFirstCard && "max-h-[230px] object-contain",
          imageOffsetClass
        )}
        unoptimized
      />
    </div>
  )
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  // We'll keep the same layout for all cards now as they use the new SVGs
  const isTrailingRow = icon === "feacture7" || icon === "feacture8" || icon === "feacture9"
  const isFirstCard = icon === "feacture1"
  const isPromptsCard = icon === "feacture2"
  const usesDottedSvgBackground = icon === "feacture1" || icon === "feacture6"

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

      {/* Faint horizontal rule behind art for trailing row style */}
      {isTrailingRow && (
        <div
          className="pointer-events-none absolute top-[32%] right-6 left-6 z-[2] h-px bg-gradient-to-r from-transparent via-[#B8C5F0]/55 to-transparent"
          aria-hidden
        />
      )}

      <div className="pointer-events-none absolute -top-20 -left-20 size-56 rounded-full bg-indigo-200/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-8 -right-16 size-48 rounded-full bg-blue-200/20 blur-3xl" />

      {/* Graphic Section */}
      <div
        className={cn(
          "relative flex h-[214px] items-center justify-center overflow-visible px-6 pt-5 pb-1",
          isFirstCard && "h-[236px] pb-0"
        )}
      >
        <FeatureGraphic
          icon={icon}
          title={title}
          isFirstCard={isFirstCard}
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
