"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import {
  LANDING_HEADING_FONT,
  LANDING_SECTION_HEADING_CORE,
  LANDING_SUBHEADING_CORE,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { cn } from "@/lib/utils"
import type { FormEvent, ReactNode } from "react"

/** Gradient watermark — blue (#1D4ED8) → transparent, large caps “CLAIRON”. */
const WATERMARK_STYLES = `
.footer-clairon-watermark {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: clamp(5.5rem, 22vw, 14rem);
  line-height: 0.78;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  background: linear-gradient(
    180deg,
    #1d4ed8 0%,
    rgba(29, 78, 216, 0.55) 28%,
    rgba(29, 78, 216, 0.12) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
`

const footerMenu = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
] as const

const footerCompany = [
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing Plans", href: "#pricing" },
  { label: "404 Page", href: "/404" },
] as const

const footerSocial = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
] as const

const CONTACT_US_CTA_STYLE = {
  backgroundColor: "#0033FB",
  backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.22), 0 0 0 1px rgba(255,255,255,0.2), 0 1px 2px rgba(32,17,72,0.45)",
}

const SUBSCRIBE_CTA_STYLE = {
  backgroundColor: "#0033FB",
  backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.24), 0 0 0 1px rgba(255,255,255,0.24), 0 2px 6px rgba(32,17,72,0.28)",
}

function FooterInlineLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const className = cn(
    LANDING_SUBHEADING_FONT,
    "text-sm text-[#64748B] transition-colors hover:text-blue-600"
  )
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function FooterLinkList({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div>
      <p className={cn(LANDING_HEADING_FONT, "text-sm text-[#03020B]")}>
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <FooterInlineLink href={item.href}>{item.label}</FooterInlineLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CtaWaveGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[160px] w-full items-end justify-center overflow-visible sm:min-h-[200px] lg:min-h-[240px] lg:justify-end",
        className
      )}
      aria-hidden
    >
      <Image
        src="/assets/cta/cta.svg"
        alt=""
        width={336}
        height={232}
        className="h-auto w-[200px] max-w-full sm:w-[250px] md:w-[300px] lg:w-[336px]"
        unoptimized
      />
    </div>
  )
}

function PreFooterCta() {
  return (
    <div
      className={cn(
        "relative mx-auto w-full min-w-0 max-w-[1160px] min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[360px] md:min-h-[400px] lg:min-h-[432px] lg:rounded-[44px]",
        "px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
      )}
      style={{
        background:
          "radial-gradient(ellipse 78.32% 366.82% at 80.3% 32.46%, #001A81 0%, #001150 100%)",
      }}
    >
      <div className="relative z-[1] flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="min-w-0 max-w-xl lg:max-w-[min(100%,520px)]">
          <h2
            className={cn(
              LANDING_SECTION_HEADING_CORE,
              "max-w-xl text-balance text-left text-white"
            )}
          >
            Start Automating Your AEO Work Today With Clairon
          </h2>
          <p
            className={cn(
              LANDING_SUBHEADING_CORE,
              "mt-4 max-w-xl text-left text-white/85"
            )}
          >
            Say goodbye to repetitive tasks and hello to intelligent workflows.
            Build, deploy, and scale AI agents that move your business
            forward—no code required.
          </p>
          <Link
            href="#contact"
            className={cn(
              "mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-blue-500",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            )}
          >
            Check Your AI Visibility For Free
            <ArrowUpRight className="size-5 shrink-0" aria-hidden />
          </Link>
        </div>
        <CtaWaveGraphic className="shrink-0 lg:w-[42%]" />
      </div>
    </div>
  )
}

