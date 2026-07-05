import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most clients see measurable improvements within 30-60 days. SEO typically takes 3-6 months for significant rankings, while paid campaigns can generate leads within days.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work across multiple industries including dental, fitness, legal, ecommerce, healthcare, real estate, and local service businesses. Our strategies are tailored to each industry's unique dynamics.",
  },
  {
    q: "How much does digital marketing cost?",
    a: "Our pricing varies based on your goals, competition, and scope. We offer packages starting from $1,000/month. Contact us for a custom quote tailored to your business.",
  },
  {
    q: "Do you offer month-to-month contracts?",
    a: "Yes, we offer flexible engagements including month-to-month options. However, we recommend a minimum 3-6 month commitment for optimal results, especially for SEO campaigns.",
  },
  {
    q: "How do you report results?",
    a: "You get access to a real-time dashboard tracking all key metrics. We also provide monthly detailed reports with insights, analysis, and recommendations for continuous improvement.",
  },
  {
    q: "What makes Growth Wave different?",
    a: "We combine AI-powered strategies with proven marketing expertise. Our data-driven approach, transparent reporting, and dedicated team ensure you get maximum ROI from every dollar spent.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section-padding relative" id="faq">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "shadow-md border-primary/20" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-gray-900 text-sm md:text-base">{faq.q}</span>
                <FiChevronDown
                  className={`text-primary text-lg transition-transform duration-300 shrink-0 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
