"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    slug: "pilot-pharma-ai",
    title: "Pilot Pharma AI Implementation",
    summary:
      "Accelerated batch-release workflows by 40% with a custom ML model and real-time monitoring dashboard.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-garamond text-gray-900 mb-12 text-center">
          Case Studies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <Card key={cs.slug} className="border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{cs.title}</h2>
                <p className="text-gray-600 mb-4">{cs.summary}</p>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="text-indigo-600 hover:underline"
                >
                  Read full study &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}