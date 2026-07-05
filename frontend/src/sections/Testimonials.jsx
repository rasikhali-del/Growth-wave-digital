import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Owner, BrightSmile Dental",
    content: "Growth Wave Digital transformed our practice. We went from struggling to book appointments to having a fully booked schedule weeks in advance. Their SEO strategy doubled our patient inquiries in just 3 months.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "CEO, FitGear Store",
    content: "Working with Growth Wave was the best investment we made. Our revenue grew 280% and we now have a steady stream of organic traffic. Their team truly understands ecommerce growth.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Managing Partner, Justice Legal Partners",
    content: "We needed more qualified leads and Growth Wave delivered. Their lead generation system brought us 420% more cases. The ROI has been exceptional. Highly recommended.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Owner, Thompson Realty Group",
    content: "The team at Growth Wave Digital is phenomenal. They took our real estate business to new heights with their strategic social media campaigns. We saw a 190% increase in qualified leads.",
    rating: 5,
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setProgressKey((k) => k + 1);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
    setProgressKey((k) => k + 1);
  };

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused, next, progressKey]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.96 }),
  };

  return (
    <section className="section-padding relative bg-gradient-to-b from-transparent via-purple-50/20 to-transparent overflow-hidden">
      {/* Floating background accents */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-3xl p-10 md:p-14 text-center relative absolute inset-0"
              >
                <motion.div
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8"
                >
                  <FiMessageCircle className="text-5xl text-primary/20" />
                </motion.div>

                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 300 }}
                    >
                      <FiStar className="text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic"
                >
                  "{testimonials[current].content}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="font-semibold text-gray-900">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[current].role}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/5 transition-colors"
            >
              <FiChevronLeft />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative h-2.5 rounded-full bg-gray-200 overflow-hidden transition-all duration-300"
                  style={{ width: i === current ? 32 : 10 }}
                >
                  {i === current && (
                    <motion.div
                      key={progressKey}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? undefined : "100%" }}
                      transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-primary rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/5 transition-colors"
            >
              <FiChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}