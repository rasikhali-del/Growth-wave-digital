import { useState } from "react";
import { motion } from "framer-motion";
import { FiDollarSign, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(1000);
  const [rate, setRate] = useState(2.5);
  const [aov, setAov] = useState(50);

  const leads = Math.round(visitors * (rate / 100));
  const revenue = leads * aov;

  return (
    <section className="section-padding relative px-4 sm:px-6">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">ROI Calculator</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 px-2">
            Calculate Your <span className="text-gradient">Potential Growth</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10">
          <div className="space-y-6 mb-8">
            <div>
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2 gap-2">
                <span>Monthly Website Visitors</span>
                <span className="text-primary font-bold whitespace-nowrap">{visitors.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="100"
                max="100000"
                step="100"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2 gap-2">
                <span>Current Conversion Rate (%)</span>
                <span className="text-primary font-bold whitespace-nowrap">{rate}%</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2 gap-2">
                <span>Avg. Order Value ($)</span>
                <span className="text-primary font-bold whitespace-nowrap">${aov}</span>
              </label>
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: FiUsers, label: "Monthly Leads", value: leads.toLocaleString(), color: "#A22AFF" },
              { icon: FiTrendingUp, label: "Conversion Rate", value: `${rate}%`, color: "#06B6D4" },
              { icon: FiDollarSign, label: "Potential Revenue", value: `$${revenue.toLocaleString()}`, color: "#10B981" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex sm:block items-center sm:text-center gap-3 sm:gap-0 p-4 rounded-2xl bg-gray-50"
              >
                <item.icon
                  className="sm:mx-auto text-xl mb-0 sm:mb-2 shrink-0"
                  style={{ color: item.color }}
                />
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 break-words">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-xs sm:text-sm text-gray-400 mt-6"
          >
            *Based on conservative estimates. Actual results may vary.
          </motion.p>
        </div>
      </div>
    </section>
  );
}