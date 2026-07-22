import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const serviceData = {
  seo: {
    title: "SEO",
    desc: "Dominate search results with data-driven SEO strategies that drive qualified organic traffic.",
    longDesc: "Our SEO services go beyond keyword rankings. We build comprehensive search strategies that drive sustainable, long-term organic growth. From technical audits to content optimization, every tactic is backed by data.",
    benefits: ["Top 3 Google rankings", "300%+ average traffic increase", "Qualified organic leads", "Long-term sustainable growth", "Real-time rank tracking", "Monthly performance reports"],
    process: ["Technical SEO Audit", "Keyword Research & Strategy", "On-Page Optimization", "Content Strategy", "Link Building", "Performance Tracking"],
  },
  "local-seo": {
    title: "Local SEO",
    desc: "Get found by customers in your area and dominate local search results.",
    longDesc: "We optimize your Google Business Profile, local citations, and location-specific content to ensure you appear in every relevant local search. Perfect for businesses with physical locations.",
    benefits: ["Google Map Pack rankings", "More local phone calls", "Increased foot traffic", "Google Business Profile optimization", "Local citation building", "Review management"],
    process: ["GBP Optimization", "Local Citation Audit", "Review Management", "Local Content Strategy", "Location Pages", "Local Link Building"],
  },
  "social-media": {
    title: "Social Media Marketing",
    desc: "Build a powerful brand presence across all major social platforms.",
    longDesc: "We create and execute social media strategies that build communities, drive engagement, and generate leads. From content creation to ad management, we handle it all.",
    benefits: ["Increased brand awareness", "Higher engagement rates", "Qualified social leads", "Community building", "Ads optimization", "ROI tracking"],
    process: ["Platform Audit", "Content Strategy", "Content Creation", "Community Management", "Paid Advertising", "Analytics & Optimization"],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    desc: "Full-funnel marketing campaigns that deliver measurable results.",
    longDesc: "Comprehensive digital marketing covering SEO, PPC, social, email, and content. We create integrated campaigns that work together to drive maximum ROI.",
    benefits: ["Multi-channel strategy", "Higher conversion rates", "Lower CPA", "Integrated campaigns", "Real-time optimization", "Full-funnel reporting"],
    process: ["Audit & Analysis", "Strategy Development", "Campaign Setup", "Launch & Monitor", "Optimization", "Reporting"],
  },
  "lead-generation": {
    title: "Lead Generation",
    desc: "High-quality lead generation systems that fill your pipeline.",
    longDesc: "Multi-channel lead generation systems designed to attract, engage, and convert your ideal customers. We use AI-powered targeting to find prospects ready to buy.",
    benefits: ["Qualified leads", "Lower cost per lead", "Multi-channel approach", "Automated follow-ups", "Lead scoring", "CRM integration"],
    process: ["Target Audience Research", "Lead Magnet Creation", "Landing Page Design", "Traffic Acquisition", "Lead Nurturing", "Conversion Optimization"],
  },
  "web-development": {
    title: "WordPress Development",
    desc: "Custom WordPress sites built for speed, SEO, and conversions.",
    longDesc: "We build beautiful, fast-loading WordPress websites optimized for search engines and designed to convert visitors into customers. Mobile-first, accessibility-ready, and performance-optimized.",
    benefits: ["Blazing fast load times", "SEO-optimized structure", "Mobile responsive", "Conversion-focused design", "Easy content management", "Security optimized"],
    process: ["Discovery & Planning", "UX/UI Design", "Development", "SEO Integration", "Testing & QA", "Launch & Training"],
  },
  "shopify-management": {
    title: "Shopify Management",
    desc: "Expert Shopify store management and optimization.",
    longDesc: "We manage every aspect of your Shopify store — from product optimization to conversion rate optimization — to maximize your ecommerce revenue.",
    benefits: ["Increased conversion rates", "Higher AOV", "Better product rankings", "Optimized checkout flow", "Inventory management", "Revenue growth"],
    process: ["Store Audit", "Product Optimization", "Design Improvements", "CRO Implementation", "Marketing Integration", "Ongoing Management"],
  },
  "content-creation": {
    title: "Content Creation",
    desc: "Strategic content that educates, engages, and converts.",
    longDesc: "We create high-quality, SEO-optimized content that positions your brand as an authority and drives organic traffic. Blog posts, whitepapers, case studies, and more.",
    benefits: ["Improved SEO rankings", "Authority building", "Lead generation", "Brand storytelling", "Thought leadership", "Engagement growth"],
    process: ["Content Strategy", "Topic Research", "Writing & Editing", "SEO Optimization", "Design & Formatting", "Distribution"],
  },
  "video-editing": {
    title: "Video Editing",
    desc: "Professional video content that captures attention.",
    longDesc: "From social media shorts to brand stories, we create professional video content that stops the scroll and drives engagement. Fast turnaround, high quality.",
    benefits: ["Higher engagement", "Brand storytelling", "Social media growth", "Ad creative", "Professional quality", "Fast turnaround"],
    process: ["Brief & Concept", "Script & Storyboard", "Production Support", "Editing & Post", "Sound Design", "Delivery & Optimization"],
  },
  "ai-automation": {
    title: "AI Automation",
    desc: "Automate workflows and scale your business with AI.",
    longDesc: "We implement AI-powered solutions that automate repetitive tasks, personalize customer experiences, and free up your team to focus on what matters most.",
    benefits: ["Process automation", "Cost reduction", "Scalability", "Personalization", "24/7 operation", "Data-driven insights"],
    process: ["Process Audit", "AI Solution Design", "Implementation", "Integration", "Testing & Training", "Ongoing Optimization"],
  },
};

export default function ServiceDetail() {
  const { service } = useParams();
  const navigate = useNavigate();
  const data = serviceData[service];

  if (!data) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title} Services | Growth Wave Digital</title>

        <meta
          name="description"
          content={data.desc}
        />

        <link
          rel="canonical"
          href={`https://www.growthwave.site/services/${service}`}
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={`${data.title} Services | Growth Wave Digital`}
        />

        <meta
          property="og:description"
          content={data.longDesc}
        />

        <meta
          property="og:url"
          content={`https://www.growthwave.site/services/${service}`}
        />

        <meta
          property="og:image"
          content="https://www.growthwave.site/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={`${data.title} Services`}
        />

        <meta
          name="twitter:description"
          content={data.desc}
        />

        <meta
          name="twitter:image"
          content="https://www.growthwave.site/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: data.title,
            name: `${data.title} Services`,
            description: data.longDesc,
            provider: {
              "@type": "Organization",
              name: "Growth Wave Digital",
              url: "https://www.growthwave.site",
            },
          })}
        </script>
      </Helmet>

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent" />
          <div className="container-wide relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <button onClick={() => navigate("/services")} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
                <FiArrowLeft /> All Services
              </button>
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {data.title}{" "}
                  <span className="text-gradient">Services</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">{data.longDesc}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
                <div className="space-y-3">
                  {data.benefits.map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                    >
                      <FiCheckCircle className="text-primary shrink-0" />
                      <span className="text-gray-700">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-6">Our Process</h2>
                <div className="space-y-3">
                  {data.process.map((step, i) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-4 p-4 rounded-xl glass-card"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-medium text-gray-700">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Link to="/work-with-us" className="btn-primary text-base py-4 px-10">
                Get Started with {data.title} <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </>
  );
}