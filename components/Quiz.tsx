"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, RotateCcw, Sparkles } from "lucide-react";

type QuizState = {
  goal: string;
  condition: string;
  diet: string;
};

const GOALS = ["Lose Weight", "Gain Muscle", "Manage Medical Condition", "Eat Healthier", "Other"];
const CONDITIONS = ["None", "PCOD / PCOS", "Thyroid", "Diabetes", "Other"];
const DIETS = ["Vegetarian", "Non-Vegetarian", "Omnivorous (Meat & Veg)", "Eggetarian"];

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [answers, setAnswers] = useState<QuizState>({
    goal: "",
    condition: "",
    diet: "",
  });

  const handleNext = (key: keyof QuizState, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    
    if (step === 3) {
      // Finish quiz and simulate calculation
      setIsCalculating(true);
      setStep(4);
      setTimeout(() => {
        setIsCalculating(false);
      }, 2500);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ goal: "", condition: "", diet: "" });
  };

  const getRecommendedPlan = () => {
    if (answers.condition === "PCOD / PCOS") return "PCOD/PCOS Nutrition Plan";
    if (answers.condition === "Thyroid") return "Thyroid Management Plan";
    if (answers.condition === "Diabetes") return "Diabetes Management Plan";
    if (answers.goal === "Lose Weight") return "Fat Loss Program";
    if (answers.goal === "Gain Muscle") return "Weight Gain & Muscle Plan";
    return "Balanced Online Counseling";
  };

  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-200/40 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Find Your Perfect Plan
          </h2>
          <p className="text-lg text-stone-600">
            Take this 30-second quiz to discover which customized diet strategy is scientifically best for your body.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden relative min-h-[400px] flex flex-col">
          
          {/* Progress Bar */}
          {step <= 3 && (
            <div className="w-full h-1.5 bg-stone-100">
              <motion.div 
                className="h-full bg-brand-500"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
          )}

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center font-serif">What is your primary health goal?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GOALS.map((goal) => (
                      <button
                        key={goal}
                        onClick={() => handleNext("goal", goal)}
                        className="p-4 rounded-xl border-2 border-stone-100 hover:border-brand-500 hover:bg-brand-50 text-stone-700 font-semibold transition-all text-left flex justify-between items-center group"
                      >
                        {goal}
                        <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-brand-500 transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center font-serif">Do you have any of these conditions?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CONDITIONS.map((condition) => (
                      <button
                        key={condition}
                        onClick={() => handleNext("condition", condition)}
                        className="p-4 rounded-xl border-2 border-stone-100 hover:border-brand-500 hover:bg-brand-50 text-stone-700 font-semibold transition-all text-left flex justify-between items-center group"
                      >
                        {condition}
                        <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-brand-500 transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center font-serif">What is your dietary preference?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DIETS.map((diet) => (
                      <button
                        key={diet}
                        onClick={() => handleNext("diet", diet)}
                        className="p-4 rounded-xl border-2 border-stone-100 hover:border-brand-500 hover:bg-brand-50 text-stone-700 font-semibold transition-all text-left flex justify-between items-center group"
                      >
                        {diet}
                        <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-brand-500 transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CALCULATING OR RESULT */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full text-center py-8"
                >
                  {isCalculating ? (
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <div className="relative w-20 h-20">
                        <svg className="animate-spin w-full h-full text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <Sparkles className="absolute inset-0 m-auto text-brand-500 animate-pulse w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-stone-800 font-serif">Analyzing your profile...</h3>
                      <p className="text-stone-500">Finding the perfect nutritional strategy based on your answers.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-2">Perfect Match Found</p>
                      <h3 className="text-3xl font-bold text-stone-900 mb-4 font-serif">
                        {getRecommendedPlan()}
                      </h3>
                      <p className="text-stone-600 mb-8 max-w-md mx-auto">
                        Based on your goal to {answers.goal.toLowerCase()} while maintaining a {answers.diet.toLowerCase()} diet, this is the most effective, science-backed approach for your body.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                        <a 
                          href="#contact-form"
                          onClick={() => {
                            // Optionally populate the form's state here if they were shared context,
                            // but jumping to the form is standard.
                            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-8 py-4 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/30"
                        >
                          Book This Plan
                        </a>
                        <button 
                          onClick={resetQuiz}
                          className="px-8 py-4 bg-stone-100 text-stone-600 font-bold rounded-xl hover:bg-stone-200 transition-colors flex items-center justify-center gap-2"
                        >
                          <RotateCcw size={18} />
                          Retake Quiz
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
