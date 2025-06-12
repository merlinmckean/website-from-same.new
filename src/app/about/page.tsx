export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gray-50 px-6 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-garamond text-gray-900 mb-6">
            About Merlin AI
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            I’m Merlin McKean—an AI Strategy & Implementation Consultant with a
            passion for turning data into actionable insights. I’ve helped
            life-sciences and tech firms streamline workflows, pilot custom AI
            solutions, and scale them across the enterprise.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>10+ years of strategic consulting experience</li>
            <li>Built & rolled out custom AI pipelines in pharma</li>
            <li>Speaker at ASCO, JP Morgan, Prix Galien</li>
            <li>Advisor to biotech & fintech leadership teams</li>
          </ul>
        </div>
      </div>
    );
  }