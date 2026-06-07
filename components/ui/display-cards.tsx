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
        {selectedCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCard(null)} 
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-500"
              >
                <X className="size-5" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("p-3 rounded-2xl bg-zinc-50", selectedCard.iconClassName)}>
                  {selectedCard.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">{selectedCard.title}</h3>
              </div>
              
              <p className="text-lg font-medium text-zinc-800 mb-6">{selectedCard.description}</p>
              
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <p className="text-zinc-600 leading-relaxed">
                  {selectedCard.fullDescription}
                </p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="px-6 py-2.5 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
