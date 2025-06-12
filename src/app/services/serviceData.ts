// src/app/services/serviceData.ts
import { Brain, Zap, Target, Shield, Users, Star } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export const services: Service[] = [
  {
    slug: "ai-strategy",
    title: "AI Strategy & Consulting",
    icon: Brain,
    description:
      "Develop comprehensive AI strategies tailored to your industry and business objectives.",
  },
  {
    slug: "process-automation",
    title: "Process Automation",
    icon: Zap,
    description:
      "Automate repetitive tasks and workflows to increase efficiency and reduce costs.",
  },
  {
    slug: "predictive-analytics",
    title: "Predictive Analytics",
    icon: Target,
    description:
      "Leverage data to predict trends, optimize operations, and make smarter decisions.",
  },
  {
    slug: "ai-implementation",
    title: "AI Implementation",
    icon: Shield,
    description:
      "End-to-end implementation of AI tools and systems with proper training and support.",
  },
  {
    slug: "team-training",
    title: "Team Training",
    icon: Users,
    description:
      "Comprehensive training programs to help your team adopt and maximize AI tools.",
  },
  {
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    icon: Star,
    description:
      "Bespoke AI applications and integrations designed specifically for your business needs.",
  },
];
