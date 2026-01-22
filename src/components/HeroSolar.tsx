import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UNIT_PER_KW = 120; // Average units per month
const TARIFF = 6; // ₹ per unit

const HeroSolar = () => {
  const [selectedKW, setSelectedKW] = useState(3);
  const [monthlySaving, setMonthlySaving] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const plans = Array.from({ length: 10 }, (_, i) => i + 1);

  const rotatingPhrases = [
    "Reduce Your Electricity Bills",
    "Save Money Every Month",
    "Go Green & Sustainable",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // Rotate phrases every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length);
    }, 5000); // 5-second delay
    return () => clearInterval(interval);
  }, []);

  const getSubsidy = (kw: number) => {
    if (kw === 1) return 33000;
    if (kw === 2) return 66000;
    return 85800;
  };

  const calculateSaving = () => {
    setMonthlySaving(selectedKW * UNIT_PER_KW * TARIFF);
    setShowInfo(false);
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509391366360-2e959784a276')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPhrase}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.2, ease: "easeInOut" }} // slower and smooth
                className="font-extrabold leading-tight text-5xl lg:text-6xl"
              >
                {rotatingPhrases[currentPhrase]}
              </motion.h1>
            </AnimatePresence>

            <motion.span
              className="block mt-4 text-7xl lg:text-9xl text-white font-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              With Solar
            </motion.span>

            <motion.p
              className="mt-8 text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Install government-approved rooftop solar systems and save on
              electricity with long-term reliability and subsidy benefits.
            </motion.p>

            <motion.div
              className="mt-10 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="flex items-center gap-3 text-gray-200">
                <span className="text-green-400">✔</span>
                1kW – 10kW Residential Systems
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <span className="text-green-400">✔</span>
                Subsidy up to ₹85,800
              </div>
            </motion.div>
          </div>

          {/* CALCULATOR */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Solar Savings Calculator
            </h3>

            {/* kW selector */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              {plans.map((kw) => {
                const active = selectedKW === kw;
                return (
                  <motion.button
                    key={kw}
                    onClick={() => setSelectedKW(kw)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-xl p-4 text-center transition-all
                      ${active
                        ? "border-2 border-green-700 bg-green-50 shadow-lg"
                        : "border border-gray-200 hover:border-gray-400"
                      }`}
                  >
                    <div className="font-bold text-gray-900">{kw} kW</div>
                    <div className="text-xs text-gray-600 mt-1">
                      ₹{getSubsidy(kw).toLocaleString()}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Button + Info */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={calculateSaving}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold text-lg transition"
              >
                Calculate Savings
              </motion.button>

              {/* Info button */}
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition font-bold text-lg"
              >
                i
              </button>
            </div>

            {/* Info Box */}
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200 text-gray-700 text-sm"
                >
                  <p>
                    <strong>Calculation Breakdown:</strong>
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Selected System: {selectedKW} kW</li>
                    <li>Average Units per Month: {selectedKW * UNIT_PER_KW} units</li>
                    <li>Tariff Rate: ₹{TARIFF} per unit</li>
                    <li>
                      Monthly Savings: ₹{(selectedKW * UNIT_PER_KW * TARIFF).toLocaleString()}
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result */}
            <AnimatePresence>
              {monthlySaving > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-8 bg-green-50 rounded-xl p-6 text-center shadow-md"
                >
                  <div className="text-4xl font-extrabold text-green-700">
                    ₹{monthlySaving.toLocaleString()}
                  </div>
                  <p className="text-green-900 mt-1 font-medium">
                    Estimated Monthly Savings
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSolar;
