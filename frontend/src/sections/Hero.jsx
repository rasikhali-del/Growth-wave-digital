import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBarChart2, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-300/10 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Growth Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Scale Faster With{" "}
              <span className="text-gradient">AI-Powered</span>{" "}
              Digital Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
              Helping businesses generate more leads, sales, and revenue through strategic digital marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/work-with-us" className="btn-primary text-base py-4 px-8">
                Get Your Free Business Audit
                <FiArrowRight className="text-lg" />
              </Link>
              <Link to="/contact" className="btn-secondary text-base py-4 px-8">
                Request a Proposal
              </Link>
            </div>
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-100">
              {[
                { value: "150+", label: "Clients Served", icon: FiUsers },
                { value: "300%", label: "Avg. ROI", icon: FiTrendingUp },
                { value: "4.9", label: "Client Rating", icon: FiBarChart2 },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                    <stat.icon className="text-primary text-lg" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
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
            className="relative"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-16 bg-gradient-to-br from-primary/25 via-transparent to-purple-300/25 rounded-[40px] blur-[70px]" />

              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-white/50"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85&auto=format&fit=crop"
                  alt="Business growth success"
                  className="w-full h-[560px] object-cover"
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
                className="absolute top-8 -right-6 glass-card rounded-2xl p-4 shadow-xl shadow-primary/10 backdrop-blur-xl bg-white/90"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <FiTrendingUp className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Revenue Growth</div>
                    <div className="text-lg font-bold text-gray-900">+284%</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl shadow-primary/10 backdrop-blur-xl bg-white/90"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                    <FiUsers className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Happy Clients</div>
                    <div className="text-lg font-bold text-gray-900">150+</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge - Middle Right */}
              <motion.div
                className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiBarChart2 className="text-white text-2xl" />
              </motion.div>

              {/* Small floating dot accent */}
              <motion.div
                className="absolute bottom-1/3 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30"
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