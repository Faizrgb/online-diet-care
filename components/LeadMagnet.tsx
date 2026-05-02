"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Send } from "lucide-react";
import { siteData } from "@/data/content";

export default function LeadMagnet() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 30% of the page
      const scrolled = window.scrollY;
      const threshold = document.documentElement.scrollHeight * 0.3;
      
      if (scrolled > threshold && !isDismissed && !isVisible && status !== "success") {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, isVisible, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteData.global.contactEmail}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "NEW LEAD: Free 1-Day Meal Plan Requested",
          Email: email,
          _template: "box"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setIsVisible(false);
          setIsDismissed(true);
        }, 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const dismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 w-[calc(100vw-3rem)] sm:w-[400px]"
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-brand-500/20 border border-stone-100 overflow-hidden relative">
            
            {/* Close Button */}
            <button 
              onClick={dismiss}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-6 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Gift className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-1">Free 1-Day Meal Plan</h3>
              <p className="text-brand-100 text-sm">Download our exclusive fat-loss blueprint instantly.</p>
            </div>

            {/* Body */}
            <div className="p-6">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="font-bold text-stone-900">It's on the way!</h4>
                  <p className="text-sm text-stone-500 mt-1">Check your inbox for the download link.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none text-sm text-stone-700"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Me The Plan
                        <Send size={16} />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-xs text-center mt-2">Failed to send. Please try again.</p>
                  )}
                  <p className="text-[10px] text-stone-400 text-center">We respect your privacy. No spam.</p>
                </form>
              )}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
