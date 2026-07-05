import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiSearch, FiMapPin, FiShare2, FiTrendingUp, FiUsers, FiCode, FiShoppingCart, FiEdit, FiVideo, FiCpu } from "react-icons/fi";

const services = [
  { icon: FiSearch, title: "SEO", desc: "Dominate search results with data-driven SEO strategies. We optimize your site for maximum visibility, driving qualified organic traffic that converts into customers.", path: "seo" },
  { icon: FiMapPin, title: "Local SEO", desc: "Get found by customers in your area. Our local SEO strategies put your business on the map — literally — driving foot traffic and local calls.", path: "local-seo" },
  { icon: FiShare2, title: "Social Media Marketing", desc: "Build a powerful brand presence across Instagram, Facebook, LinkedIn, TikTok, and Twitter. We create content that engages and converts.", path: "social-media" },
  { icon: FiTrendingUp, title: "Digital Marketing", desc: "Full-funnel marketing campaigns that deliver measurable results. From awareness to conversion, we cover it all.", path: "digital-marketing" },
  { icon: FiUsers, title: "Lead Generation", desc: "High-quality lead generation systems that fill your pipeline with ready-to-buy prospects. Multi-channel approach for maximum reach.", path: "lead-generation" },
  { icon: FiCode, title: "WordPress Development", desc: "Custom WordPress sites built for speed, SEO, and conversions. Beautiful designs that load fast and rank high.", path: "web-development" },
  { icon: FiShoppingCart, title: "Shopify Management", desc: "Expert Shopify store management. From product optimization to conversion rate optimization, we grow your ecommerce revenue.", path: "shopify-management" },
  { icon: FiEdit, title: "Content Creation", desc: "Strategic content that educates, engages, and converts. Blog posts, whitepapers, case studies, and more.", path: "content-creation" },
  { icon: FiVideo, title: "Video Editing", desc: "Professional video content that captures attention in seconds. Short-form, long-form, ads, and brand stories.", path: "video-editing" },
  { icon: FiCpu, title: "AI Automation", desc: "Automate workflows, personalize customer experiences, and scale your business with cutting-edge AI solutions.", path: "ai-automation" },
];

export default function Services() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent" />
        <div className="container-wide relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Services</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Full-Suite Digital{" "}
              <span className="text-gradient">Growth Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive marketing solutions designed to accelerate your business growth.
              From SEO to AI automation, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/services/${service.path}`}
                  className="block glass-card rounded-2xl p-6 h-full hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-primary text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Learn More <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
