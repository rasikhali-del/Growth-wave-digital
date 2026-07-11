import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBarChart2, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-24 lg:pb-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-300/10 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Growth Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] lg:leading-[1.1] tracking-tight mb-6">
              Scale Faster With{" "}
              <span className="text-gradient">AI-Powered</span>{" "}
              Digital Growth
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              Helping businesses generate more leads, sales, and revenue through strategic digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/work-with-us"
                className="btn-primary text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-8 justify-center"
              >
                Get Your Free Business Audit
                <FiArrowRight className="text-lg" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-8 justify-center"
              >
                Request a Proposal
              </Link>
            </div>
            <div className="grid grid-cols-3 sm:flex sm:items-center gap-4 sm:gap-8 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
              {[
                { value: "150+", label: "Clients Served", icon: FiUsers },
                { value: "300%", label: "Avg. ROI", icon: FiTrendingUp },
                { value: "4.9", label: "Client Rating", icon: FiBarChart2 },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <stat.icon className="text-primary text-base sm:text-lg" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Premium Photo with Floating Stat Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto w-full"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-8 sm:-inset-16 bg-gradient-to-br from-primary/25 via-transparent to-purple-300/25 rounded-[40px] blur-[70px]" />

              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-white/50"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85&auto=format&fit=crop"
                  alt="Business growth success"
                  className="w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[560px] object-cover"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/10" />
              </motion.div>

              {/* Floating stat card - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="absolute top-4 right-2 sm:top-8 sm:-right-6 glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl shadow-primary/10 backdrop-blur-xl bg-white/90"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0">
                    <FiTrendingUp className="text-white text-sm sm:text-lg" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Revenue Growth</div>
                    <div className="text-sm sm:text-lg font-bold text-gray-900">+284%</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="absolute bottom-4 left-2 sm:-bottom-6 sm:-left-6 glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl shadow-primary/10 backdrop-blur-xl bg-white/90"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shrink-0">
                    <FiUsers className="text-white text-sm sm:text-lg" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Happy Clients</div>
                    <div className="text-sm sm:text-lg font-bold text-gray-900">150+</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge - Middle Right (hidden on mobile to avoid overlap) */}
              <motion.div
                className="hidden sm:flex absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl items-center justify-center shadow-lg shadow-orange-500/30"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiBarChart2 className="text-white text-2xl" />
              </motion.div>

              {/* Small floating dot accent (hidden on mobile) */}
              <motion.div
                className="hidden sm:flex absolute bottom-1/3 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl items-center justify-center shadow-lg shadow-emerald-500/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}