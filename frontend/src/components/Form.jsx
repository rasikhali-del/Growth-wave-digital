import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Form({ source = "contact" }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (
    !form.name.trim() ||
    !form.company.trim() ||
    !form.website.trim() ||
    !form.email.trim() ||
    !form.phone.trim() ||
    !form.country.trim() ||
    !form.service.trim() ||
    !form.message.trim()
  ) {
    setError("Please fill in all fields.");
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        company: form.company,
        website: form.website,
        email: form.email,
        phone: form.phone,
        country: form.country,
        service: form.service,
        message: form.message,
        time: new Date().toLocaleString(),
        source: source,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSuccess("Thank you! Your message has been sent successfully.");

    setForm({
      name: "",
      company: "",
      website: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    setError("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { label: "Full Name *", name: "name", type: "text" },
          { label: "Company *", name: "company", type: "text" },
          { label: "Website *", name: "website", type: "url" },
          { label: "Email *", name: "email", type: "email" },
          { label: "Phone *", name: "phone", type: "tel" },
          { label: "Country *", name: "country", type: "text" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/50"
              required
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Service *</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/50"
          required
        >
          <option value="">Select a service</option>
          {["SEO", "Local SEO", "Social Media Marketing", "Digital Marketing", "Lead Generation", "WordPress Development", "Shopify Management", "Content Creation", "Video Editing", "AI Automation"].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/50 resize-none"
          placeholder="Tell us about your project..."
          required
        />
      </div>

      {error && (
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">
          {error}
        </motion.p>
      )}
      {success && (
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 text-sm bg-green-50 px-4 py-3 rounded-xl">
          {success}
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {loading ? <span className="flex items-center gap-2"><span className="loading-spinner" /> Sending...</span> : "Get Started"}
      </motion.button>
    </form>
  );
}