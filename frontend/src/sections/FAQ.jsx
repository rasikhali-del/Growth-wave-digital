import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    q: "What digital marketing services do you offer?",
    a: "We offer SEO, Local SEO, Social Media Marketing, Lead Generation, Content Creation, WordPress Development, Shopify Management, Video Editing, and complete digital marketing solutions tailored to your business.",
  },
  {
    q: "How do I get started?",
    a: "Simply contact us through our website. We'll discuss your business goals and recommend the best strategy for your needs.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with startups, small businesses, and growing companies, creating customized marketing strategies based on their goals and budget.",
  },
  {
    q: "How long does it take to see results?",
    a: "The timeline depends on the service you choose. Paid advertising can deliver results quickly, while SEO and organic marketing typically require more time to build long-term growth.",
  },
  {
    q: "Do you provide regular progress updates?",
    a: "Yes. We keep our clients informed with regular updates and performance reports so you can track the progress of your marketing campaigns.",
  },
  {
    q: "Can you create a custom marketing plan for my business?",
    a: "Absolutely. Every business is different, so we develop customized strategies based on your industry, goals, target audience, and budget.",
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
