import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiMessageCircle } from "react-icons/fi";
import Form from "../components/Form";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Helmet>
<title>
Contact Growth Wave Digital
</title>

<meta
name="description"
content="Contact Growth Wave Digital today and get your free business audit."
/>

<link
rel="canonical"
href="https://www.growthwave.site/contact"
/>
</Helmet>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Let's Start a{" "}
                <span className="text-gradient">Conversation</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Ready to grow your business? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-5">
                {[
                  { icon: FiMail, label: "Email", value: "marketings073@gmail.com", href: "marketings073@gmail.com" },
                  { icon: FiPhone, label: "Phone", value: "+923705856404", href: "tel:+923705856404" },
                  { icon: FiMessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/923705856404" },
                  { icon: FiMapPin, label: "Location", value: "Phoenix, USA", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                      <item.icon className="text-primary text-xl" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-gray-900 hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium text-gray-900">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form source="contact" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
