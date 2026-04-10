/**
 * Soft atmospheric layer: faint grid + blurred corner shapes (behind section content).
 */
export function FeaturesSectionDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      {/* Full-section grid — thin lines, very low contrast; fades toward center for readability */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,113,254,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,113,254,0.055)_1px,transparent_1px)] bg-[length:52px_52px] opacity-90 [mask-image:radial-gradient(ellipse_72%_65%_at_50%_42%,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.45)_52%,rgba(0,0,0,0.85)_100%)] [-webkit-mask-image:radial-gradient(ellipse_72%_65%_at_50%_42%,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.45)_52%,rgba(0,0,0,0.85)_100%)]"
      />

      {/* Top-left — large soft mass, bleeds past edge */}
      <div className="absolute -left-[18%] -top-[28%] h-[min(42rem,95vh)] w-[min(48rem,110vw)] rounded-[42%] bg-[radial-gradient(ellipse_at_35%_35%,rgba(220,232,255,0.52)_0%,rgba(236,242,255,0.28)_42%,rgba(255,255,255,0.06)_72%,transparent_100%)] blur-[68px] sm:-left-[12%] sm:-top-[22%] sm:blur-[80px]" />

      {/* Top-right */}
      <div className="absolute -right-[14%] -top-[20%] h-[min(38rem,88vh)] w-[min(44rem,100vw)] rounded-[48%] bg-[radial-gradient(ellipse_at_65%_30%,rgba(225,234,255,0.48)_0%,rgba(242,246,255,0.22)_48%,rgba(255,255,255,0.05)_70%,transparent_100%)] blur-[72px] sm:-right-[8%] sm:blur-[84px]" />

      {/* Bottom-left */}
      <div className="absolute -bottom-[32%] -left-[20%] h-[min(40rem,90vh)] w-[min(46rem,105vw)] rounded-[44%] bg-[radial-gradient(ellipse_at_40%_65%,rgba(216,228,255,0.45)_0%,rgba(237,242,255,0.2)_50%,rgba(255,255,255,0.04)_75%,transparent_100%)] blur-[76px] sm:-bottom-[26%] sm:-left-[14%] sm:blur-[88px]" />

      {/* Bottom-right */}
      <div className="absolute -bottom-[24%] -right-[16%] h-[min(36rem,85vh)] w-[min(42rem,98vw)] rounded-[46%] bg-[radial-gradient(ellipse_at_70%_60%,rgba(222,232,255,0.5)_0%,rgba(244,247,255,0.24)_46%,rgba(255,255,255,0.06)_68%,transparent_100%)] blur-[70px] sm:-bottom-[18%] sm:-right-[10%] sm:blur-[82px]" />
    </div>
  )
}
