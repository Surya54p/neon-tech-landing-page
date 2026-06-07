"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Neon Tech's GPU cloud transformed our model training, reducing time from days to hours. The serverless architecture is incredibly cost-effective.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Dr. Sarah Chen",
    role: "AI Researcher",
  },
  {
    text: "Deploying our LLMs was seamless. The autoscaling inference APIs handle our peak traffic effortlessly without any manual intervention.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "David Rodriguez",
    role: "Lead ML Engineer",
  },
  {
    text: "The support team is exceptional. They helped us optimize our computer vision models for their A100 instances, saving us thousands.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Watson",
    role: "CTO",
  },
  {
    text: "We migrated our entire inference stack to Neon Tech. The 99.9% uptime SLA gives us the reliability we need for enterprise clients.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Marcus Johnson",
    role: "VP of Engineering",
  },
  {
    text: "Scaling from prototype to production has never been easier. We don't worry about CUDA versions or GPU provisioning anymore.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Priya Patel",
    role: "Data Science Manager",
  },
  {
    text: "The instant inference APIs allowed us to bring our GenAI product to market weeks ahead of schedule. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Jessica Lee",
    role: "Product Manager",
  },
  {
    text: "Unmatched performance. Our batch processing jobs finish 3x faster compared to our previous cloud provider.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Alexei Volkov",
    role: "Principal Architect",
  },
  {
    text: "Their serverless model means we only pay for what we use. Our compute costs dropped by 60% in the first month.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Nina Simone",
    role: "Finance Director",
  },
  {
    text: "The seamless integration with open-source models like Llama and Mistral makes Neon Tech the best platform for AI startups.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "James Wilson",
    role: "AI Founder",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-zinc-50/50 py-24 relative overflow-hidden border-t border-zinc-100">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Trusted by AI Teams
          </h2>
          <p className="text-lg text-zinc-500 max-w-md mx-auto leading-relaxed">
            See how forward-thinking companies are scaling their machine learning infrastructure with Neon Tech.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
