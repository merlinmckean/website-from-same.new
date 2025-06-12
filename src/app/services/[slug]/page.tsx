// File: src/app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { services, Service } from "../serviceData";

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service: Service | undefined = services.find(
    (s) => s.slug === params.slug
  );
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center pt-20">
        <Icon className="mx-auto w-12 h-12 text-indigo-600 mb-4" />
        <h1 className="text-5xl font-garamond text-gray-900">{service.title}</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          {service.description}
        </p>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="text-indigo-600 hover:underline font-medium"
        >
          &larr; Back to Services
        </Link>
      </div>
    </div>
  );
}
