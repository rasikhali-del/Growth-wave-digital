import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiClock, FiUser, FiArrowRight } from "react-icons/fi";
import { posts } from "../sections/posts";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>
          Digital Marketing Blog | Growth Wave Digital
        </title>

        <meta
          name="description"
          content="Read expert articles about SEO, AI Marketing, Lead Generation, Shopify, WordPress and Digital Growth."
        />

        <link
          rel="canonical"
          href="https://www.growthwave.site/blog"
        />
      </Helmet>

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent" />
          <div className="container-wide relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Insights &{" "}
                <span className="text-gradient">Strategies</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert perspectives on digital marketing, SEO, and business growth.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group glass-card rounded-2xl overflow-hidden"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="h-48 overflow-hidden relative cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
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
                    <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><FiClock size={12} /> {post.date}</span>
                      <span className="flex items-center gap-1"><FiUser size={12} /> {post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      Read More <FiArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}