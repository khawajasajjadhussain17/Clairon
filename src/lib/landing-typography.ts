import { cn } from "@/lib/utils"

/**
 * Global Gilroy utilities (see `globals.css` @layer components):
 *   LANDING_HEADING_FONT     → Gilroy SemiBold (600)
 *   LANDING_SUBHEADING_FONT  → Gilroy Medium (500)
 * Do not combine with `font-bold`, `font-semibold`, `font-medium`, or `font-normal` on the same node.
 */
export const LANDING_HEADING_FONT = "landing-heading"
export const LANDING_SUBHEADING_FONT = "landing-subheading"

/**
 * Section headings: Gilroy SemiBold (600), clamp size, capitalize.
 */
export const LANDING_SECTION_HEADING_CORE = cn(
  LANDING_HEADING_FONT,
  "text-[clamp(1.5rem,3.2vw+0.75rem,3.5rem)] capitalize leading-[1.1] tracking-[-0.02em]"
)

export const LANDING_SECTION_HEADING_ON_LIGHT = cn(
  LANDING_SECTION_HEADING_CORE,
  "text-[#03020B]"
)

/**
 * Subheadings: Gilroy Medium (500), 18px, relaxed line-height.
 */
export const LANDING_SUBHEADING_CORE = cn(
  LANDING_SUBHEADING_FONT,
  "text-[16px] leading-[1.6] tracking-normal sm:text-[17px] md:text-[18px]"
)

export const LANDING_SUBHEADING_ON_LIGHT = cn(
  LANDING_SUBHEADING_CORE,
  "text-[#6B7280]"
)
