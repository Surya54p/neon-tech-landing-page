"use client";

import { Sparkles, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  fullDescription?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  onClick,
}: DisplayCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer relative flex h-40 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-sm px-6 py-5 transition-all duration-700 hover:border-zinc-300 hover:bg-white shadow-xl shadow-zinc-200/50 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className={cn("relative inline-flex items-center justify-center rounded-xl bg-blue-50 p-2.5", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-lg font-bold ml-3", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-zinc-700 font-medium">{description}</p>
      <p className="text-zinc-400 text-sm font-medium">{date}</p>
    </div>
  );
}

export interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const [selectedCard, setSelectedCard] = useState<DisplayCardProps | null>(null);

  const displayCards = cards || [];

  return (
    <>
      <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 w-full max-w-sm mx-auto relative pt-10">
        {displayCards.map((cardProps, index) => (
          <DisplayCard 
            key={index} 
            {...cardProps} 
            onClick={() => setSelectedCard(cardProps)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (() => {
          const isIndigo = selectedCard.iconClassName?.includes("indigo");
          const isAmber = selectedCard.iconClassName?.includes("amber");
          const isEmerald = selectedCard.iconClassName?.includes("emerald");

          const bgIconClass = isIndigo ? "bg-indigo-50" : isAmber ? "bg-amber-50" : isEmerald ? "bg-emerald-50" : "bg-zinc-50";
          const bgContentClass = isIndigo 
            ? "bg-indigo-50/30 border-indigo-100/60" 
            : isAmber 
            ? "bg-amber-50/30 border-amber-100/60" 
            : isEmerald 
            ? "bg-emerald-50/30 border-emerald-100/60" 
            : "bg-zinc-50/50 border-zinc-100";
          const badgeClass = isIndigo 
            ? "bg-indigo-50/60 text-indigo-700 border-indigo-100/60" 
            : isAmber 
            ? "bg-amber-50/60 text-amber-700 border-amber-100/60" 
            : isEmerald 
            ? "bg-emerald-50/60 text-emerald-700 border-emerald-100/60" 
            : "bg-zinc-50 text-zinc-600 border-zinc-100";

          return (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white rounded-[2rem] p-8 max-w-lg w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedCard(null)} 
                  className="absolute top-6 right-6 p-2.5 rounded-full hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  <X className="size-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn("p-3.5 rounded-2xl flex items-center justify-center shrink-0", bgIconClass)}>
                    {selectedCard.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight">{selectedCard.title}</h3>
                </div>
                
                <div className="flex justify-start mb-6">
                  <span className={cn("px-4 py-1.5 rounded-full text-sm font-bold border", badgeClass)}>
                    {selectedCard.description}
                  </span>
                </div>
                
                <div className={cn("p-6 rounded-2xl border text-[15px] leading-relaxed text-zinc-600 font-medium", bgContentClass)}>
                  {selectedCard.fullDescription}
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={() => setSelectedCard(null)}
                    className="px-8 py-3 bg-[#202E5A] text-white rounded-full font-bold text-sm hover:bg-[#152042] transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#202E5A]/20"
                  >
                    Got it, thanks
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </>
  );
}
