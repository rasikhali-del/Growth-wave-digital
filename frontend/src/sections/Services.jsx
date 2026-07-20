import { motion } from "framer-motion";
import { FiSearch, FiMapPin, FiShare2, FiTrendingUp, FiUsers, FiCode, FiShoppingCart, FiEdit, FiVideo, FiCpu } from "react-icons/fi";

const services = [
  { icon: FiSearch, title: "SEO", desc: "Improve your search rankings with data-driven SEO strategies that increase organic traffic." },
  { icon: FiMapPin, title: "Local SEO", desc: "Help local customers find your business and grow your presence in your target area." },
  { icon: FiShare2, title: "Social Media Marketing", desc: "Build a strong brand presence and engage your audience across major social platforms." },
  { icon: FiTrendingUp, title: "Digital Marketing", desc: "Create full-funnel marketing campaigns focused on measurable business growth." },
  { icon: FiUsers, title: "Lead Generation", desc: "Generate high-quality leads that help grow your sales pipeline." },
  { icon: FiCode, title: "WordPress Development", desc: "Build fast, responsive, and SEO-friendly WordPress websites." },
  { icon: FiShoppingCart, title: "Shopify Management", desc: "Manage and optimize your Shopify store for better performance and higher conversions." },
  { icon: FiEdit, title: "Content Creation", desc: "Create engaging content that connects with your audience and supports your marketing goals." },
  { icon: FiVideo, title: "Video Editing", desc: "Produce professional videos that capture attention and strengthen your brand." },
  { icon: FiCpu, title: "AI Automation", desc: "Automate workflows and scale your business with AI." },
];

export default function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="services">
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10"
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Full-Service{" "}
            <span className="text-gradient">Digital Growth</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Comprehensive marketing solutions powered by AI and data-driven strategies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 130, damping: 15 }}
              whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
              className="group relative glass-card rounded-2xl p-6 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-shadow duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-purple-500/5" />

              <motion.div
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-300"
              >
                <service.icon className="text-primary text-xl" />
              </motion.div>
              <h3 className="relative text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}