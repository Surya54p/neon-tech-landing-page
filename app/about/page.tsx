import { MagicText } from "@/components/ui/magic-text";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-32 overflow-hidden">
      <div className="w-full max-w-6xl mb-40 px-6">
        <MagicText
          text="Welcome to Neon Tech. We are on a mission to democratize access to high-performance computing. By abstracting away the complexities of infrastructure, we empower innovators to build the next generation of AI seamlessly. Our serverless GPU cloud is designed for the future."
        />
      </div>

      <div className="w-full flex flex-col items-center px-4 mb-40">
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
    </div>
  );
}
