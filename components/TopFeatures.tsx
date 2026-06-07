"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Server, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <Globe className="size-6 text-indigo-600" />,
    title: "Global Edge Network",
    description: "Ultra-low latency globally",
    fullDescription: "Our multi-region edge deployment ensures that your machine learning inference requests are routed to the nearest data center. This guarantees single-digit millisecond latency for your users, no matter where they are in the world. Ideal for real-time AI applications.",
    date: "Available in 32 regions",
    titleClassName: "text-zinc-900",
    iconClassName: "text-indigo-600",
    className:
      "[grid-area:stack] bg-white border-zinc-200 hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-6 text-amber-500" />,
    title: "Auto-scaling APIs",
    description: "From 0 to 10k requests/sec",
    fullDescription: "Never worry about provisioning or capacity planning again. Our serverless APIs automatically scale down to zero when idle to save costs, and can instantly scale up to handle massive traffic spikes during peak hours without any configuration required.",
    date: "Instant scaling",
    titleClassName: "text-zinc-900",
    iconClassName: "text-amber-500",
    className:
      "[grid-area:stack] bg-white border-zinc-200 translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Server className="size-6 text-emerald-600" />,
    title: "Serverless GPU Cloud",
    description: "On-demand H100s & A100s",
    fullDescription: "Get instant access to the most powerful GPUs on the market, including NVIDIA H100 and A100 Tensor Core GPUs. Train and deploy your largest language models and computer vision systems with unparalleled performance and cost-efficiency.",
    date: "Always in stock",
    titleClassName: "text-zinc-900",
    iconClassName: "text-emerald-600",
    className:
      "[grid-area:stack] bg-white border-zinc-200 translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export function TopFeatures() {
  return (
    <section className="py-32 overflow-hidden bg-zinc-50/50 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
              Our Core Features
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              Neon Tech provides a complete ecosystem for AI builders. From instant inference to auto-scaling serverless GPUs, we handle the infrastructure so you can focus on building amazing products.
            </p>
            <p className="text-sm font-bold text-zinc-500 bg-white shadow-sm border border-zinc-200 inline-block px-5 py-2.5 rounded-full animate-bounce">
              ✨ Click the cards to view details
            </p>
          </div>
          <div className="flex items-center justify-center min-h-[400px]">
            <DisplayCards cards={features} />
          </div>
        </div>
      </div>
    </section>
  );
}
