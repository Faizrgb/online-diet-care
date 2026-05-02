"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";

export default function BmrCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("1.2");
  
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateBMR = (e: React.FormEvent) => {
    e.preventDefault();
    if (!height || !weight || !age) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    // Mifflin-St Jeor Equation
    let baseBmr = 0;
    if (gender === "male") {
      baseBmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
    } else {
      baseBmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
    }

    setBmr(Math.round(baseBmr));
    setTdee(Math.round(baseBmr * parseFloat(activity)));
  };

  const reset = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setBmr(null);
    setTdee(null);
    setActivity("1.2");
  };

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:flex-row-reverse">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
              <Flame className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
              Basal Metabolic Rate (BMR) & Daily Calories
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Your BMR is the number of calories your body burns at rest just to keep you alive. Knowing your BMR and Total Daily Energy Expenditure (TDEE) is crucial for setting up a proper diet plan for fat loss or muscle gain.
            </p>
            <ul className="space-y-4 mb-8 text-stone-600 font-medium">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                <span><strong>Sedentary:</strong> Little to no exercise, desk job.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                <span><strong>Moderate:</strong> Exercise 3-5 times a week.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                <span><strong>Active:</strong> Daily exercise or intense exercise 3-4 times a week.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                <span><strong>Very Active:</strong> Intense exercise 6-7 times a week or physical job.</span>
              </li>
            </ul>
          </motion.div>

          {/* Calculator Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full max-w-md mx-auto"
          >
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-stone-100 relative">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Calorie Calculator</h3>
              
              <form onSubmit={calculateBMR} className="space-y-5">
                
                {/* Gender Toggle */}
                <div className="flex bg-stone-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setGender("male")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${gender === "male" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender("female")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${gender === "female" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
                  >
                    Female
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold text-stone-700 mb-2">Age (yrs)</label>
                    <input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g. 28"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-stone-50 focus:bg-white text-stone-900 font-medium placeholder:text-stone-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="bmr-height" className="block text-sm font-semibold text-stone-700 mb-2">Height (cm)</label>
                    <input
                      id="bmr-height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 175"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-stone-50 focus:bg-white text-stone-900 font-medium placeholder:text-stone-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bmr-weight" className="block text-sm font-semibold text-stone-700 mb-2">Weight (kg)</label>
                  <input
                    id="bmr-weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-stone-50 focus:bg-white text-stone-900 font-medium placeholder:text-stone-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="activity" className="block text-sm font-semibold text-stone-700 mb-2">Activity Level</label>
                  <select
                    id="activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-stone-50 focus:bg-white text-stone-900 font-medium appearance-none cursor-pointer"
                  >
                    <option value="1.2">Sedentary (Little to no exercise)</option>
                    <option value="1.375">Lightly Active (1-3 days/week)</option>
                    <option value="1.55">Moderate (3-5 days/week)</option>
                    <option value="1.725">Active (6-7 days/week)</option>
                    <option value="1.9">Very Active (Physical job/twice a day)</option>
                  </select>
                </div>
                
                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-stone-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-stone-800 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Calculate <ArrowRight size={18} />
                  </button>
                  {bmr && (
                    <button
                      type="button"
                      onClick={reset}
                      className="px-6 py-3 rounded-xl border border-stone-200 font-semibold text-stone-600 hover:bg-stone-50 transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </form>

              {bmr && tdee && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-8 p-6 rounded-2xl bg-orange-50 border border-orange-100 text-center"
                >
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-orange-700 mb-1 uppercase tracking-wider">Your BMR (Resting)</p>
                    <div className="text-3xl font-bold text-stone-900 font-serif">{bmr} <span className="text-lg text-stone-500 font-sans font-medium">kcal/day</span></div>
                  </div>
                  <div className="w-full h-px bg-orange-200/50 mb-4"></div>
                  <div>
                    <p className="text-sm font-semibold text-orange-700 mb-1 uppercase tracking-wider">Daily Maintenance (TDEE)</p>
                    <div className="text-4xl font-bold text-orange-600 font-serif">{tdee} <span className="text-xl text-stone-500 font-sans font-medium">kcal/day</span></div>
                    <p className="text-sm text-stone-600 mt-2 font-medium">Eat this amount to maintain your weight.</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
