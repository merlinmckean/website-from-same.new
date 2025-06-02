'use client'

import { useState } from 'react'
<<<<<<< HEAD
=======
import Link from 'next/link'
>>>>>>> 754dd9186e70d418523e1d2ef5aee6e23698ddc4
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MerlinLogo } from "@/components/ui/merlin-logo"
import { Mail, Phone, Building, MessageSquare, CheckCircle, ArrowLeft } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 md:px-12 bg-white/80 backdrop-blur-md">
<<<<<<< HEAD
        <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <MerlinLogo size="md" darkMode />
        </a>
        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          <a href="/#services" className="hover:text-gray-900 transition-colors font-medium">Services</a>
          <a href="/#about" className="hover:text-gray-900 transition-colors font-medium">About</a>
          <a href="/contact" className="hover:text-gray-900 transition-colors font-medium text-gray-900">Contact</a>
=======
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <MerlinLogo size="md" darkMode />
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          <Link href="/#services" className="hover:text-gray-900 transition-colors font-medium">Services</Link>
          <Link href="/#about" className="hover:text-gray-900 transition-colors font-medium">About</Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors font-medium text-gray-900">Contact</Link>
>>>>>>> 754dd9186e70d418523e1d2ef5aee6e23698ddc4
        </div>
      </nav>

      <div className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
<<<<<<< HEAD
            <a
=======
            <Link
>>>>>>> 754dd9186e70d418523e1d2ef5aee6e23698ddc4
              href="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
<<<<<<< HEAD
            </a>
=======
            </Link>
>>>>>>> 754dd9186e70d418523e1d2ef5aee6e23698ddc4
            <h1 className="text-4xl md:text-6xl font-garamond font-normal text-gray-900 mb-6 tracking-tight">
              Let's discuss your
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI transformation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to unlock the power of AI for your business? Schedule a free consultation
              and let's explore how we can drive real results together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-cormorant font-medium mb-4">Thank You!</h3>
                  <p className="text-gray-600 text-lg">
                    We've received your request and will be in touch within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-cormorant font-medium mb-6">
                    Schedule Your Free Consultation
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="h-12"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="pl-10 h-12"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">
                          Company
                        </Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="pl-10 h-12"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="pl-10 h-12"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Tell us about your AI goals
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="pl-10 min-h-[120px] resize-none"
                          placeholder="What AI challenges are you looking to solve? Any specific areas of interest?"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium h-12 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Schedule Free Consultation"}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-cormorant font-medium mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">hello@merlinai.consulting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-cormorant font-medium mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>30-minute strategic consultation call</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>AI readiness assessment for your business</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Customized AI strategy recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Clear next steps and implementation roadmap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
