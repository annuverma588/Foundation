import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = {
    "ABOUT US": [
      { name: "About NGO", link: "/about" },
      { name: "Our Impact", link: "/impact" },
      { name: "Reach & Presence", link: "/reach" },
      { name: "NGOtones", link: "/ngotones" },
      { name: "Privacy Policy", link: "/privacy" },
    ],
    "OUR WORK": [
      { name: "All Programs", link: "/programs" },
      { name: "Education", link: "/education" },
      { name: "Health", link: "/health" },
      { name: "Livelihood", link: "/livelihood" },
      { name: "Women Empowerment", link: "/women" },
    ],
    CAMPAIGNS: [
      { name: "Blog", link: "/blog" },
      { name: "Shiksha Na Ruke", link: "/shiksha" },
      { name: "Health Cannot Wait", link: "/health-campaign" },
      { name: "She Can Fly", link: "/shecanfly" },
    ],
    "GET INVOLVED": [
      { name: "Donate", link: "/donate" },
      { name: "Volunteer", link: "/volunteer" },
      { name: "Individual Support", link: "/support" },
      { name: "Corporate Partnerships", link: "/corporate" },
      { name: "Careers", link: "/careers" },
    ],
    RESOURCES: [
      { name: "Annual Report", link: "/reports" },
      { name: "Newsletter", link: "/newsletter" },
      { name: "Press Releases", link: "/press" },
      { name: "Impact Stories", link: "/stories" },
    ],
    "CONTACT US": [{ name: "Contact", link: "/contact" }],
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/105 backdrop-blur-xl shadow-lg shadow-green-900/5 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" fillOpacity="0.3"/>
                <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8v2M12 14v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className={`text-lg font-black tracking-tight leading-none block transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
                HopeForward
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${scrolled ? "text-green-600" : "text-green-300"}`}>
                Foundation
              </span>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-1">
            {Object.keys(menu).map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <NavLink
                  to={menu[item][0].link}
                  className={`text-[11px] font-bold tracking-widest px-3 py-2 rounded-lg transition-all duration-200 ${
                    scrolled
                      ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item}
                </NavLink>

                <AnimatePresence>
                  {activeMenu === item && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-2xl shadow-green-900/15 border border-green-50 overflow-hidden"
                    >
                      <div className="p-2">
                        {menu[item].map((sub, i) => (
                          <NavLink
                            key={i}
                            to={sub.link}
                            className={({ isActive }) =>
                              `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                                isActive
                                  ? "bg-green-500 text-white font-medium"
                                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                              }`
                            }
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Search */}
            <AnimatePresence>
              {searchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    onBlur={() => setSearchOpen(false)}
                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:bg-white/20 transition-all"
                  />
                </motion.div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className={`p-2 rounded-full transition-all ${
                    scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </button>
              )}
            </AnimatePresence>

            
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white xl:hidden overflow-y-auto"
          >
            <div className="pt-24 pb-8 px-6">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-400 transition-colors"
                />
              </div>

              {Object.entries(menu).map(([section, items]) => (
                <div key={section} className="mb-6">
                  <p className="text-[10px] font-black tracking-widest text-green-600 mb-2 px-2">{section}</p>
                  {items.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.link}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-all ${
                          isActive ? "bg-green-500 text-white" : "text-gray-700 hover:bg-green-50"
                        }`
                      }
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              ))}

            
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}