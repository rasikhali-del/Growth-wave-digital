import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "SEO", path: "/services/seo" },
    { label: "Social Media Marketing", path: "/services/social-media" },
    { label: "Lead Generation", path: "/services/lead-generation" },
    { label: "Web Development", path: "/services/web-development" },
    { label: "Content Creation", path: "/services/content-creation" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "Work With Us", path: "/work-with-us" },
  ],
  Support: [
    { label: "Privacy Policy", path: "#" },
    { label: "Terms of Service", path: "#" },
    { label: "FAQ", path: "/#faq" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/growth_wave_digital/",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zM17.5 6.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587130524928",
    path: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@growth_wave_digital?lang=en-GB",
    path: "M16.5 2h-3v13.5a2.5 2.5 0 11-2.5-2.5c.17 0 .34.01.5.04V9.9a5.5 5.5 0 105.5 5.5V8.2a7.9 7.9 0 004.5 1.4V6.6a4.9 4.9 0 01-4.5-4.6z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white relative overflow-hidden">
      <br></br>
      <br></br>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-wide py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="text-lg font-bold">Growth<span className="text-primary">Wave</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI-powered digital marketing agency helping businesses scale with data-driven strategies.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-gray-500 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Growth Wave Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}