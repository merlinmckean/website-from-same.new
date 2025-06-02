'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ui/contact-form";
import { ArrowRight, Brain, Zap, Target, Shield, Users, Star, Check } from "lucide-react";

// Client component for animations
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />

      {/* Gradient fade overlay for transition to white */}
      <div className="absolute inset-0 gradient-fade-to-white pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-6 md:px-12 bg-white/10 backdrop-blur-md border-b border-white/20">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src="/merlin-ai-logo.png" alt="Merlin AI Logo" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center space-x-6 text-white/90 text-sm font-source-sans font-semibold">
          <Link href="#services" className="hover:text-white transition-colors font-medium">Services</Link>
          <Link href="#about" className="hover:text-white transition-colors font-medium">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors font-medium">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
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
            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed font-source-sans">
              Unlock the power of artificial intelligence for your business.
              From automated workflows to intelligent decision-making,
              we help companies implement AI solutions that drive real results.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactForm
                trigger={
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />
              <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                View Case Studies
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Hero Visual Element */}
        <AnimatedSection delay={1000}>
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover-lift">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-garamond font-medium text-xl mb-2">AI Strategy</h3>
                    <p className="text-purple-100 text-sm">Custom AI roadmaps aligned with your business goals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-garamond font-medium text-xl mb-2">Implementation</h3>
                    <p className="text-purple-100 text-sm">Seamless integration of AI tools and workflows</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-garamond font-medium text-xl mb-2">Optimization</h3>
                    <p className="text-purple-100 text-sm">Continuous improvement and performance monitoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 bg-white">
        {/* ...keep as-is... */}
      </section>

      {/* Process Section */}
      <section id="about" className="relative z-10 bg-gray-50">
        {/* ...keep as-is... */}
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        {/* ...keep as-is... */}
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white">
        <div className="px-6 md:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
                  <img src="/merlin-ai-logo.png" alt="Merlin AI Logo" className="h-8 w-auto" />
                </Link>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transforming businesses through intelligent AI solutions.
                  Strategic consulting, implementation, and optimization services.
                </p>
                <div className="text-gray-400">
                  <p>© 2025 Merlin AI Consulting. All rights reserved.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>AI Strategy</li>
                  <li>Process Automation</li>
                  <li>Predictive Analytics</li>
                  <li>Team Training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>hello@merlinai.consulting</li>
                  <li>+1 (555) 123-4567</li>
                  <li>Schedule a Call</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
