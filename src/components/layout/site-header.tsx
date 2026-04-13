"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/brand/logo"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  LANDING_HEADING_FONT,
  LANDING_SUBHEADING_FONT,
} from "@/lib/landing-typography"
import { mainNavLinks } from "@/lib/site-nav"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 flex justify-center",
        scrolled ? "pt-4" : "pt-0"
      )}
    >
      <div 
        className={cn(
          "flex h-[4.25rem] items-center justify-between gap-2 px-4 transition-all duration-300 sm:h-[4.5rem] sm:px-6 lg:px-8",
          scrolled 
            ? "w-[95%] max-w-[1200px] rounded-full bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-sm" 
            : "w-full bg-transparent"
        )}
      >
        <Logo className="min-w-0 shrink" />
        <div className="hidden min-w-0 flex-1 justify-center px-2 lg:flex">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex flex-wrap justify-center gap-1 xl:gap-2">
              {mainNavLinks.map((item) => {
                const isPrimary = item.emphasis === "primary"
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      className={cn(
                        "rounded-lg px-2.5 py-2 text-center text-[16px] leading-6 tracking-normal transition-colors xl:px-3",
                        isPrimary
                          ? cn(
                              LANDING_HEADING_FONT,
                              "text-foreground hover:bg-transparent hover:text-black"
                            )
                          : cn(
                              LANDING_SUBHEADING_FONT,
                              "text-[color-mix(in_oklab,var(--foreground)_58%,#64748b)] hover:bg-transparent hover:text-black"
                            )
                      )}
                      render={<Link href={item.href} />}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <Button
            variant="outline"
            size="sm"
            className="h-9 rounded-lg border border-[#DCE5ED] bg-background/60 px-2.5 text-[14px] font-medium leading-6 tracking-normal text-foreground shadow-none hover:bg-slate-50 sm:px-3.5 sm:text-[16px] md:px-4"
            render={<Link href="#sign-in" />}
          >
            Sign in
          </Button>
          <Button
            size="sm"
            className="h-9 rounded-lg border border-[#DCE5ED] bg-foreground px-2.5 text-[14px] font-bold leading-6 tracking-normal text-background shadow-[0px_1px_0px_0px_#1B1F2333] hover:bg-[#1a1a1a] sm:px-3.5 sm:text-[16px] md:px-4"
            render={<Link href="#waitlist" />}
          >
            <span className="hidden sm:inline">Join the waitlist</span>
            <span className="sm:hidden">Waitlist</span>
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-[color-mix(in_oklab,#94a3b8_35%,transparent)] bg-background/80 text-foreground shadow-sm backdrop-blur-sm lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="size-5" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="size-5" strokeWidth={2} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="site-mobile-nav"
          className="fixed bottom-0 right-0 top-[4.25rem] z-[100] flex w-[min(100%,20rem)] flex-col border-l border-slate-200/80 bg-white shadow-[-12px_0_40px_rgba(15,23,42,0.08)] sm:top-[4.5rem] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {mainNavLinks.map((item) => {
              const isPrimary = item.emphasis === "primary"
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-[17px] transition-colors active:bg-slate-100",
                    isPrimary
                      ? cn(LANDING_HEADING_FONT, "text-foreground")
                      : cn(LANDING_SUBHEADING_FONT, "text-[#475569]")
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="#waitlist"
              className={cn(
                "mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 py-3 text-[15px] text-background",
                LANDING_HEADING_FONT
              )}
              onClick={() => setMobileOpen(false)}
            >
              Join the waitlist
            </Link>
          </nav>
        </div>
      ) : null}

      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 top-[4.25rem] z-[90] bg-black/25 sm:top-[4.5rem] lg:hidden"
          aria-hidden
          tabIndex={-1}
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </header>
  )
}
