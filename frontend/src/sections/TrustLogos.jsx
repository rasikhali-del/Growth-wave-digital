import { motion } from "framer-motion";

const logos = [
  { name: "TechCorp", color: "#A22AFF" },
  { name: "MediPlus", color: "#6366F1" },
  { name: "FitZone", color: "#06B6D4" },
  { name: "LegalEagle", color: "#8B5CF6" },
  { name: "RocketShip", color: "#EC4899" },
  { name: "CloudNine", color: "#14B8A6" },
];

export default function TrustLogos() {
  return (
    <section className="py-16 border-y border-gray-100">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 font-medium uppercase tracking-widest mb-10"
        >
          Trusted by growing brands worldwide
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-3 text-gray-300 hover:text-gray-600 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl" style={{ background: logo.color + "15" }}>
                  <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ color: logo.color }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="4" />
                    </svg>
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
