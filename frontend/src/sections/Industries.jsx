import { motion } from "framer-motion";
import { FiHeart, FiShield, FiShoppingBag, FiActivity, FiHome, FiMapPin, FiMonitor, FiTrendingUp } from "react-icons/fi";


const industries = [
  { icon: FiHeart, title: "Fitness", color: "#EC4899" },
  { icon: FiShield, title: "Law", color: "#8B5CF6" },
  { icon: FiShoppingBag, title: "Ecommerce", color: "#F59E0B" },
  { icon: FiActivity, title: "Healthcare", color: "#10B981" },
  { icon: FiHome, title: "Real Estate", color: "#6366F1" },
  { icon: FiMapPin, title: "Local Businesses", color: "#A22AFF" },
  { icon: FiTrendingUp, title: "B2B & Marketing Agencies", color: "#EF4444" },
];

export default function Industries() {
  return (
    <section className="section-padding relative bg-gradient-to-b from-transparent via-purple-50/20 to-transparent overflow-hidden">
      {/* Floating background blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10"
          >
            Industries
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            We Serve <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Industry-specific strategies tailored to your unique market.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 150, damping: 14 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative glass-card rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer overflow-hidden"
            >
              {/* Glow that appears on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: `radial-gradient(circle at 50% 30%, ${item.color}25, transparent 70%)` }}
              />

              <motion.div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: item.color + "15", color: item.color }}
                whileHover={{
                  rotate: [0, -10, 10, -6, 0],
                  scale: 1.15,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2.5 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                >
                  <item.icon className="text-2xl" />
                </motion.div>
              </motion.div>

              <h3 className="relative text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {item.title}
              </h3>

              {/* Underline accent on hover */}
              <motion.div
                className="relative h-0.5 rounded-full mt-2"
                style={{ background: item.color }}
                initial={{ width: 0 }}
                whileHover={{ width: 24 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}