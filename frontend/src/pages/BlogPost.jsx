import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { FiClock, FiUser, FiTag, FiArrowLeft } from "react-icons/fi";
import { posts } from "../sections/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent" />
        <div className="container-wide relative max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8 hover:gap-3 transition-all"
          >
            <FiArrowLeft size={14} /> Back to Blog
          </Link>

          <span className="text-primary text-sm font-semibold uppercase tracking-widest flex items-center gap-1">
            <FiTag size={12} /> {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight text-gray-900">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-1"><FiClock size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><FiUser size={14} /> {post.author}</span>
          </div>

          <div className="h-72 md:h-96 rounded-2xl overflow-hidden mb-10">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </section>
    </motion.main>
  );
}