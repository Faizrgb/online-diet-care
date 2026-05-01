# 🥗 Online Diet Care Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)

A premium, highly-interactive, and conversion-optimized web platform built for professional dieticians and nutritionists. Engineered to deliver a modern, app-like experience with smooth animations, dynamic calculators, and seamless lead generation.

## ✨ Key Features

* **Interactive "Find Your Plan" Quiz:** A dynamic, multi-step widget that analyzes user goals, medical conditions, and dietary preferences to automatically recommend the perfect customized nutrition plan.
* **Before & After Transformation Slider:** A highly engaging, touch-friendly image comparison slider that allows prospective clients to visually interact with real transformation results.
* **Smart Lead Generation:** A non-intrusive "Free 1-Day Meal Plan" slide-over modal triggered by scroll depth. It captures emails and submits them silently in the background via secure AJAX.
* **Advanced Health Calculators:** Built-in BMI and BMR/TDEE (Mifflin-St Jeor) calculators to provide immediate, personalized metabolic insights to users.
* **Infinite Instagram Marquee:** A frosted-glass, auto-scrolling gallery showcasing high-quality nutritional content with dynamic hover-reveal metrics (views and likes).
* **Direct WhatsApp Integration:** 1-click booking and contact functionality that seamlessly opens native email clients or pre-filled WhatsApp conversations.
* **Fully Responsive & SEO Optimized:** Built natively for both mobile and desktop with blazing-fast Next.js Server Components.

## 💻 Tech Stack

This project is built 100% using **TypeScript** for maximum type safety and robustness.

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (with arbitrary value interpolation & glassmorphism utilities)
* **Animations:** Framer Motion
* **Icons:** Lucide React

## 🚀 Getting Started Locally

First, install the required dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Architecture Notes

* **Data Management:** All global configuration, contact information, and plan details are centralized in `data/content.ts` allowing for instant site-wide updates without digging through components.
* **Performance:** Static components (like the Footer and Navbar) are heavily optimized to ensure minimal client-side JavaScript, resulting in perfect Lighthouse scores.

---
*Engineered by [CodeBurp](https://codeburp.vercel.app)*
