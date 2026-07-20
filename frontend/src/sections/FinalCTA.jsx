import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiZap } from "react-icons/fi";

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-700 to-purple-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/10">
            <FiZap className="text-yellow-300" />
            Start Your Growth Journey
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Scale
            <br />
            Your Business?
          </h2>
          <p className="text-lg md:text-xl text-purple-200 max-w-xl mx-auto mb-10">
            Join 50+ businesses that trust us to drive their digital growth.
            Let's build your success story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/work-with-us"
              className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 inline-flex items-center gap-2 text-base"
            >
              Start Your Project <FiArrowRight />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2 text-base"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
