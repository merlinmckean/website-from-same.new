import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/ui/contact-form"
import { ArrowRight, Brain, Zap, Target, Shield, Users, Star, Check } from "lucide-react"

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
        <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src="/merlin-ai-logo.png" alt="Merlin AI Logo" className="h-8 w-auto" />
        </a>
        <div className="flex items-center space-x-6 text-white/90 text-sm font-source-sans font-semibold">
          <a href="#services" className="hover:text-white transition-colors font-medium">Services</a>
          <a href="#about" className="hover:text-white transition-colors font-medium">About</a>
          <a href="/contact" className="hover:text-white transition-colors font-medium">Contact</a>
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
                  We help companies implement AI strategically, efficiently, and with measurable results.
                  No buzzwords, just practical solutions that transform how you work.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "ai-strategy",
                  icon: Brain,
                  title: "AI Strategy & Consulting",
                  description: "Develop comprehensive AI strategies tailored to your industry and business objectives."
                },
                {
                  id: "process-automation",
                  icon: Zap,
                  title: "Process Automation",
                  description: "Automate repetitive tasks and workflows to increase efficiency and reduce costs."
                },
                {
                  id: "predictive-analytics",
                  icon: Target,
                  title: "Predictive Analytics",
                  description: "Leverage data to predict trends, optimize operations, and make smarter decisions."
                },
                {
                  id: "ai-implementation",
                  icon: Shield,
                  title: "AI Implementation",
                  description: "End-to-end implementation of AI tools and systems with proper training and support."
                },
                {
                  id: "team-training",
                  icon: Users,
                  title: "Team Training",
                  description: "Comprehensive training programs to help your team adopt and maximize AI tools."
                },
                {
                  id: "custom-solutions",
                  icon: Star,
                  title: "Custom AI Solutions",
                  description: "Bespoke AI applications and integrations designed specifically for your business needs."
                }
              ].map((service, index) => (
                <AnimatedSection key={service.id} delay={index * 100}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow hover-lift">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="about" className="relative z-10 bg-gray-50">
        <div className="px-6 md:px-12 py-32">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-garamond font-normal text-gray-900 mb-6 tracking-tight">
                  From consultation to transformation.
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Here's how we work.</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our proven methodology ensures successful AI implementation
                  with measurable results and lasting impact.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              {[
                {
                  id: "discovery",
                  step: "1",
                  title: "Discovery & Assessment",
                  description: "We analyze your current processes, identify AI opportunities, and assess your readiness for transformation."
                },
                {
                  id: "strategy",
                  step: "2",
                  title: "Strategy Development",
                  description: "Create a comprehensive AI roadmap with clear milestones, timelines, and expected ROI."
                },
                {
                  id: "pilot",
                  step: "3",
                  title: "Pilot Implementation",
                  description: "Start with a focused pilot project to demonstrate value and refine our approach."
                },
                {
                  id: "deployment",
                  step: "4",
                  title: "Full-Scale Deployment",
                  description: "Roll out AI solutions across your organization with comprehensive training and support."
                },
                {
                  id: "optimization",
                  step: "5",
                  title: "Optimization & Growth",
                  description: "Continuously monitor, optimize, and expand your AI capabilities for maximum impact."
                }
              ].map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 150}>
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                      Schedule Free Consultation
                    </Button>
                  }
                />
                <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Download AI Guide
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white">
        <div className="px-6 md:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <a href="/" className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
                  <img src="/merlin-ai-logo.png" alt="Merlin AI Logo" className="h-8 w-auto" />
                </a>
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
  )
}
