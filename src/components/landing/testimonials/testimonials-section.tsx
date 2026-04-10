"use client"

import Image from "next/image"
import { useState } from "react"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/typography/heading"
import { Subheading } from "@/components/typography/subheading"
import { cn } from "@/lib/utils"

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  imageSrc?: string
  initials?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Guillermo Rauch",
    role: "CEO",
    company: "Vercel",
    imageSrc: "/assets/guillermo.jpeg.png",
    quote:
      "The team absolutely nailed combining docs search and AI Q&A in a delightful experience.",
  },
  {
    name: "Vlad Matsiiako",
    role: "Co-founder",
    company: "Infisical",
    initials: "VM",
    quote:
      "Clairon is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs—they look gorgeous! I definitely think everyone should try Clairon out!",
  },
  {
    name: "Maayan Salom",
    role: "Co-founder",
    company: "Elementary",
    imageSrc: "/assets/maayan.jpeg.png",
    quote:
      "Clairon is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes. Now the docs are managed as code and are part of the dev process and PR. As an open source project.",
  },
  {
    name: "Zeno Rocha",
    role: "CEO",
    company: "Resend",
    imageSrc: "/assets/zeno.jpeg.png",
    quote:
      "This is a must-have if you're building any kind of developer tools. We used other options in the past, which feels outdated in terms of look-n-feel when compared to Clairon. The team helped us set up two different websites and even migrated all the content for us. I can't recommend it enough.",
  },
  {
    name: "Adam Carrigan",
    role: "Co-founder",
    company: "MindsDB",
    imageSrc: "/assets/adam.jpeg.png",
    quote:
      "My team loves Clairon! Great product and a super supportive team.",
  },
  {
    name: "Ashley Mulligan",
    role: "Head of Product Engineering",
    company: "Flatfile",
    imageSrc: "/assets/ashley.jpeg.png",
    quote:
      "Clairon was the only option that checked all the boxes. To get the look, feel, and features we wanted for our documentation, it had to be homegrown or Clairon.",
  },
  {
    name: "Chun Jiang",
    role: "CEO",
    company: "Monterey AI",
    imageSrc: "/assets/chun.jpeg.png",
    quote:
      "Absolutely the best. It is freaking easy to set up, and the team has been great to work with!",
  },
  {
    name: "Charly Poly",
    role: "CEO",
    company: "Defer",
    imageSrc: "/assets/charly.jpeg.png",
    quote:
      "Why spend a week coding your own documentation (and optimising it for SEO, design, etc.) while Clairon brings you the best in class documentation in a few minutes? Worked on documentation for years, in unicorns and open source.",
  },
  {
    name: "Mark Bao",
    role: "Co-founder",
    company: "Goody",
    imageSrc: "/assets/mark.png.png",
    quote:
      "The way docs were displayed just felt really user-friendly for us, and more importantly, for our developer customers. I felt like I had finally found a tool that could give us the Stripe-level documentation we wanted.",
  },
]

function Avatar({ t }: { t: Testimonial }) {
  if (t.imageSrc) {
    return (
      <Image
        src={t.imageSrc}
        alt={t.name}
        width={48}
        height={48}
        className="size-12 shrink-0 rounded-full object-cover"
      />
    )
  }
  return (
    <div
      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600"
      aria-hidden
    >
      {t.initials}
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className={cn(
        "mb-6 break-inside-avoid rounded-2xl border border-slate-200/90 bg-white p-6",
        "shadow-none"
      )}
    >
      <div className="flex gap-3">
        <Avatar t={t} />
        <div className="min-w-0">
          <p className="font-bold text-[#03020B]">{t.name}</p>
          <p className="text-sm text-[#6b7280]">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[#4b5563]">{t.quote}</p>
    </article>
  )
}

export function TestimonialsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, 6)

  return (
    <section
      id="testimonials"
      className="bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading id="testimonials-heading">
          Trusted By World&apos;s Fastest Growing Support Teams
        </SectionHeading>
        <Subheading className="mt-6 md:mt-8">
          We scaled faster by automating support tasks with AI—faster responses,
          less manual work, no extra hires.
        </Subheading>

        <div
          className={cn(
            "mt-14 md:mt-16",
            "columns-1 gap-x-6 gap-y-6 md:columns-2 lg:columns-3"
          )}
        >
          {visible.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {!expanded && (
          <div className="mt-10 flex justify-center md:mt-12">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className={cn(
                "rounded-full bg-[#03020B] px-8 py-3 text-sm font-semibold text-white",
                "transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03020B]"
              )}
            >
              Show More
            </button>
          </div>
        )}
      </Container>
    </section>
  )
}
