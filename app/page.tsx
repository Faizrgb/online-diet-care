import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Quiz from "@/components/Quiz";
import BmiCalculator from "@/components/BmiCalculator";
import BmrCalculator from "@/components/BmrCalculator";
import MacroPlate from "@/components/MacroPlate";
import Process from "@/components/Process";
import InstagramMarquee from "@/components/InstagramMarquee";
import Transformation from "@/components/Transformation";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Plans />
      <BmiCalculator />
      <BmrCalculator />
      <MacroPlate />
      <Process />
      <Transformation />
      <InstagramMarquee />
      <FAQ />
      <Quiz />
      <Contact />
      <Footer />
      <LeadMagnet />
    </main>
  );
}
