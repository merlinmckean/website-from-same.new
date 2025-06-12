import { services, Service } from "./serviceData";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-garamond text-gray-900 text-center mb-8">
          Our Services
        </h1>
        <div className="space-y-4">
          {services.map((service: Service) => (
            <details
              key={service.slug}
              className="group bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                <div className="flex items-center">
                  <service.icon className="w-6 h-6 text-indigo-600 mr-3" />
                  {service.title}
                </div>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="mt-4 text-gray-700">
                <p className="mb-3">
                  {service.description} Filler overview for <strong>{service.title}</strong>.
                </p>
                <ul className="list-disc list-inside mb-3 space-y-1">
                  <li>
                    Use case 1 for <strong>{service.title}</strong>.
                  </li>
                  <li>
                    Use case 2 for <strong>{service.title}</strong>.
                  </li>
                </ul>
                <a
                  href="/case-studies"
                  className="text-indigo-600 hover:underline"
                >
                  View related case studies &rarr;
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}