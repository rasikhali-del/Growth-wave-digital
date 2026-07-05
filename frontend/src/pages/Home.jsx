import { motion } from "framer-motion";
import Hero from "../sections/Hero";
import ServicesSection from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import Process from "../sections/Process";
import Industries from "../sections/Industries";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import ROICalculator from "../sections/ROICalculator";
import Blogs from "../sections/Blogs";
import FAQ from "../sections/FAQ";
import FinalCTA from "../sections/FinalCTA";

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Process />
      <Industries />
      <Portfolio />
      <Testimonials />
      <ROICalculator />
      <Blogs />
      <FAQ />
      <FinalCTA />
    </motion.main>
  );
}
