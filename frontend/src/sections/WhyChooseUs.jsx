import { motion } from "framer-motion";
import { FiBarChart2, FiCpu, FiFileText, FiUsers, FiTrendingUp, FiAward } from "react-icons/fi";

const reasons = [
  { icon: FiBarChart2, title: "Proven ROI", desc: "Our clients see an average 300%+ return on their marketing investment within 90 days." },
  { icon: FiCpu, title: "AI-Powered Strategies", desc: "We leverage cutting-edge AI to optimize campaigns and predict market trends." },
  { icon: FiFileText, title: "Transparent Reporting", desc: "Real-time dashboards with clear, actionable insights into every metric." },
  { icon: FiUsers, title: "Dedicated Experts", desc: "You get a team of specialists who know your industry inside and out." },
  { icon: FiTrendingUp, title: "Scalable Growth", desc: "Systems and processes designed to scale your business to 7, 8, 9 figures." },
  { icon: FiAward, title: "Long-Term Results", desc: "Sustainable growth strategies that deliver value for years, not just months." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
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
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Why <span className="text-gradient">Growth Wave</span> Digital?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            We combine AI innovation with proven marketing expertise to deliver unmatched results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 110, damping: 14 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className="group relative glass-card rounded-2xl p-8 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-purple-500/5" />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300"
              >
                <item.icon className="text-white text-2xl" />
              </motion.div>
              <h3 className="relative text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="relative text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}