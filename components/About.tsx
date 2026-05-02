"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-white">
              {/* Using a solid color as placeholder since no image is provided yet */}
              <div className="w-full h-full bg-gradient-to-br from-brand-200 to-brand-400 flex items-center justify-center">
                 <span className="text-white text-xl font-serif opacity-70">Nutritionist Image Here</span>
              </div>
            </div>
            {/* Decorative background block */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-2 border-brand-300 z-0"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
              {siteData.about.title}
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              {siteData.about.content}
            </p>

            <ul className="space-y-4 mb-10">
              {["Personalized Nutrition Guidance", "No Starvation or Fad Diets", "Sustainable Lifestyle Changes", "24/7 WhatsApp Support"].map((item, idx) => (
                <li key={idx} className="flex items-center text-stone-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all shadow-md hover:shadow-lg"
            >
              Get Started Today
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
