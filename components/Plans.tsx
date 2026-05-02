"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import * as Icons from "lucide-react";

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            Specialized Diet Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Explore our expert-designed health programs tailored to meet your specific goals and lifestyle needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.plans.map((plan, index) => {
            // @ts-ignore
            const IconComponent = Icons[plan.icon] || Icons.Leaf;
            // @ts-ignore
            const isHighlighted = plan.isHighlighted;
            // @ts-ignore
            const price = plan.price;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  isHighlighted 
                    ? "bg-slate-900 border-slate-800 text-white shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:-translate-y-1" 
                    : "bg-slate-50 border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl"
                }`}
              >
                {price && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-widest uppercase z-10 shadow-sm">
                    Starts At {price}
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  isHighlighted 
                    ? "bg-slate-800 group-hover:bg-indigo-500" 
                    : "bg-indigo-100 group-hover:bg-indigo-500"
                }`}>
                  <IconComponent className={`w-7 h-7 transition-colors ${
                    isHighlighted ? "text-indigo-400 group-hover:text-white" : "text-indigo-600 group-hover:text-white"
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 font-serif ${isHighlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.title}
                </h3>
                <p className={`leading-relaxed text-sm ${isHighlighted ? "text-slate-400" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                
                {/* Decorative element */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl ${
                  isHighlighted ? "bg-indigo-500/20" : "bg-indigo-50"
                }`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
