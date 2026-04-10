export type NavLinkItem = {
  label: string
  href: string
  /** Matches Figma: Home uses Gilroy-Bold; others use Gilroy-Medium */
  emphasis: "primary" | "default"
}

export const mainNavLinks: readonly NavLinkItem[] = [
  { label: "Home", href: "#top", emphasis: "primary" },
  { label: "How it Works", href: "#how-it-works", emphasis: "default" },
  { label: "Features", href: "#features", emphasis: "default" },
  { label: "Pricing", href: "#pricing", emphasis: "default" },
  { label: "Testimonials", href: "#testimonials", emphasis: "default" },
  { label: "Contact", href: "#contact", emphasis: "default" },
] as const
