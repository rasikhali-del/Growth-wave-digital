import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function WorkWithUs() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Work With Us</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Let's Build Your{" "}
                <span className="text-gradient">Growth Engine</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Tell us about your business and goals. We'll create a custom strategy to drive measurable results.
              </p>

              <div className="space-y-4">
                {[
                  "Free 30-minute strategy call",
                  "Custom proposal tailored to your goals",
                  "No long-term contracts required",
                  "Dedicated account manager",
                  "Real-time performance dashboard",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FiCheckCircle className="text-primary shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Not ready yet?</span> Check out our{" "}
                  <Link to="/services" className="text-primary hover:underline">services</Link>{" "}
                  or browse our{" "}
                  <Link to="/blog" className="text-primary hover:underline">blog</Link>{" "}
                  for expert insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-2">Get Your Free Business Audit</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill in your details and we'll analyze your current digital presence — completely free.
                </p>
                <Form source="audit" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
