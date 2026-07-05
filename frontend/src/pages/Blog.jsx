import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiUser, FiTag } from "react-icons/fi";

const posts = [
  {
    title: "SEO in 2026: The AI Revolution",
    excerpt: "How AI is transforming search engine optimization and what it means for your business.",
    date: "Jun 28, 2026",
    author: "Growth Wave Team",
    category: "SEO",
    slug: "seo-2026-ai-revolution",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "The Ultimate Guide to Local SEO",
    excerpt: "Dominate local search results and attract more customers from your area.",
    date: "Jun 20, 2026",
    author: "Growth Wave Team",
    category: "Local SEO",
    slug: "ultimate-local-seo-guide",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Social Media Trends 2026",
    excerpt: "The latest social media strategies that are driving real business results.",
    date: "Jun 12, 2026",
    author: "Growth Wave Team",
    category: "Social Media",
    slug: "social-media-trends-2026",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "PPC Advertising: Maximizing ROI",
    excerpt: "How to structure and optimize your paid campaigns for maximum return.",
    date: "Jun 5, 2026",
    author: "Growth Wave Team",
    category: "Digital Marketing",
    slug: "ppc-maximizing-roi",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Content Marketing That Converts",
    excerpt: "Create content that doesn't just attract visitors — it converts them into customers.",
    date: "May 28, 2026",
    author: "Growth Wave Team",
    category: "Content Marketing",
    slug: "content-marketing-converts",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "AI in Digital Marketing",
    excerpt: "How artificial intelligence is reshaping the digital marketing landscape.",
    date: "May 20, 2026",
    author: "Growth Wave Team",
    category: "AI",
    slug: "ai-digital-marketing",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
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
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
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
    </motion.main>
  );
}