function ContactNewsletterStrip() {
  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div
      id="contact"
      className="scroll-mt-28 border-b border-slate-200 bg-white py-12 md:py-14 lg:py-16"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-lg">
          <SectionHeading as="h3" align="left" className="!max-w-lg">
            Contact Us Now
          </SectionHeading>
          <Subheading align="left" className="mt-2 !max-w-lg">
            Simplify Your Customer Relationships, Maximize Growth
          </Subheading>
          <Link
            href="mailto:clairon@gmail.com"
            className={cn(
              "mt-6 inline-flex h-14 min-w-[11.25rem] items-center justify-center gap-2.5 rounded-[1rem] border border-white/20 px-6 py-4 text-[1.03rem] font-semibold leading-none text-white transition-opacity hover:opacity-95",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033FB]"
            )}
            style={CONTACT_US_CTA_STYLE}
          >
            Contact Us
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm"
              aria-hidden
            >
              <ArrowRight className="size-3.5" strokeWidth={2.6} />
            </span>
          </Link>
        </div>

        <form
          className="w-full min-w-0 max-w-xl lg:max-w-md xl:max-w-xl"
          onSubmit={onSubscribe}
        >
          <label htmlFor="clairon-footer-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:relative sm:flex-row sm:items-center">
            <input
              id="clairon-footer-email"
              name="email"
              type="email"
              required
              placeholder="Enter email address"
              autoComplete="email"
              className={cn(
                "h-14 w-full min-w-0 rounded-full border border-slate-200 bg-white px-5 text-sm text-[#03020B] shadow-sm outline-none transition-[box-shadow,border-color]",
                "placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 sm:pl-6 sm:pr-[12rem]",
                "pr-5 sm:pr-[12rem]"
              )}
            />
            <button
              type="submit"
              className={cn(
                "flex h-[50px] w-full shrink-0 items-center justify-center gap-2 rounded-[1rem] border border-white/20 px-6 text-[1.03rem] font-semibold text-white transition-opacity hover:opacity-95 sm:absolute sm:right-1 sm:top-1/2 sm:h-[50px] sm:w-auto sm:-translate-y-1/2",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033FB]"
              )}
              style={SUBSCRIBE_CTA_STYLE}
            >
              Subscribe Now
              <span
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm"
                aria-hidden
              >
                <ArrowRight className="size-3.5" strokeWidth={2.6} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

/**
 * Clairon landing footer — reference layout: 4 columns, legal row, large gradient CLAIRON watermark.
 */
export function ClaironMotionFooter() {
  const year = new Date().getFullYear()

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: WATERMARK_STYLES }} />

      <footer className="relative bg-white">
        <Container className="pb-4 pt-4 md:pt-6">
          <PreFooterCta />
        </Container>

        <Container>
          <ContactNewsletterStrip />
        </Container>

        {/* Exact footer: grid → divider → legal → watermark */}
        <div className="border-t border-slate-200 bg-white">
          <Container className="py-14 md:py-16 lg:py-20">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              <div className="sm:col-span-2 lg:col-span-1">
                <Logo className="shrink-0" />
                <a
                  href="mailto:clairon@gmail.com"
                  className={cn(
                    "mt-6 flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-blue-600",
                    LANDING_SUBHEADING_FONT
                  )}
                >
                  <Mail className="size-4 shrink-0 text-[#1d4ed8]" aria-hidden />
                  clairon@gmail.com
                </a>
                <a
                  href="tel:+17045550127"
                  className={cn(
                    "mt-3 flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-blue-600",
                    LANDING_SUBHEADING_FONT
                  )}
                >
                  <Phone className="size-4 shrink-0 text-[#1d4ed8]" aria-hidden />
                  (704) 555-0127
                </a>
              </div>
              <FooterLinkList title="Menu" links={footerMenu} />
              <FooterLinkList title="Company" links={footerCompany} />
              <FooterLinkList title="Social Media" links={footerSocial} />
            </div>
          </Container>

          <div className="border-t border-slate-200" />

          <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p
              className={cn(
                LANDING_SUBHEADING_FONT,
                "text-sm text-[#64748B]"
              )}
            >
              Copyrights ©
              <span className="underline decoration-[#64748B] underline-offset-2">
                Clairon {year}
              </span>
            </p>
            <div
              className={cn(
                "flex flex-wrap gap-6 text-sm text-[#64748B] sm:justify-end",
                LANDING_SUBHEADING_FONT
              )}
            >
              <Link
                href="#privacy"
                className="transition-colors hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="transition-colors hover:text-blue-600"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </Container>

          {/* Watermark: extra height + overflow so “CLAIRON” reads clearly and crops at bottom */}
          <div
            className="relative min-h-[clamp(10rem,28vw,18rem)] overflow-hidden bg-white pb-6 pt-2 md:min-h-[14rem] md:pb-10"
            aria-hidden
          >
            <p
              className="footer-clairon-watermark absolute bottom-0 left-1/2 w-[115%] max-w-none -translate-x-1/2 translate-y-[18%] text-center md:translate-y-[22%]"
            >
              CLAIRON
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export const CinematicFooter = ClaironMotionFooter
