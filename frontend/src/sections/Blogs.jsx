import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiUser } from "react-icons/fi";
import { posts } from "../sections/posts";

export default function Blogs() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="section-padding relative bg-gradient-to-b from-transparent via-purple-50/10 to-transparent" id="blog">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Latest <span className="text-gradient">Insights</span>
            </h2>
          </div>
          <Link to="/blog" className="btn-secondary text-sm">
            View All Posts <FiArrowRight />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="h-48 overflow-hidden relative cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><FiClock size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><FiUser size={12} /> {post.author}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}