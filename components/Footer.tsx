"use client";

import DotPattern from "@/components/ui/dot-pattern-1";

export function Footer() {
  return (
    <footer className="bg-white pt-12 pb-12 overflow-hidden flex flex-col items-center">
      {/* Brutalist Huge Text */}
      <div className="w-full text-center overflow-hidden mb-8 px-4">
        <h1 className="text-[16vw] leading-[0.8] font-black text-zinc-900 tracking-tighter uppercase select-none">
          NEON TECH
        </h1>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 xl:px-0">
        <div className="relative flex flex-col border border-[#202E5A]/20 bg-white">
          <DotPattern width={16} height={16} cx={1} cy={1} cr={1} className="fill-[#202E5A]/5" />

          {/* Corner Squares */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-[#202E5A]" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-[#202E5A]" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-[#202E5A]" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-[#202E5A]" />

          <div className="relative z-20 w-full px-8 py-16 md:p-16 flex flex-col lg:flex-row justify-between gap-16">
            
            {/* Left side: The Brand / Quote */}
            <div className="max-w-xl">
              <p className="text-xs text-[#202E5A] font-bold uppercase tracking-widest mb-6">
                Neon Tech Inc.
              </p>
              <div className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 leading-[1.1]">
                Democratizing<br />
                <span className="font-light text-zinc-400">high-performance</span><br />
                AI computing.
              </div>
            </div>

            {/* Right side: Links */}
            <div className="flex flex-wrap gap-16 md:gap-24">
              <div className="flex flex-col gap-5">
                <p className="font-bold text-zinc-900 uppercase tracking-widest text-sm mb-2">Platform</p>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">GPU Cloud</a>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">Inference APIs</a>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">Enterprise</a>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">Pricing</a>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-zinc-900 uppercase tracking-widest text-sm mb-2">Company</p>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">About Us</a>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">Blog</a>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">Careers</a>
                <a href="#" className=" hover:text-[#202E5A] font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-20 w-full px-8 py-6 border-t border-[#202E5A]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className=" font-medium text-sm">© 2026 Neon Tech Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className=" font-medium text-sm transition-colors">Twitter</a>
              <a href="#" className=" font-medium text-sm transition-colors">GitHub</a>
              <a href="#" className=" font-medium text-sm transition-colors">Discord</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
