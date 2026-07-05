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
    <section className="section-padding relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">ROI Calculator</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Calculate Your <span className="text-gradient">Potential Growth</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 md:p-10">
          <div className="space-y-6 mb-8">
            <div>
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Monthly Website Visitors</span>
                <span className="text-primary font-bold">{visitors.toLocaleString()}</span>
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
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Current Conversion Rate (%)</span>
                <span className="text-primary font-bold">{rate}%</span>
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
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Avg. Order Value ($)</span>
                <span className="text-primary font-bold">${aov}</span>
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

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: FiUsers, label: "Monthly Leads", value: leads.toLocaleString(), color: "#A22AFF" },
              { icon: FiTrendingUp, label: "Conversion Rate", value: `${rate}%`, color: "#06B6D4" },
              { icon: FiDollarSign, label: "Potential Revenue", value: `$${revenue.toLocaleString()}`, color: "#10B981" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 rounded-2xl bg-gray-50">
                <item.icon className="mx-auto text-xl mb-2" style={{ color: item.color }} />
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                <div className="text-xs text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-sm text-gray-400 mt-6"
          >
            *Based on conservative estimates. Actual results may vary.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
