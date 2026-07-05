import { motion } from "framer-motion";
import { FiTrendingUp, FiBarChart2 } from "react-icons/fi";

const projects = [
  {
    title: "Dental Clinic SEO",
    client: "BrightSmile Dental",
    result: "340% increase in organic traffic",
    before: "150",
    after: "660",
    metric: "Monthly Patients",
    color: "#A22AFF",
  },
  {
    title: "Ecommerce Growth",
    client: "FitGear Store",
    result: "280% revenue increase in 6 months",
    before: "$45K",
    after: "$171K",
    metric: "Monthly Revenue",
    color: "#06B6D4",
  },
  {
    title: "Law Firm Lead Gen",
    client: "Justice Legal Partners",
    result: "420% more qualified leads",
    before: "25",
    after: "130",
    metric: "Leads/Month",
    color: "#10B981",
  },
];

export default function Portfolio() {
  return (
    <section className="section-padding relative" id="portfolio">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Results That <span className="text-gradient">Speak Volumes</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Real data from real campaigns. We let the numbers do the talking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-2">
                <FiTrendingUp className="text-primary" />
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">Case Study</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">Client: {project.client}</p>

              {/* Before vs After */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Before</span>
                  <span className="text-gray-400">After</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-300">{project.before}</span>
                  <span className="text-2xl font-bold" style={{ color: project.color }}>{project.after}</span>
                </div>
                <div className="relative h-3 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                  />
                </div>
                <div className="text-xs text-gray-400 font-medium">{project.metric}</div>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: project.color }}>
                <FiBarChart2 />
                <span>{project.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
