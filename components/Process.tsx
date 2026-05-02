"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            A simple, straightforward process to achieve your health and fitness goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-100 z-0"></div>

          {siteData.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-100 rounded-full flex items-center justify-center mb-6 shadow-sm transition-all duration-300 hover:border-brand-500 hover:shadow-md">
                <span className="text-2xl font-bold text-brand-600 font-serif">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{titleCase(step.title)}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function titleCase(str: string) {
  return str;
}
