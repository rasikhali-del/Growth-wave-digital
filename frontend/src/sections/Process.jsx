import { motion } from "framer-motion";
import { FiSearch, FiLayout, FiPlay, FiTrendingUp } from "react-icons/fi";

const steps = [
  { icon: FiSearch, title: "Discovery", desc: "We dive deep into your business, market, and goals to uncover growth opportunities." },
  { icon: FiLayout, title: "Strategy", desc: "A custom data-driven roadmap tailored to your unique business needs and target audience." },
  { icon: FiPlay, title: "Execution", desc: "Our expert team deploys campaigns with precision, leveraging AI for optimal performance." },
  { icon: FiTrendingUp, title: "Scale", desc: "We analyze, optimize, and scale what works to drive exponential growth." },
];

export default function Process() {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
            Our Process
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            How We <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            A proven 4-step system that transforms your digital presence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gray-100 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-primary/30 via-primary to-primary/30"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, type: "spring", stiffness: 120, damping: 14 }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-xl shadow-primary/20 relative z-10 group-hover:shadow-primary/40 transition-shadow duration-300"
                  >
                    <step.icon className="text-white text-3xl" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.3, type: "spring", stiffness: 400 }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-sm font-bold text-primary z-20"
                  >
                    {i + 1}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}