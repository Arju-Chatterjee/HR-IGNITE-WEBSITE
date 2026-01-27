import Logo from "../Assets/logo.png";
import { useEffect, useState } from "react";

interface NavbarProps {
  onBookNowClick?: () => void;
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookNowClick, onContactClick }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { title: "home", submenu: [] },
    { title: "about us", submenu: ["Company", "Team", "Careers"] },
    { title: "benefits", submenu: ["Cost Saving", "Eco Friendly", "Government Subsidy"] },
    { title: "projects", submenu: ["Residential", "Commercial", "Industrial"] },
    { title: "products", submenu: ["Panels", "Inverters", "Accessories"] },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-sm border-b border-gray-200" : "bg-white"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img src={Logo} alt="HR Ignite" className="h-9 w-auto object-contain" />
            <div className="leading-tight">
              <div className="text-green-700 font-semibold text-sm tracking-wide">
                <span className="font-bold">HR IGNITE</span>
              </div>
              <div className="text-orange-400 font-semibold text-[11px]">
                Innovative India Pvt. Ltd.
              </div>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-700 transition capitalize">
                  {item.title}
                  {item.submenu.length > 0 && (
                    <svg
                      className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {item.submenu.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 w-52 rounded-xl bg-white shadow-lg border
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                  transition-all duration-300 z-50">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-5 py-3 text-gray-700 hover:bg-gray-100 transition"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Us button */}
            <button
              type="button"
              onClick={onContactClick}
              className="text-sm font-medium text-gray-700 hover:text-green-700 transition"
            >
              Contact Us
            </button>

            {/* Book Now CTA */}
            <button
              type="button"
              onClick={onBookNowClick}
              className="ml-4 bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-md text-sm font-medium transition"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800 text-2xl"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white border-t border-gray-200 px-6 py-6 space-y-5">
          {menuItems.map((item) => (
            <div key={item.title}>
              <span className="block font-medium text-gray-700">{item.title}</span>
              <div className="pl-4 mt-1 space-y-1">
                {item.submenu.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="block text-gray-600 hover:text-green-700 transition"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile Contact Us */}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onContactClick?.();
            }}
            className="block w-full border border-green-700 text-green-700 font-medium py-3 rounded-md transition hover:bg-green-50"
          >
            Contact Us
          </button>

          {/* Mobile Book Now */}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onBookNowClick?.();
            }}
            className="block w-full bg-green-700 hover:bg-green-800 text-white text-center font-medium py-3 rounded-md transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
