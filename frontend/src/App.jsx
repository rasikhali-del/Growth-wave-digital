import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Particles from "./components/Particles";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import WorkWithUs from "./pages/WorkWithUs";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Particles />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
