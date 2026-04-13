import { Play } from "lucide-react"
import Image from "next/image"

export function HeroCard() {
  return (
    <div className="relative w-full min-w-0 max-w-[1000px] bg-transparent p-0 shadow-none">
      <div className="pointer-events-none absolute -bottom-[12%] left-1/2 z-[-1] h-[35%] w-[80%] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.6)_0%,rgba(59,130,246,0.25)_40%,transparent_70%)] blur-[100px]" />

      <div className="relative z-10 aspect-auto overflow-visible rounded-2xl bg-transparent p-0">
        <Image
          src="/assets/hero-section.png"
          alt="Clairon Platform Dashboard"
          width={1344}
          height={840}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, min(1000px, 80rem)"
          className="h-auto w-full rounded-2xl ring-1 ring-white/30 shadow-[0_24px_80px_-24px_rgba(37,99,235,0.35)] backdrop-blur-sm sm:rounded-[24px] sm:shadow-[0_40px_120px_-20px_rgba(37,99,235,0.35)]"
          priority
        />
      </div>
      <button
        type="button"
        className="absolute left-1/2 top-1/2 z-20 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-[20px] sm:size-20 md:size-[88px]"
        aria-label="Play product demo"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] sm:size-14 md:size-[60px]">
          <Play className="size-5 translate-x-0.5 fill-[#1B2432] text-[#1B2432] sm:size-6" />
        </span>
      </button>
    </div>
  )
}

