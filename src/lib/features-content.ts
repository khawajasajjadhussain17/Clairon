import type { FeatureVisualIcon } from "@/lib/feature-icons"

export const featureItems: readonly {
  title: string
  description: string
  icon: FeatureVisualIcon
}[] = [
  {
    title: "Multiple Brands, One Dashboard",
    description:
      "Track and optimise AI visibility across all your brands from one place.",
    icon: "feacture1",
  },
  {
    title: "Prompts Generation",
    description: "Stop wasting hours guessing which prompts matter.",
    icon: "feacture2",
  },
  {
    title: "Generate GEO articles in one click",
    description:
      "Generates branded, customisable PDF reports in under a minute.",
    icon: "feacture3",
  },
  {
    title: "Know Your Competition",
    description:
      "We reveal every brand mentioned, your ranking among them, and your share of AI visibility.",
    icon: "knowCompetition",
  },
  {
    title: "AI Visibility Tracking",
    description:
      "Clairon updates your brand's AI visibility daily, weekly, and monthly without manual checks.",
    icon: "aiVisibility",
  },
  {
    title: "Identify Sources",
    description:
      "Clairon shows you exactly which articles, websites, and platforms LLMs cite and learn from.",
    icon: "identifySources",
  },
  {
    title: "We are World Wide",
    description:
      "Track your visibility across more than 200+ countries worldwide.",
    icon: "grid7",
  },
  {
    title: "Collaboration Without Limits",
    description:
      "Manage your entire team in Clairon with role-based access and built-in collaboration.",
    icon: "grid8",
  },
  {
    title: "Reddit",
    description:
      "Track all the reddits important for your industry and generate full optimized answer.",
    icon: "grid9",
  },
] as const satisfies readonly {
  title: string
  description: string
  icon: FeatureVisualIcon
}[]
