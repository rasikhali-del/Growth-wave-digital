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

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-20 bg-gradient-to-br from-primary/20 via-transparent to-purple-300/20 rounded-[40px] blur-[60px]" />

              {/* Main dashboard */}
              <div className="relative glass-card rounded-3xl p-6 shadow-2xl shadow-primary/10 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Dashboard Overview</div>
                  <div className="text-xs text-green-500 font-medium">● Live</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Leads", value: "2,847", change: "+12.5%", color: "from-primary to-purple-600" },
                    { label: "Conversion", value: "4.8%", change: "+2.1%", color: "from-green-500 to-emerald-600" },
                    { label: "Revenue", value: "$128K", change: "+23.7%", color: "from-blue-500 to-cyan-600" },
                  ].map((card) => (
                    <motion.div
                      key={card.label}
                      className="rounded-2xl p-4 bg-gradient-to-br from-white to-purple-50/50 border border-purple-100/50"
                      whileHover={{ y: -2 }}
                    >
                      <div className="text-xs text-gray-500 mb-1">{card.label}</div>
                      <div className="text-xl font-bold text-gray-900">{card.value}</div>
                      <div className="text-xs text-green-500 font-medium">{card.change}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="rounded-2xl p-5 bg-gradient-to-br from-gray-50 to-purple-50/30 border border-gray-100 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-gray-700">Lead Growth</div>
                    <div className="flex gap-2">
                      {["Week", "Month", "Year"].map((t) => (
                        <span key={t} className={`text-xs px-2.5 py-1 rounded-lg ${t === "Month" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <svg viewBox="0 0 300 80" className="w-full">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A22AFF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#A22AFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 60 Q20 70 40 50 Q60 30 80 45 Q100 55 120 35 Q140 15 160 25 Q180 40 200 20 Q220 10 240 18 Q260 25 280 12 Q290 8 300 10" fill="none" stroke="#A22AFF" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M0 60 Q20 70 40 50 Q60 30 80 45 Q100 55 120 35 Q140 15 160 25 Q180 40 200 20 Q220 10 240 18 Q260 25 280 12 Q290 8 300 10 L300 80 L0 80 Z" fill="url(#chartGrad)" />
                  </svg>
                </div>

                {/* Bottom metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { metric: "Leads This Month", value: "342", trend: "↑ 18%" },
                    { metric: "Avg. Response Time", value: "2.4 min", trend: "↓ 12%" },
                    { metric: "Campaign ROI", value: "342%", trend: "↑ 45%" },
                    { metric: "Active Campaigns", value: "12", trend: "+3 new" },
                  ].map((item) => (
                    <div key={item.metric} className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-gray-100">
                      <div>
                        <div className="text-xs text-gray-500">{item.metric}</div>
                        <div className="text-lg font-bold text-gray-900">{item.value}</div>
                      </div>
                      <div className="text-xs text-green-500 font-medium">{item.trend}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 8, 0] }}
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
