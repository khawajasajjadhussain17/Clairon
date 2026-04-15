import Image from "next/image"

export function HeroCard() {
  return (
    <div className="relative w-full min-w-0 max-w-[1000px] bg-transparent p-0 shadow-none">
      <div className="relative z-10 aspect-auto overflow-visible rounded-2xl bg-transparent p-0">
        <Image
          src="/assets/hero/image.svg"
          alt="Clairon Platform Dashboard"
          width={948}
          height={533}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, min(1000px, 80rem)"
          className="h-auto w-full"
          priority
          unoptimized
        />
      </div>
    </div>
  )
}

