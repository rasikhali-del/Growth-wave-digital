import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { FiClock, FiUser, FiTag, FiArrowLeft } from "react-icons/fi";
import { posts } from "../sections/posts";

function renderContent(content) {
  const blocks = content.split("\n\n").filter(Boolean);

  return blocks.map((block, i) => {
    // Heading
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }

    // Numbered list (e.g. "1. **Bold** rest")
    const lines = block.split("\n");
    const isList = lines.every((line) => /^\d+\.\s/.test(line.trim()));
    if (isList) {
      return (
        <ol key={i} className="list-decimal list-outside pl-5 space-y-3 mb-6 text-gray-600 leading-relaxed">
          {lines.map((line, j) => {
            const text = line.replace(/^\d+\.\s/, "");
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j}>
                {parts.map((part, k) =>
                  k % 2 === 1 ? <strong key={k} className="text-gray-900">{part}</strong> : part
                )}
              </li>
            );
          })}
        </ol>
      );
    }

    // Regular paragraph (support inline **bold**)
    const parts = block.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} className="text-gray-600 leading-relaxed mb-6">
        {parts.map((part, k) =>
          k % 2 === 1 ? <strong key={k} className="text-gray-900">{part}</strong> : part
        )}
      </p>
    );
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

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
            {post.readTime && <span>· {post.readTime}</span>}
          </div>

          <div className="h-72 md:h-[420px] rounded-2xl overflow-hidden mb-10">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <article className="max-w-none">{renderContent(post.content)}</article>

          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">More from the blog</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group glass-card rounded-2xl overflow-hidden block"
                  >
                    <div className="h-32 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-primary">{r.category}</span>
                      <h4 className="font-semibold text-gray-900 mt-1 group-hover:text-primary transition-colors">
                        {r.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.main>
  );
}