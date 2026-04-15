"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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
  font-size: clamp(7rem, 26vw, 17.25rem);
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

function FooterEmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-5 shrink-0 text-[#111827]"
      aria-hidden
    >
      <path
        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9965 11H16.0054"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 11H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99451 11H8.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FooterPhoneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-5 shrink-0 text-[#111827]"
      aria-hidden
    >
      <path
        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 9C22 5.13 18.87 2 15 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
        "relative mx-auto w-full min-w-0 max-w-[1160px] min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[360px] md:min-h-[390px] lg:min-h-[404px] lg:rounded-[44px]",
        "px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-10 lg:py-10"
      )}
      style={{
        background:
          "radial-gradient(ellipse 78.32% 366.82% at 80.3% 32.46%, #001A81 0%, #001150 100%)",
      }}
    >
      <div className="relative z-[1] flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="min-w-0 max-w-xl lg:max-w-[680px]">
          <h2
            className={cn(
              LANDING_SECTION_HEADING_CORE,
              "max-w-[680px] text-left text-white"
            )}
          >
            <span className="block lg:whitespace-nowrap">
              Start Automating Your AEO
            </span>
            <span className="block lg:whitespace-nowrap">
              Work Today With Clairon
            </span>
          </h2>
          <p
            className={cn(
              LANDING_SUBHEADING_CORE,
              "mt-4 max-w-[680px] text-left text-white/85"
            )}
          >
            <span className="block lg:whitespace-nowrap">
              Say goodbye to repetitive tasks and hello to intelligent workflows.
              Build, deploy,
            </span>
            <span className="block">
              and scale AI agents that move your business forward-no code
              required.
            </span>
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
        <CtaWaveGraphic className="shrink-0 lg:w-[40%]" />
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
                <Logo size="footer" className="shrink-0" />
                <a
                  href="mailto:clairon@gmail.com"
                  className={cn(
                    "mt-6 flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-blue-600",
                    LANDING_SUBHEADING_FONT
                  )}
                >
                  <FooterEmailIcon />
                  clairon@gmail.com
                </a>
                <a
                  href="tel:+17045550127"
                  className={cn(
                    "mt-3 flex items-center gap-2 text-sm text-[#64748B] transition-colors hover:text-blue-600",
                    LANDING_SUBHEADING_FONT
                  )}
                >
                  <FooterPhoneIcon />
                  (704) 555-0127
                </a>
              </div>
              <FooterLinkList title="Menu" links={footerMenu} />
              <FooterLinkList title="Company" links={footerCompany} />
              <FooterLinkList title="Social Media" links={footerSocial} />
            </div>
          </Container>

          <div className="border-t border-slate-200" />

          <Container className="flex flex-col gap-4 pt-5 pb-2 sm:flex-row sm:items-center sm:justify-between">
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
            className="relative min-h-[clamp(10rem,30vw,20rem)] overflow-hidden bg-white pb-6 pt-0 md:min-h-[16rem] md:pb-8"
            aria-hidden
          >
            <p
              className="footer-clairon-watermark absolute bottom-0 left-1/2 w-[115%] max-w-none -translate-x-1/2 translate-y-[10%] text-center md:translate-y-[14%]"
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
