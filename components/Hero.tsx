"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/content";
import { ArrowRight, Star, Activity, Heart, Apple } from "lucide-react";
import Image from "next/image";

const heroImages = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[60%] rounded-full bg-brand-100/50 blur-[100px] mix-blend-multiply opacity-70"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[50%] rounded-full bg-blue-50/50 blur-[100px] mix-blend-multiply opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 font-semibold text-sm mb-6 border border-brand-100">
              <Star className="w-4 h-4 text-yellow-500 mr-2 fill-yellow-500" />
              Over 500+ Lives Transformed
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
              {siteData.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
              {siteData.hero.subtitle}
            </p>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
              {siteData.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 text-white font-semibold text-lg hover:bg-brand-600 transition-all shadow-lg hover:shadow-xl hover:shadow-brand-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                {siteData.hero.ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#plans"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-700 font-semibold text-lg border-2 border-slate-100 hover:border-brand-200 hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Explore Plans
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Visuals & Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Main Center Piece: Shuffling Image Carousel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[450px] rounded-3xl shadow-2xl rotate-3 overflow-hidden border-4 border-white bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt="Healthy Diet"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-0 w-full px-6">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50">
                  <p className="text-sm font-bold text-slate-800">Your Goal</p>
                  <p className="text-xs text-slate-500 mb-2">Customized Plan Active</p>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-500 h-full w-[75%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Calories */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-20 left-4 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 w-64"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Apple className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Daily Target</p>
                <p className="text-lg font-bold text-slate-900">1,850 kcal</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Health Stats */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-8 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 w-56"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <Heart className="text-brand-600 w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">+12%</span>
              </div>
              <p className="text-sm text-slate-600 font-medium mb-1">Health Score</p>
              <p className="text-2xl font-bold text-slate-900">Excellent</p>
            </motion.div>

            {/* Floating Card 3: Activity */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -left-12 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
            >
              <Activity className="text-blue-500 w-6 h-6" />
              <p className="text-sm font-bold text-slate-800">Metabolism Boost</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
