"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-[2rem] border border-zinc-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-xs w-full" key={i}>
                  <div className="text-zinc-600 leading-relaxed text-[15px]">{text}</div>
                  <div className="flex items-center gap-4 mt-8">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-zinc-100"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight text-zinc-900 leading-tight">{name}</div>
                      <div className="text-sm opacity-80 tracking-tight text-zinc-500 leading-tight mt-1">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
