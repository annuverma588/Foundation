import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
        {/* Top */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-xl">🌱</div>
              <div>
                <div className="font-black text-lg">HopeForward</div>
                <div className="text-green-400 text-xs tracking-widest">FOUNDATION</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering lives through education, health, and community development since 2013.
            </p>
            <div className="flex gap-3">
              {["𝕏", "f", "in", "📷"].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center text-sm transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "About", links: ["Our Story", "Impact", "Team", "Careers", "Press"] },
            { title: "Programs", links: ["Education", "Healthcare", "Livelihood", "Women Empowerment", "Campaigns"] },
            { title: "Get Involved", links: ["Donate", "Volunteer", "Corporate Partners", "Newsletter", "Contact"] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-black text-sm tracking-widest uppercase text-green-400 mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-7xl mx-auto px-6 py-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <p className="text-gray-300 font-medium">Subscribe to our newsletter for impact updates</p>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-green-400 transition-colors"
              />
              <button className="bg-green-500 hover:bg-green-400 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2025 HopeForward Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="/reports" className="hover:text-white transition-colors">Annual Report</a>
          </div>
        </div>
      </footer>
  );
}


// REUSABLE COLUMN
function FooterCol({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        {items.map((item, i) => (
          <li
            key={i}
            className="hover:text-white cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}