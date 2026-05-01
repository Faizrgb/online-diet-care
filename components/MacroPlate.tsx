"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Info } from "lucide-react";

type DietType = "balanced" | "fat-loss" | "keto" | "muscle";

const macroData = {
  "balanced": { label: "Balanced Lifestyle", carbs: 40, protein: 30, fats: 30, desc: "A healthy, sustainable split for everyday wellness and maintenance." },
  "fat-loss": { label: "Fat Loss Focus", carbs: 25, protein: 40, fats: 35, desc: "Higher protein keeps you full while maintaining muscle in a caloric deficit." },
  "keto": { label: "Keto / Low Carb", carbs: 5, protein: 25, fats: 70, desc: "High fat, extremely low carb to shift the body into ketosis." },
  "muscle": { label: "Muscle Gain", carbs: 50, protein: 30, fats: 20, desc: "Carb-heavy to fuel intense workouts and promote muscle protein synthesis." }
};

export default function MacroPlate() {
  const [activeDiet, setActiveDiet] = useState<DietType>("balanced");
  const data = macroData[activeDiet];
  
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  
  const carbsStroke = (data.carbs / 100) * circumference;
  const proteinStroke = (data.protein / 100) * circumference;
  const fatsStroke = (data.fats / 100) * circumference;
  
  const carbsOffset = 0;
  const proteinOffset = -carbsStroke;
  const fatsOffset = proteinOffset - proteinStroke;

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 mb-6 shadow-sm"
          >
            <Utensils size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4"
          >
            The Perfect Plate
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Nutrition isn't one-size-fits-all. Select your goal below to see how your macro split should look on the plate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          
          {/* Controls Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Select Your Goal</h3>
            <div className="flex flex-col gap-3 mb-8">
              {(Object.keys(macroData) as DietType[]).map((diet) => (
                <button
                  key={diet}
                  onClick={() => setActiveDiet(diet)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all border-2 flex justify-between items-center ${
                    activeDiet === diet 
                      ? "border-brand-500 bg-brand-50 text-brand-700 shadow-md transform scale-[1.02]" 
                      : "border-slate-100 bg-white text-slate-600 hover:border-brand-200 hover:bg-slate-50"
                  }`}
                >
                  {macroData[diet].label}
                  {activeDiet === diet && (
                    <span className="w-3 h-3 rounded-full bg-brand-500 animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start">
              <Info className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Why Macros Matter:</strong> <br/>
                {data.desc}
              </p>
            </div>
          </motion.div>

          {/* Visual Plate Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              
              {/* The "Plate" background */}
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 z-0"></div>
              <div className="absolute inset-4 rounded-full bg-slate-50 shadow-inner z-0"></div>

              {/* Dynamic SVG Donut Chart for Macros */}
              <svg className="w-full h-full -rotate-90 relative z-10 drop-shadow-xl" viewBox="0 0 300 300">
                
                {/* Carbs (Yellow) */}
                <motion.circle
                  cx="150" cy="150" r={radius}
                  fill="transparent"
                  stroke="#fbbf24" // amber-400
                  strokeWidth="45"
                  strokeDasharray={circumference}
                  animate={{ strokeDashoffset: circumference - carbsStroke }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  strokeLinecap="round"
                />
                
                {/* Protein (Green) */}
                <motion.circle
                  cx="150" cy="150" r={radius}
                  fill="transparent"
                  stroke="#10b981" // emerald-500
                  strokeWidth="45"
                  strokeDasharray={circumference}
                  animate={{ strokeDashoffset: circumference - proteinStroke }}
                  style={{ strokeDashoffset: proteinOffset, rotate: (carbsStroke / circumference) * 360 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  strokeLinecap="round"
                />

                {/* Fats (Blue) */}
                <motion.circle
                  cx="150" cy="150" r={radius}
                  fill="transparent"
                  stroke="#3b82f6" // blue-500
                  strokeWidth="45"
                  strokeDasharray={circumference}
                  animate={{ strokeDashoffset: circumference - fatsStroke }}
                  style={{ strokeDashoffset: fatsOffset, rotate: ((carbsStroke + proteinStroke) / circumference) * 360 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  strokeLinecap="round"
                />
              </svg>

              {/* Center Readout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-32 bg-white rounded-full h-32 flex flex-col items-center justify-center shadow-md border border-slate-50">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Target</p>
                <motion.p 
                  key={activeDiet}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif font-bold text-lg text-slate-900 leading-tight"
                >
                  {data.label}
                </motion.p>
              </div>

            </div>

            {/* Legend */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 w-full max-w-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-400"></div>
                <span className="text-slate-600 font-semibold w-16">Carbs</span>
                <span className="font-bold text-slate-900">{data.carbs}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                <span className="text-slate-600 font-semibold w-16">Protein</span>
                <span className="font-bold text-slate-900">{data.protein}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-slate-600 font-semibold w-16">Fats</span>
                <span className="font-bold text-slate-900">{data.fats}%</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
