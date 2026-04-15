"use client"

import Image from "next/image"

export function HeroGrid() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[-8px] z-0 h-[756px] w-[1392px] -translate-x-1/2 opacity-95"
      aria-hidden="true"
    >
      <Image
        src="/assets/hero.svg"
        alt=""
        width={1392}
        height={756}
        className="h-full w-full"
        priority
      />
    </div>
  )
}
