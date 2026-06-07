import Image from "next/image";
import { Testimonials } from "@/components/Testimonials";
import { MagicText } from "@/components/ui/magic-text";
// import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 p-6 lg:p-12 lg:pt-4">

      {/* Left Column */}
      <div className="flex flex-col justify-center max-w-2xl px-2 lg:px-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['GPU Cloud', 'Serverless Inference', 'Auto-Scaling'].map(tag => (
            <span key={tag} className="px-5 py-2.5 rounded-full bg-zinc-50/80 border border-zinc-100 text-xs font-bold text-zinc-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.05] font-bold text-zinc-900 tracking-tight mb-8">
          Deploy AI Models<br />
          <span className="inline-flex items-center gap-4 align-middle">
            {/* Avatars */}
            <span className="flex -space-x-5 mr-2">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[5px] border-white bg-zinc-200 overflow-hidden shadow-sm z-30">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[5px] border-white bg-zinc-300 overflow-hidden shadow-sm z-20">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[5px] border-white bg-zinc-400 overflow-hidden shadow-sm z-10">
                <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
              </div>
            </span>
            With Unmatched
          </span><br />
          Performance
          <span className="text-[#202E5A] ml-3 inline-block align-middle pb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
          </span>
        </h1>

        {/* Description */}
        <p className="text-zinc-500 text-base md:text-[1.1rem] max-w-[90%] leading-relaxed mb-12 font-medium">
          Experience ultra-fast, scalable machine learning hosting. Deploy large language models and computer vision applications instantly on high-performance GPUs with zero infrastructure overhead.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 rounded-full bg-[#202E5A] text-white font-semibold hover:bg-[#152042] transition-colors shadow-[0_8px_20px_rgba(32,46,90,0.3)]">
            Start Free Trial
          </button>
          <button className="px-8 py-4 rounded-full bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-200 transition-colors">
            View Documentation
          </button>
        </div>
      </div>

      {/* Right Column (Image & Cards) */}
      <div className="relative w-full h-[600px] lg:h-auto min-h-[600px] rounded-[2.5rem] overflow-hidden group">
        <img
          src="/3d-shape-hero.png"
          alt="3D flowing shapes"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Social Icons Pill */}
        <div className="absolute top-6 right-6 flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white z-10">
          <a href="#" className="hover:text-white/70 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
          <div className="w-[1px] h-4 bg-white/30"></div>
          <a href="#" className="hover:text-white/70 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
          <div className="w-[1px] h-4 bg-white/30"></div>
          <a href="#" className="hover:text-white/70 transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></a>
        </div>

        {/* Glass Cards overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 z-10">
          {/* Wide Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-4 flex flex-col sm:flex-row gap-5 items-center shadow-2xl">
            <div className="w-full sm:w-[140px] aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-white pr-4">
              <h3 className="font-semibold text-xl mb-2 text-white">Instant Inference APIs</h3>
              <p className="text-sm text-white/80 leading-relaxed font-medium">
                Deploy any open-source or custom ML model behind a robust API in seconds. We handle the load balancing, autoscaling, and GPU provisioning.
              </p>
            </div>
          </div>

          {/* Bottom Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Growth Rate */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 text-white shadow-2xl">
              <h3 className="font-semibold text-lg mb-4 text-white">Uptime SLA</h3>
              <div className="flex justify-between text-sm font-bold mb-3">
                <span>99.9%</span>
                <span>100%</span>
              </div>
              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-white/20 rounded-full mb-5">
                <div className="absolute top-0 left-0 h-full w-[60%] bg-white rounded-full">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-md"></div>
                </div>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-medium">
                Our enterprise-grade infrastructure ensures your AI models are always available with multi-region redundancy and automatic failover.
              </p>
            </div>

            {/* AI 3D Asset */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 text-white shadow-2xl">
              <h3 className="font-semibold text-lg mb-4 text-white">GPU Cost Savings</h3>
              <div className="flex justify-between text-sm font-bold mb-3">
                <span>40%</span>
                <span>70%</span>
              </div>
              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-white/20 rounded-full mb-5">
                <div className="absolute top-0 left-0 h-full w-[80%] bg-white rounded-full">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-md"></div>
                </div>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-medium">
                Save up to 70% on compute costs with our optimized serverless architecture that scales to zero when your models are idle.
              </p>
            </div>
          </div>
        </div>

        </div>

      </section>

      {/* About Section */}
      <section className="w-full flex flex-col items-center pt-32 pb-20 overflow-hidden bg-white">
       

        <div className="w-full max-w-6xl mb-32 px-6">
          <MagicText
            text="Welcome to Neon Tech. We are on a mission to democratize access to high-performance computing. By abstracting away the complexities of infrastructure, we empower innovators to build the next generation of AI seamlessly. Our serverless GPU cloud is designed for the future."
          />
        </div>

        <div className="w-full flex flex-col items-center px-4 mb-20">
          <p className="text-zinc-500 font-semibold uppercase tracking-widest mb-16">The Infrastructure Behind The Magic</p>
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 lg:gap-8 w-full max-w-[1600px]">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=500&fit=crop" 
              alt="Server room" 
              className="w-40 sm:w-48 lg:w-64 aspect-[3/4] object-cover rounded-3xl shadow-2xl -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500" 
            />
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=500&fit=crop" 
              alt="Circuit board" 
              className="w-40 sm:w-48 lg:w-64 aspect-[3/4] object-cover rounded-3xl shadow-2xl rotate-3 translate-y-6 hover:rotate-0 hover:scale-105 transition-all duration-500" 
            />
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop" 
              alt="Data matrix" 
              className="w-40 sm:w-48 lg:w-64 aspect-[3/4] object-cover rounded-3xl shadow-2xl -rotate-2 -translate-y-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10" 
            />
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=500&fit=crop" 
              alt="Server rack" 
              className="w-40 sm:w-48 lg:w-64 aspect-[3/4] object-cover rounded-3xl shadow-2xl rotate-6 translate-y-8 hover:rotate-0 hover:scale-105 transition-all duration-500" 
            />
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=500&fit=crop" 
              alt="Global network" 
              className="w-40 sm:w-48 lg:w-64 aspect-[3/4] object-cover rounded-3xl shadow-2xl -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
