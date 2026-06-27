import { Cpu, Zap, Shield, ChevronRight } from "lucide-react";

const products = [
  {
    id: "gpu-cloud",
    title: "Serverless GPU Cloud",
    subtitle: "On-demand high-performance computing",
    description: "Get instant access to state-of-the-art GPUs for training, fine-tuning, and heavy batch inference workloads without any setup friction.",
    icon: <Cpu className="size-6 text-[#202E5A]" />,
    bgClass: "bg-slate-50 border-gray-300",
    badge: "Most Popular",
    badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-100",
    features: [
      "NVIDIA H100, A100, and L40S instances",
      "Instant launch (under 10 seconds)",
      "Multi-node clustering ready",
      "Pre-configured CUDA & PyTorch environments"
    ],
    pricing: "Starting at $0.90 / hour",
    cta: "Launch Instance"
  },
  {
    id: "inference-apis",
    title: "Instant Inference APIs",
    subtitle: "Auto-scaling serverless model endpoints",
    description: "Deploy any open-source or custom model instantly behind a scalable, low-latency API endpoint. Zero server management required.",
    icon: <Zap className="size-6 text-[#202E5A]" />,
    bgClass: "bg-slate-50 border-gray-300",
    badge: "New Feature",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-100",
    features: [
      "Scale down to zero when idle",
      "Sub-second cold start times",
      "Global edge latency optimization",
      "Seamless support for Llama, Mistral & Stable Diffusion"
    ],
    pricing: "Pay per token or active millisecond",
    cta: "Deploy Model"
  },
  {
    id: "enterprise-clusters",
    title: "Enterprise Clusters",
    subtitle: "Dedicated and secure private GPU pools",
    description: "For organizations requiring secure, isolated, and dedicated compute capacity. Custom tailored to match your compliance and scale demands.",
    icon: <Shield className="size-6 text-[#202E5A]" />,
    bgClass: "bg-slate-50 border-gray-300",
    badge: "Enterprise",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    features: [
      "Isolated private network & dedicated VPC",
      "Custom SLA guarantees up to 99.99%",
      "Socal/HIPAA/GDPR compliance options",
      "24/7 dedicated solutions engineering support"
    ],
    pricing: "Custom contract billing",
    cta: "Contact Enterprise"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white py-24 px-6 lg:px-12 flex flex-col items-center">
      {/* Title Header */}
      <div className="max-w-4xl text-center mb-20 mt-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6">
          Our Compute Suite
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          High-performance infrastructure tailored for modern AI engineering. From rapid prototyping to massive scale, we have you covered.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {products.map((product) => (
          <div 
            key={product.id}
            className={`flex flex-col justify-between border rounded-[2rem] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#202E5A]/5 hover:-translate-y-2 ${product.bgClass}`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-white border border-zinc-150 rounded-2xl flex items-center justify-center shadow-sm">
                  {product.icon}
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${product.badgeClass}`}>
                  {product.badge}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight mb-2">
                {product.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-wider">
                {product.subtitle}
              </p>
              <p className="text-zinc-600 leading-relaxed font-medium mb-8">
                {product.description}
              </p>

              {/* Features List */}
              <div className="border-t border-zinc-200/60 pt-6 mb-8">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Core Specifications</p>
                <ul className="flex flex-col gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-zinc-600 text-sm font-medium">
                      <ChevronRight className="size-4 shrink-0 text-[#202E5A] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing and Button */}
            <div>
              <div className="border-t border-zinc-200/60 pt-6 mb-6">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Pricing Model</p>
                <p className="text-lg font-bold text-zinc-800">{product.pricing}</p>
              </div>
              <button className="w-full py-4 rounded-full bg-[#202E5A] hover:bg-[#152042] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#202E5A]/10 active:scale-[0.98]">
                {product.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
