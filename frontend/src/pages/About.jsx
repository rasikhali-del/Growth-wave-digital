import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiTarget, FiEye, FiHeart, FiShield, FiUsers, FiTrendingUp, FiAward } from "react-icons/fi";
import FinalCTA from "../sections/FinalCTA";

const values = [
  { icon: FiTarget, title: "Mission-Driven", desc: "We exist to democratize world-class digital marketing for businesses of all sizes." },
  { icon: FiEye, title: "Radical Transparency", desc: "Every metric, every decision, every result — shared openly with our clients." },
  { icon: FiHeart, title: "Client-First", desc: "Your success is our success. We win when you win." },
  { icon: FiShield, title: "Data Integrity", desc: "All decisions backed by real data, not gut feelings or guesswork." },
  { icon: FiUsers, title: "People & Culture", desc: "A diverse team of innovators committed to excellence." },
  { icon: FiAward, title: "Continuous Learning", desc: "We stay ahead of the curve so our clients stay ahead of competition." },
];

const team = [
  { name: "Ubaid Ahmed", role: "Social media marketing & SEO specialist", image: "/Ubaid.jpeg", position: "center 20%", initials: "UB" },
  { name: "Azeem", role: "Lead generation & Social media marketing Expert", image: "/Azeem.jpeg", position: "center top", initials: "AZ" },
  { name: "Khalil", role: "Video editor & Graphic designer", image: "/Khalil.jpeg", position: "center top", initials: "KH" },
  { name: "Waji", role: "Content Writer", image: "/Waji.jpeg", position: "center top", initials: "W" },
  { name: "Ashir", role: "AI Automation", image: "/Ashir.jpeg", position: "center top", initials: "A" },
  { name: "Rasikh Ali", role: "Web Developer", image: "/unnamed.jpg", position: "center top", initials: "RA" },
];

const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "98%", label: "Client Retention" },
  { value: "4.9/5", label: "Avg. Rating" },
  { value: "300%+", label: "Avg. ROI" },
];

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 right-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        />

        <div className="container-wide relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10"
              >
                About Us
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                We're on a Mission to{" "}
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="text-gradient bg-[length:200%_auto]"
                >
                  Transform Digital Growth
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Growth Wave Digital was founded to bridge the gap between AI innovation and practical marketing results.
                We help businesses scale with data-driven strategies that deliver measurable ROI.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gray-100 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 120, damping: 12 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="text-center cursor-default"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-gradient mb-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/15">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {[
                  "Founded in 2026, Growth Wave Digital started with a simple belief: digital marketing should be accessible, transparent, and results-driven.",
                  "We saw too many agencies charging premium prices for mediocre results. Too much fluff, not enough substance. So we built a different kind of agency — one powered by AI, driven by data, and obsessed with ROI.",
                  "Today, we serve 150+ businesses across multiple industries, delivering measurable growth through innovative strategies and cutting-edge technology.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4">
                {["Mission", "Vision"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{item}</h3>
                    <p className="text-sm text-gray-500">
                      {item === "Mission"
                        ? "Empower businesses with AI-driven marketing that delivers measurable growth."
                        : "Become the world's most trusted digital growth partner for forward-thinking businesses."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/15">
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
                className="glass-card rounded-2xl p-6 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-purple-500/20 transition-colors"
                >
                  <v.icon className="text-xl text-primary" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/15">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">The people behind your growth.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name + i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 100, damping: 14 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                className="group glass-card rounded-3xl p-8 text-center relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
              >
                {/* Glow ring behind avatar */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-purple-500/10" />

                <motion.div
  whileHover={{ scale: 1.06 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="relative w-32 h-32 rounded-3xl mx-auto mb-6 overflow-hidden ring-4 ring-white shadow-xl shadow-primary/25 bg-gradient-to-br from-primary to-purple-600"
>
  {member.image ? (
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      className="w-full h-full object-cover"
      style={{ objectPosition: member.position || "center top" }}
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.nextSibling.style.display = "flex";
      }}
    />
  ) : null}
  <div
    className="w-full h-full flex items-center justify-center text-white text-3xl font-bold"
    style={{ display: member.image ? "none" : "flex" }}
  >
    {member.initials}
  </div>
</motion.div>

                <h3 className="relative text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="relative text-sm text-primary font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </motion.main>
  );
}