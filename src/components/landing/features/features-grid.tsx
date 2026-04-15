"use client"

import { featureItems } from "@/lib/features-content"
import { motion } from "framer-motion"
import { FeatureCard } from "./feature-card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function FeaturesGrid() {
  return (
    <motion.div
      className="mt-12 grid justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {featureItems.map((f) => (
        <motion.div
          key={f.title}
          variants={item}
          className="w-full max-w-[min(100%,339px)] justify-self-center"
        >
          <FeatureCard
            title={f.title}
            description={f.description}
            icon={f.icon}
            className="h-full"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
