import Logo from "../Assets/logo.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface NavbarProps {
  onBookNowClick?: () => void;
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookNowClick, onContactClick }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { title: "Home", path: "/", submenu: [] },
    {
      title: "About Us",
      path: "/about",
      submenu: [
        { name: "Company", path: "/about/company" },
        { name: "Team", path: "/about/team" },
        { name: "Careers", path: "/about/careers" }
      ]
    },
    {
      title: "Benefits",
      path: "/benefits",
      submenu: [
        { name: "Cost Saving", path: "/benefits/cost-saving" },
        { name: "Eco Friendly", path: "/benefits/eco-friendly" },
        { name: "Government Subsidy", path: "/benefits/subsidy" }
      ]
    },
    {
      title: "Projects",
      path: "/projects",
      submenu: [
        { name: "Residential", path: "/projects/residential" },
        { name: "Commercial", path: "/projects/commercial" },
        { name: "Industrial", path: "/projects/industrial" }
      ]
    },
    {
      title: "Products",
      path: "/products",
      submenu: []
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100"
            : "bg-white shadow-md"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO - Enhanced with solar icon */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={Logo}
                  alt="HR Ignite Solar"
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:drop-shadow-lg"
                />
                {/* Animated glow effect on logo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-orange-400/20 rounded-full blur-xl -z-10"
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              <div className="leading-tight">
                <div className="text-green-700 font-bold text-base tracking-wide flex items-center gap-1.5">
                  <span>HR IGNITE</span>
                  <motion.span
                    className="text-yellow-500 text-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    ☀️
                  </motion.span>
                </div>
                <div className="text-orange-500 font-semibold text-xs tracking-wide">
                  Innovative India Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* DESKTOP MENU - Enhanced with better spacing */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.title)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className="relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300 capitalize"
                  >
                    {item.title}
                    {item.submenu.length > 0 && (
                      <motion.svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        animate={{ rotate: hoveredItem === item.title ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}

                    {/* Animated underline effect */}
                    {hoveredItem === item.title && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </Link>

                  {/* Enhanced Dropdown Menu */}
                  {item.submenu.length > 0 && (
                    <AnimatePresence>
                      {hoveredItem === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-green-100 overflow-hidden z-50"
                        >
                          {/* Decorative gradient top bar */}
                          <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600" />

                          <div className="py-2">
                            {item.submenu.map((sub, idx) => (
                              <motion.div
                                key={sub.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  to={sub.path}
                                  className="group/item flex items-center px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700 transition-all duration-200"
                                >
                                  <span className="flex-1 font-medium">{sub.name}</span>
                                  <motion.svg
                                    className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                  </motion.svg>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Divider */}
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2" />

              {/* Contact Us button with icon */}
              <motion.button
                type="button"
                onClick={onContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300 rounded-lg hover:bg-green-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </motion.button>

              {/* Book Now CTA - Enhanced with gradient and animation */}
              <motion.button
                type="button"
                onClick={onBookNowClick}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-lg overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Book Now</span>
                  <motion.svg
                    className="w-4 h-4"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>

                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>
            </div>

            {/* MOBILE MENU BUTTON - Enhanced */}
            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 text-green-700 hover:from-green-100 hover:to-emerald-100 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={open ? "open" : "closed"}
                className="flex flex-col gap-1.5"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="w-6 h-0.5 bg-green-700 rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-green-700 rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="w-6 h-0.5 bg-green-700 rounded-full"
                />
              </motion.div>
            </motion.button>
          </div>
        </nav>

        {/* MOBILE MENU - Enhanced with animations */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-gradient-to-b from-white to-green-50/30 backdrop-blur-lg border-t border-green-100"
            >
              <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 capitalize"
                    >
                      {item.title}
                    </Link>

                    {item.submenu.length > 0 && (
                      <div className="pl-6 mt-1 space-y-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50/50 rounded-lg transition-all duration-200"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent my-4" />

                {/* Mobile Contact Us */}
                <motion.button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onContactClick?.();
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-700 font-bold py-3.5 rounded-xl transition-all hover:bg-green-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </motion.button>

                {/* Mobile Book Now */}
                <motion.button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onBookNowClick?.();
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-center font-bold py-3.5 rounded-xl transition-all shadow-lg"
                >
                  <span>Book Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
