import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
// import CallbackForm from "./CallbackForm";

const offices = [
  {
    city: "Agartala (Head Office)",
    address: "Agartala, Tripura 799001, India",
    phone: "+91 70056 82736",
  },
  {
    city: "Udaipur",
    address: "Udaipur, Gomati District, Tripura",
    phone: "+91 98565 52051",
  },
  {
    city: "Dhalai",
    address: "Ambassa, Dhalai District, Tripura",
    phone: "+91 94367 96691",
  },
  {
    city: "North Tripura",
    address: "Dharmanagar, North Tripura",
    phone: "+91 60095 56712",
  },
  {
    city: "Unokoti",
    address: "Kailashahar, Unokoti District",
    phone: "+91 60091 78064",
  },
];

const ContactCTA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const [showCallbackForm, setShowCallbackForm] = useState(false);
  // const [email, setEmail] = useState("");
  // const [isSubscribed, setIsSubscribed] = useState(false);
  // const [isCallbackBlocked, setIsCallbackBlocked] = useState(false);
  // const [blockTimeRemaining, setBlockTimeRemaining] = useState<string>('');

  // Check localStorage on component mount
  // useEffect(() => {
  //   const checkCallbackStatus = () => {
  //     const callbackData = localStorage.getItem('solar_callback_requested');

  //     if (callbackData) {
  //       const parsed = JSON.parse(callbackData);
  //       const currentTime = new Date().getTime();
  //       const timeDifference = currentTime - parsed.timestamp;
  //       const BLOCK_DURATION = 30 * 60 * 1000;

  //       if (timeDifference < BLOCK_DURATION) {
  //         setIsCallbackBlocked(true);
  //         const remainingTime = BLOCK_DURATION - timeDifference;
  //         const minutes = Math.floor(remainingTime / 60000);
  //         const seconds = Math.floor((remainingTime % 60000) / 1000);
  //         setBlockTimeRemaining(`${minutes}m ${seconds}s`);
  //       } else {
  //         localStorage.removeItem('solar_callback_requested');
  //         setIsCallbackBlocked(false);
  //         setBlockTimeRemaining('');
  //       }
  //     } else {
  //       setIsCallbackBlocked(false);
  //       setBlockTimeRemaining('');
  //     }
  //   };

  //   checkCallbackStatus();

  //   const interval = setInterval(checkCallbackStatus, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const handleCallbackSuccess = () => {
  //   setShowCallbackForm(false);
  //   setIsCallbackBlocked(true);
  //   // Show success notification
  //   alert('✅ Thank you! Your callback request has been submitted. We will contact you within 30 minutes!');
  // };

  // const handleSubscribe = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (email) {
  //     // Add your subscription logic here
  //     console.log("Subscribed:", email);
  //     setIsSubscribed(true);
  //     setTimeout(() => {
  //       setEmail("");
  //       setIsSubscribed(false);
  //     }, 3000);
  //   }
  // };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      hoverColors: "hover:from-[#1877F2] hover:to-[#0C63D4]",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      hoverColors: "hover:from-[#1DA1F2] hover:to-[#0C85D0]",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      hoverColors: "hover:from-[#0A66C2] hover:to-[#004182]",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      hoverColors: "hover:from-[#E4405F] hover:via-[#F77737] hover:to-[#FCAF45]",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      ),
    },
  ];


  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Products", path: "/products" },
    { name: "Benefits", path: "/benefits" },
    { name: "Careers", path: "/about/careers" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-b from-[#1a1f2e] via-[#1f2933] to-[#151a24] text-gray-300 pt-7 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>

        {/* Animated Sun Icon */}
        <motion.div
          className="absolute top-10 right-10 text-yellow-500 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity },
          }}
        >
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            {[...Array(12)].map((_, i) => (
              <rect
                key={i}
                x="11"
                y="1"
                width="2"
                height="3"
                rx="1"
                transform={`rotate(${i * 30} 12 12)`}
              />
            ))}
          </svg>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          {/* Top Section with enhanced spacing */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-5 border-b border-gray-700/50">
            {/* Brand Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Link to="/" className="inline-block mb-6 group">
                <motion.img
                  src={Logo}
                  alt="HR Ignite Innovative India Pvt. Ltd."
                  className="w-48 h-auto transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>

              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Trusted solar & renewable energy solutions for residential and
                commercial customers. Powering a cleaner and sustainable future
                across India.
              </p>

              {/* Enhanced Social Media Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    // href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-800 ${social.hoverColors} rounded-full flex items-center justify-center transition-all duration-300 group overflow-hidden`}
                    aria-label={social.name}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-lg"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-green-300">Certified Solar Partner</span>
              </motion.div>
            </motion.div>

            {/* Quick Links Section - New */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                Quick Links
              </h4>

              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
                    >
                      <motion.svg
                        className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        initial={false}
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </motion.svg>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Offices Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                Our Offices
              </h4>

              <ul className="space-y-2">
                {offices.map((office, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-300 hover:text-green-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                      whileHover={{ x: 3 }}
                    >
                      <span className="text-sm">{office.city}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 text-green-400" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 py-3 space-y-2.5 text-sm bg-gray-800/30 rounded-lg mt-2 border-l-2 border-green-500/50">
                            <div className="flex gap-2.5">
                              <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-400 leading-relaxed">
                                {office.address}
                              </span>
                            </div>

                            <div className="flex gap-2.5">
                              <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <a
                                href={`tel:${office.phone}`}
                                className="text-gray-400 hover:text-green-400 transition-colors duration-200 font-medium"
                              >
                                {office.phone}
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                Get In Touch
              </h4>

              {/* Contact Info with enhanced design */}
              <div className="space-y-3.5 mb-6">
                <motion.a
                  href="tel:+917005682736"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all duration-200 p-2 rounded-lg hover:bg-gray-800/50 group"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-green-600/20 to-emerald-600/20 group-hover:from-green-600 group-hover:to-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300">
                    <Phone className="w-4 h-4 text-green-400 group-hover:text-white" />
                  </div>
                  <span className="font-medium text-sm">+91 70056 82736</span>
                </motion.a>

                <motion.a
                  href="tel:+917005128028"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all duration-200 p-2 rounded-lg hover:bg-gray-800/50 group"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-green-600/20 to-emerald-600/20 group-hover:from-green-600 group-hover:to-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300">
                    <Phone className="w-4 h-4 text-green-400 group-hover:text-white" />
                  </div>
                  <span className="font-medium text-sm">+91 70051 28028</span>
                </motion.a>

                <motion.a
                  href="mailto:contact@igniteinnovativeindialtd.com"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all duration-200 p-2 rounded-lg hover:bg-gray-800/50 group"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-green-600/20 to-emerald-600/20 group-hover:from-green-600 group-hover:to-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300">
                    <Mail className="w-4 h-4 text-green-400 group-hover:text-white" />
                  </div>
                  <span className="font-medium text-sm break-all">igniteinnovativeindialtd.com</span>
                </motion.a>
              </div>

              {/* Request Callback Button */}
              {/* {!isCallbackBlocked ? (
                <button
                  onClick={() => setShowCallbackForm(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Request a Callback
                </button>
              ) : (
                <div className="w-full bg-orange-500/20 border border-orange-500/50 rounded-lg overflow-hidden">
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-orange-300 font-semibold text-xs">✓ Callback Requested</p>
                    <p className="text-orange-200 text-xs mt-1">We'll contact you soon!</p>
                    {blockTimeRemaining && (
                      <div className="flex items-center justify-center gap-1.5 mt-2 bg-orange-600/30 rounded px-2 py-1">
                        <svg className="w-3 h-3 text-orange-300 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-orange-200 text-xs font-mono">{blockTimeRemaining}</span>
                      </div>
                    )}
                  </div>
                </div>
              )} */}

              {/* Newsletter - Enhanced
              <div className="mt-6 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <h5 className="text-white font-semibold mb-2 text-sm flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📬
                  </motion.span>
                  Newsletter
                </h5>
                <p className="text-gray-400 text-xs mb-4">
                  Get solar tips, offers & sustainability news!
                </p>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isSubscribed}
                      className="w-full bg-gray-900/80 border border-gray-600/50 rounded-lg py-2.5 px-4 pr-11 text-gray-300 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all disabled:opacity-50"
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubscribed}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 p-2 rounded-md transition-all disabled:opacity-50"
                    >
                      {isSubscribed ? (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </motion.svg>
                      ) : (
                        <Send className="w-4 h-4 text-white" />
                      )}
                    </motion.button>
                  </div>

                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 accent-green-500 w-3.5 h-3.5"
                    />
                    <span className="text-gray-400">
                      I agree to the{" "}
                      <Link to="/terms" className="text-green-400 hover:text-green-300 transition">
                        terms & conditions
                      </Link>
                    </span>
                  </label>
                </form>
              </div> */}

              {/* WhatsApp Button - Enhanced */}
              <motion.a
                href="https://wa.me/919714533858?text=Hi%2C%20I%20want%20solar%20installation%20details"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">Chat on WhatsApp</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between py-8 text-sm"
          >
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-green-400"
              >
                ☀️
              </motion.span>
              <p>
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">HR Ignite Innovative India Pvt. Ltd.</span>
                {" "}All Rights Reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <Link
                to="/terms"
                className="hover:text-green-400 transition-colors duration-200 font-medium"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/privacy"
                className="hover:text-green-400 transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/sitemap"
                className="hover:text-green-400 transition-colors duration-200 font-medium"
              >
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Callback Form Modal */}
      {/* {showCallbackForm && (
        <CallbackForm
          onClose={() => setShowCallbackForm(false)}
          onSuccess={handleCallbackSuccess}
          onCloseChatbox={() => { }} // No chatbox to close in footer
        />
      )} */}
    </>
  );
};

export default ContactCTA;
