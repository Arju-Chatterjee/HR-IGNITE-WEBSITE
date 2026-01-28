import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Avg monthly generation per kW (realistic India rooftop avg)
const UNIT_PER_KW = 120;

// TSECL Domestic Tariff FY 2024–25 (slab-based)
const getTariff = (units) => {
  if (units <= 50) return 4.71;
  if (units <= 150) return 6.26;
  if (units <= 300) return 7.12;
  return 8.32;
};

const HeroSolar = () => {
  const [selectedKW, setSelectedKW] = useState(3);
  const [monthlySaving, setMonthlySaving] = useState(0);
  const [unitRate, setUnitRate] = useState(0);
  const [unitsGenerated, setUnitsGenerated] = useState(0);

  const plans = Array.from({ length: 10 }, (_, i) => i + 1);

  const rotatingPhrases = [
    "Reduce Your Electricity Bills",
    "Save Money Every Month",
    "Go Green & Sustainable",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // Rotate phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-calc on click
  const calculateSaving = (kw) => {
    const units = kw * UNIT_PER_KW;
    const rate = getTariff(units);
    const saving = units * rate;

    setSelectedKW(kw);
    setUnitsGenerated(units);
    setUnitRate(rate);
    setMonthlySaving(saving);
  };

  // initial calculation
  useEffect(() => {
    calculateSaving(selectedKW);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509391366360-2e959784a276')",
      }}
    >
      {/* Overlay */}
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
                transition={{ duration: 1.2, ease: "easeInOut" }}
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
              Install government-approved rooftop solar systems and reduce your
              electricity bills with long-term clean energy reliability.
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
                Real tariff-based savings
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-green-700 hover:bg-green-800 rounded-xl font-bold text-lg text-white transition"
            >
              Get a Quotation
            </motion.button>
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
                    onClick={() => calculateSaving(kw)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.92 }}
                    animate={active ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`rounded-xl p-4 text-center transition-all
                      ${active
                        ? "border-2 border-green-700 bg-green-50 shadow-lg"
                        : "border border-gray-200 hover:border-gray-400"
                      }`}
                  >
                    <div className="font-bold text-gray-900">{kw} kW</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Est. Units: {kw * UNIT_PER_KW}/mo
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* RESULT */}
            <AnimatePresence>
              {monthlySaving > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 bg-green-50 rounded-xl p-6 text-center shadow-md"
                >
                  <div className="text-4xl font-extrabold text-green-700">
                    ₹{monthlySaving.toLocaleString()}
                  </div>
                  <p className="text-green-900 mt-1 font-medium">
                    Estimated Monthly Savings
                  </p>

                  {/* Breakdown */}
                  <div className="mt-4 bg-white rounded-lg p-4 text-sm text-gray-700 border">
                    <div className="font-semibold mb-2">Calculation Breakdown</div>
                    <ul className="space-y-1 text-left">
                      <li>System Size: <b>{selectedKW} kW</b></li>
                      <li>Units Generated: <b>{unitsGenerated} units/month</b></li>
                      <li>Applicable Tariff: <b>₹{unitRate}/unit</b></li>
                      <li>Formula: <b>{unitsGenerated} × {unitRate}</b></li>
                    </ul>
                  </div>
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
