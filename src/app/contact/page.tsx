'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="py-24 px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-garamond font-normal text-gray-900 mb-6 tracking-tight">
            Let&apos;s discuss your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI transformation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to unlock the power of AI for your business? Schedule a free consultation
            and let&apos;s explore how we can drive real results together.
          </p>
        </div>

        {/* Consultation CTA & Modal */}
        <div className="flex justify-center">
          <ContactForm
            trigger={
              <Card className="border-0 shadow-lg hover:shadow-xl cursor-pointer">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-semibold">
                    Schedule Your Free Consultation
                  </h2>
                </CardContent>
              </Card>
            }
          />
        </div>
      </div>
    </div>
  );
}