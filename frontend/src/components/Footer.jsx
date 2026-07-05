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

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white relative overflow-hidden">
    <br></br><br></br>
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
              {["M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z", "M2 9l6-5.5L14 9v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9z", "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 2c-.96.57-2.02.98-3.15 1.2A4.47 4.47 0 0011.02 6c0 .35.04.7.1 1.04A12.72 12.72 0 013 2.83a4.47 4.47 0 001.38 5.97A4.47 4.47 0 012 7.82v.06a4.48 4.48 0 003.59 4.39c-.2.05-.4.08-.6.08-.15 0-.3-.02-.44-.04a4.48 4.48 0 004.18 3.11A8.98 8.98 0 011 17.76a12.67 12.67 0 006.87 2.01c8.24 0 12.75-6.83 12.75-12.75 0-.19 0-.38-.01-.57A9.11 9.11 0 0023 3z"].map(
                (path, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={path} />
                    </svg>
                  </a>
                )
              )}
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
