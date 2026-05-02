"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowRight } from "lucide-react";

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) setCategory("Normal weight");
      else if (bmiValue >= 25 && bmiValue <= 29.9) setCategory("Overweight");
      else setCategory("Obesity");
    }
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50 rounded-l-full opacity-50 -z-10 transform translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6">
              <Activity className="w-8 h-8 text-brand-600" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              Check Your Body Mass Index (BMI)
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Understanding your BMI is the first step towards a healthier you. It gives a quick assessment of your body weight relative to your height. Use our free tool to find out where you stand and get started on the right path.
            </p>
            <ul className="space-y-3 mb-8 text-slate-600 font-medium">
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-400 mr-3"></span> Underweight: &lt; 18.5</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-brand-500 mr-3"></span> Normal: 18.5 - 24.9</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></span> Overweight: 25.0 - 29.9</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span> Obese: &gt; 30.0</li>
            </ul>
          </motion.div>

          {/* Calculator Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full max-w-md mx-auto"
          >
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">BMI Calculator</h3>
              
              <form onSubmit={calculateBMI} className="space-y-5">
                <div>
                  <label htmlFor="height" className="block text-sm font-semibold text-slate-700 mb-2">
                    Height (in cm)
                  </label>
                  <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 font-medium placeholder:text-slate-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold text-slate-700 mb-2">
                    Weight (in kg)
                  </label>
                  <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 font-medium placeholder:text-slate-400"
                    required
                  />
                </div>
                
                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-brand-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Calculate <ArrowRight size={18} />
                  </button>
                  {bmi && (
                    <button
                      type="button"
                      onClick={reset}
                      className="px-6 py-3 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </form>

              {bmi && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-8 p-6 rounded-2xl bg-brand-50 border border-brand-100 text-center"
                >
                  <p className="text-sm font-semibold text-brand-700 mb-1 uppercase tracking-wider">Your Result</p>
                  <div className="text-5xl font-bold text-slate-900 mb-2 font-serif">{bmi}</div>
                  <p className="text-lg font-medium text-slate-700">
                    Category: <span className={`font-bold ${
                      category === 'Normal weight' ? 'text-brand-600' : 
                      category === 'Underweight' ? 'text-blue-500' : 
                      category === 'Overweight' ? 'text-yellow-600' : 'text-red-500'
                    }`}>{category}</span>
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
