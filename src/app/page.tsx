"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  Shield,
  Users,
  Star,
} from "lucide-react";

// simple wrapper for staggered fade-in
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />

      {/* gradient fade overlay */}
      <div className="absolute inset-0 gradient-fade-to-white pointer-events-none" />

      {/* NAVIGATION (Case-Studies link removed) */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-6 md:px-12 bg-white/10 backdrop-blur-md border-b border-white/20">
        <Link
          href="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="/merlin-ai-logo.png"
            alt="Merlin AI Logo"
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center space-x-6 text-white/90 text-sm font-semibold">
          <Link
            href="/about"
            className="hover:text-white transition-colors font-semibold text-base md:text-lg px-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors font-semibold text-base md:text-lg px-2"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-20 pb-32 text-center">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={200}>
            <h1 className="text-5xl md:text-7xl font-garamond font-normal text-white mb-8 leading-tight tracking-tight">
              Your intelligent AI
              <br />
              consulting partner.
              <br />
              <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                From strategy to success
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of artificial intelligence for your business.
              From automated workflows to intelligent decision-making, we help
              companies implement AI solutions that drive real results.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactForm
                trigger={
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                  >
                    Start Your AI Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />
            </div>
          </AnimatedSection>
        </div>

        {/* HERO VISUAL */}
        <AnimatedSection delay={1000}>
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover-lift">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Brain,
                      title: "AI Strategy",
                      blurb:
                        "Custom AI roadmaps aligned with your business goals",
                    },
                    {
                      icon: Zap,
                      title: "Implementation",
                      blurb: "Seamless integration of AI tools and workflows",
                    },
                    {
                      icon: Target,
                      title: "Optimization",
                      blurb:
                        "Continuous improvement and performance monitoring",
                    },
                  ].map(({ icon: Icon, title, blurb }) => (
                    <div key={title} className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-garamond font-medium text-xl mb-2">
                        {title}
                      </h3>
                      <p className="text-purple-100 text-sm">{blurb}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </section>

      {/* SERVICES PREVIEW (unchanged) */}
      <section id="services" className="relative z-10 bg-white">
        <div className="px-6 md:px-12 py-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-garamond font-normal text-gray-900 mb-6 tracking-tight">
                  AI solutions that drive
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    real business impact
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We help companies implement AI strategically, efficiently, and
                  with measurable results. No buzzwords, just practical
                  solutions that transform how you work.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[Brain, Zap, Target, Shield, Users, Star].map((Icon, idx) => {
                const titles = [
                  "AI Strategy & Consulting",
                  "Process Automation",
                  "Predictive Analytics",
                  "AI Implementation",
                  "Team Training",
                  "Custom AI Solutions",
                ] as const;
                const descriptions = [
                  "Develop comprehensive AI strategies tailored to your industry and business objectives.",
                  "Automate repetitive tasks and workflows to increase efficiency and reduce costs.",
                  "Leverage data to predict trends, optimize operations, and make smarter decisions.",
                  "End-to-end implementation of AI tools and systems with proper training and support.",
                  "Comprehensive training programs to help your team adopt and maximize AI tools.",
                  "Bespoke AI applications and integrations designed specifically for your business needs.",
                ];
                return (
                  <AnimatedSection key={titles[idx]} delay={idx * 100}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow hover-lift">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {titles[idx]}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {descriptions[idx]}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW (placeholder) */}
      <section id="about" className="relative z-10 bg-gray-50">
        <div className="px-6 md:px-12 py-32">
          <div className="max-w-6xl mx-auto">
            {/* About preview content here */}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="px-6 md:px-12 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-garamond font-normal text-white mb-8 tracking-tight">
                Ready to transform your business with AI?
              </h2>
              <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto font-inter">
                Join forward-thinking companies that are already leveraging AI
                to gain competitive advantages and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactForm
                  trigger={
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                    >
                      Schedule Free Consultation
                    </Button>
                  }
                />
                <Link href="/ai-guide">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    Download AI Guide
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-gray-900 text-white">
        <div className="px-6 md:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Link
                  href="/"
                  className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/merlin-ai-logo.png"
                    alt="Merlin AI Logo"
                    className="h-8 w-auto"
                  />
                </Link>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transforming businesses through intelligent AI solutions.
                  Strategic consulting, implementation, and optimization
                  services.
                </p>
                <p className="text-gray-400">
                  © 2025 Merlin AI Consulting. All rights reserved.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/services" className="hover:underline">
                      All Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>merlin@merlinai.work</li>
                  <li>406-263-5444</li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Schedule a Call
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/merlinai-consulting/"
                      target="_blank"
                      className="hover:underline"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
