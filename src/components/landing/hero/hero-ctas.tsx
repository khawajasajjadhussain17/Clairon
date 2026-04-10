import Link from "next/link"

export function HeroCtas() {
  return (
    <div className="flex w-full max-w-md flex-col items-stretch gap-3 font-sans sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
      <Link
        href="#start"
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DCE5ED] bg-[linear-gradient(360deg,#0F131C_0%,#465882_141.25%)] px-6 py-3 text-[15px] font-bold leading-[1.25] text-white no-underline shadow-[0px_1px_0px_0px_#1B1F2333] transition-colors hover:bg-[linear-gradient(360deg,#1B2332_0%,#556a9b_141.25%)] sm:w-auto"
      >
        Start for Free
      </Link>
      <Link
        href="#sales"
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-[15px] font-semibold leading-[1.25] text-[#03020B] no-underline transition-colors hover:bg-black/5 sm:w-auto"
      >
        Talk to sales
      </Link>
    </div>
  )
}
