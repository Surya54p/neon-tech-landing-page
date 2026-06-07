"use client";

import DotPattern from "@/components/ui/dot-pattern-1";

export function CtaQuote() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 xl:px-0">
        <div className="relative flex flex-col items-center border border-[#202E5A]/20 bg-zinc-50/50">
          <DotPattern width={16} height={16} cx={1} cy={1} cr={1} className="fill-[#202E5A]/5" />

          {/* Corner Squares */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-[#202E5A] text-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-[#202E5A] text-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-[#202E5A] text-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-[#202E5A] text-white" />

          <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-12 md:p-16 xl:py-24">
            <p className="md:text-md text-xs text-[#202E5A] lg:text-lg xl:text-xl font-bold uppercase tracking-widest mb-6 ml-1">
              Our Philosophy
            </p>
            <div className="text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-900 leading-[1.1]">
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
                <h1 className="font-semibold">"AI infrastructure</h1>
                <p className="font-light text-zinc-400">should be</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
                <p className="font-light text-zinc-400">invisible</p>
                <h1 className="font-semibold">because</h1>
                <p className="font-light text-zinc-400">great</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
                <p className="font-light text-zinc-400">models</p>
                <h1 className="font-semibold">are waiting to</h1>
              </div>
              <h1 className="font-semibold">change the world."</h1>
            </div>

            <div className="mt-16 flex justify-start">
              <button className="px-10 py-5 rounded-full bg-[#202E5A] text-white font-bold text-lg hover:bg-[#152042] transition-all hover:scale-105 shadow-xl shadow-[#202E5A]/20">
                Deploy Your Model Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
