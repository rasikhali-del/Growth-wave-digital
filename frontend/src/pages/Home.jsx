import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>
          Growth Wave Digital | AI-Powered Digital Marketing Agency | SEO, Web Development & Lead Generation
        </title>

        <meta
          name="description"
          content="Grow your business with Growth Wave Digital. We provide SEO, Local SEO, Social Media Marketing, Lead Generation, WordPress Development, Shopify Management, AI Automation and Content Marketing services for businesses worldwide."
        />

        <meta
          property="og:title"
          content="Growth Wave Digital | AI-Powered Digital Marketing Agency"
        />

        <meta
          property="og:description"
          content="Helping businesses generate more leads, increase revenue and dominate online with AI-powered digital marketing."
        />

        <meta
          property="og:image"
          content="https://www.growthwave.site/og-image.jpg"
        />

        <meta
          property="og:url"
          content="https://www.growthwave.site/"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Growth Wave Digital | AI-Powered Digital Marketing Agency"
        />

        <meta
          name="twitter:description"
          content="Helping businesses grow with SEO, AI Automation, Web Development and Lead Generation."
        />

        <meta
          name="twitter:image"
          content="https://www.growthwave.site/og-image.jpg"
        />

        <link
          rel="canonical"
          href="https://www.growthwave.site/"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Growth Wave Digital",
            url: "https://www.growthwave.site",
            logo: "https://www.growthwave.site/Growth.png",
            email: "marketings073@gmail.com",
            telephone: "+923705856404",
            sameAs: [],
          })}
        </script>
      </Helmet>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
    </>
  );
}