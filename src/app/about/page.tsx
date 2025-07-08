"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";          // ← new
import { Brain, Zap, Rocket } from "lucide-react";
import LogoMarquee from "@/components/LogoMarquee";


export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
        <Image
          src="/MerlinHeadshot.jpg"      /* or src={MerlinHeadshot} */
          alt="Merlin McKean headshot"
          width={140}
          height={140}
          className="mb-6 rounded-full object-cover"
        />

        <h1 className="text-4xl font-semibold tracking-tight">
          Turning messy data&nbsp;into decisive action.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          I’m <span className="font-medium text-gray-900">Merlin McKean</span>, a
          Financial Engineering grad turned AI problem-solver. I build LLM-powered
          insight engines, workflow automations, and developer tools - bridging business
          goals with technical execution.
        </p>
      </section>

      {/* WHAT I DO BEST */}
      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-3">
        {[
          {
            icon: <Brain className="h-6 w-6" />,
            title: "LLM Insight Engines",
            blurb: "Ask a question, get an answer—grounded in your data.",
          },
          {
            icon: <Zap className="h-6 w-6" />,
            title: "Workflow Automation",
            blurb: "Python, n8n & serverless tasks that erase busywork.",
          },
          {
            icon: <Rocket className="h-6 w-6" />,
            title: "Rapid Prototyping",
            blurb: "From zero → MVP in weeks, not months.",
          },
        ].map(({ icon, title, blurb }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-100 p-6 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
              {icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{blurb}</p>
          </div>
        ))}
      </section>

{/* TOOLBOX / trusted-by strip */}
<section className="bg-gray-50">
  {/* 20-second loop, slightly wider bar */}
  <LogoMarquee speed={8} width="max-w-2xl" />
</section>


      {/* CREDIBILITY + CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="mb-8 text-gray-700">
          B.S. in Financial Engineering (3.7 GPA). Skilled across Python,
          Node.js, React/Next.js, LangChain, and cloud stacks. I bridge technical
          teams and stakeholders to deliver AI solutions that move the needle.
        </p>

        <ContactForm                                         
          trigger={
            <Button size="lg">Book a discovery call →</Button>
          }
        />
      </section>

      {/* COMING SOON */}
      <section className="pb-24 text-center">
        <p className="text-sm text-gray-500">
          🚧 Case-study section launching soon. Email&nbsp;
          <a
            href="mailto:merlin@merlinai.work"
            className="font-medium text-indigo-600 underline"
          >
            merlin@merlinai.work
          </a>{" "}
          for references.
        </p>
      </section>
    </main>
  );
}
