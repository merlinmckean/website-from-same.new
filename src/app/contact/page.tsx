'use client';

import Link from "next/link";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Building, MessageSquare, CheckCircle, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
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
      <div className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home link */}
          <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-garamond font-normal text-gray-900 mb-6 tracking-tight">
            Let's discuss your{` `}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI transformation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Ready to unlock the power of AI for your business? Schedule a free consultation
            and let's explore how we can drive real results together.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-cormorant font-medium mb-4">Thank You!</h3>
                  <p className="text-gray-600 text-lg">
                    We've received your request and will be in touch within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-cormorant font-medium mb-6">
                    Schedule Your Free Consultation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* form fields... */}
                  </form>
                </>
              )}
            </div>
            {/* contact info section... */}
          </div>
        </div>
      </div>
    </div>
  );
}