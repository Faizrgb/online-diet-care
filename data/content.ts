import { 
  Leaf, 
  Activity, 
  Heart, 
  Scale, 
  Video, 
  MilkOff, 
  Wind, 
  ArrowDownUp
} from 'lucide-react';

export const siteData = {
  global: {
    brandName: "OnlineDietCare",
    contactPhone: "+91-7217282378",
    contactEmail: "ridahasan102@gmail.com",
    instagramUrl: "https://instagram.com/onlinedietcare",
  },
  hero: {
    title: "Healthy Eating, Made Personal.",
    subtitle: "Sustainable Diet Plans for Every Goal",
    description: "No matter your goal - weight loss, managing a medical condition, or healthy eating - our experts have a personalized plan just for you.",
    ctaText: "Get Your Custom Plan",
  },
  about: {
    title: "About the Dietician",
    content: "With years of experience in clinical nutrition and online diet counseling, we specialize in creating sustainable, results-driven diet charts. We believe in eating right, not eating less. Our customized plans fit seamlessly into your lifestyle, ensuring you achieve your health goals without giving up the joy of eating.",
    imagePlaceholder: "/about-dietician.jpg" // Need to generate or use placeholder
  },
  plans: [
    {
      id: "basic-counseling",
      title: "Basic Counseling",
      description: "A foundational session to understand your current habits, identify your needs, and receive expert guidance on which plan will yield the best results.",
      icon: "MessageCircle",
      price: "₹399/-"
    },
    {
      id: "fat-loss",
      title: "Fat Loss",
      description: "Achieve your fat loss goals with personalized, calorie-controlled plans that maximize fat burning while maintaining energy levels.",
      icon: "Leaf", // We map this in the component
    },
    {
      id: "diabetes",
      title: "Diabetes Management",
      description: "Stabilize blood sugar levels with balanced, high-fiber diets designed to manage diabetes effectively while promoting overall health.",
      icon: "Activity",
    },
    {
      id: "pcod-pcos",
      title: "PCOD/PCOS Nutrition",
      description: "Manage hormonal imbalances with diets that help regulate insulin levels, reduce inflammation, and improve fertility.",
      icon: "Heart",
    },
    {
      id: "thyroid",
      title: "Thyroid Management",
      description: "Balanced meal plans targeting thyroid regulation to reduce inflammation, fatigue, and other related symptoms.",
      icon: "Wind",
    },
    {
      id: "online-counseling",
      title: "Online Diet Counselling",
      description: "Personalized online counseling sessions through video calls or chats. Get plans, meal suggestions, and follow-ups from the comfort of home.",
      icon: "Video",
    },
    {
      id: "lactose-intolerance",
      title: "Lactose Intolerance Diet Plan",
      description: "Customized dairy-free diet plans ensuring you receive all essential nutrients, including calcium and vitamin D, without discomfort.",
      icon: "MilkOff",
    },
    {
      id: "anti-acidity",
      title: "Anti-Acidity",
      description: "Soothe acid reflux and improve digestion with a low-acid diet that eliminates trigger foods and focuses on gut-friendly ingredients.",
      icon: "Wind",
    },
    {
      id: "weight-loss-gain",
      title: "Weight Loss & Weight Gain",
      description: "Whether you want to shed pounds safely or build healthy mass, we create nutrient-dense plans to hit your exact target weight.",
      icon: "ArrowDownUp",
    }
  ],
  process: [
    { step: 1, title: "Book Consultation", desc: "Schedule a call to discuss your health history and goals." },
    { step: 2, title: "Get Your Plan", desc: "Receive a fully customized diet chart tailored to your body." },
    { step: 3, title: "Weekly Check-ins", desc: "We monitor your progress and tweak the plan as needed." },
    { step: 4, title: "Achieve Results", desc: "Hit your targets and learn sustainable healthy habits." }
  ],
  faq: [
    {
      question: "How do I know which diet plan is right for me?",
      answer: "During our initial consultation, we assess your health goals, medical history, and lifestyle to recommend the perfect customized plan."
    },
    {
      question: "Are the meals hard to prepare?",
      answer: "Not at all. We focus on simple, easily available ingredients and provide recipes that fit into your busy schedule."
    },
    {
      question: "Do you offer vegetarian/vegan options?",
      answer: "Absolutely! We customize all plans based on your dietary preferences, including vegetarian, vegan, and gluten-free diets."
    },
    {
      question: "How often will we have check-ins?",
      answer: "We typically schedule weekly or bi-weekly check-ins to track your progress, answer any questions, and adjust the plan if necessary to ensure you keep seeing results."
    },
    {
      question: "Can I still eat out or have cheat meals?",
      answer: "Yes! A sustainable diet includes balance. We teach you how to make smarter choices when eating out and incorporate mindful cheat meals without ruining your progress."
    },
    {
      question: "Will I need to take supplements?",
      answer: "Our primary focus is always on whole foods to meet your nutritional needs. Supplements are only recommended if you have specific medical deficiencies diagnosed by a doctor."
    }
  ]
};
