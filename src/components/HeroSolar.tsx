import { useState } from "react";

const UNIT_PER_KW = 120; // avg units per month
const TARIFF = 6; // ₹ per unit (TSECL approx)

const HeroSolar = () => {
  const [selectedKW, setSelectedKW] = useState(3);
  const [monthlySaving, setMonthlySaving] = useState(0);

  const plans = Array.from({ length: 10 }, (_, i) => i + 1); // 1 to 10 kW

  const getSubsidy = (kw) => {
    if (kw === 1) return 33000;
    if (kw === 2) return 66000;
    return 85800; // 3 kW and above
  };

  const calculateSaving = () => {
    const units = selectedKW * UNIT_PER_KW;
    const saving = units * TARIFF;
    setMonthlySaving(saving);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-green-50 to-orange-100">

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="lg:pl-12">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-green-900 mb-8 leading-none">
              <div>Your Electricity</div>
              <div className="mt-4">
                <span className="text-5xl lg:text-6xl text-orange-500 font-normal">
                  Bill =
                </span>
                <span className="text-transparent bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-8xl lg:text-9xl">
                  ₹0
                </span>
              </div>
            </h1>

            <ul className="text-xl lg:text-2xl text-green-700 mb-12 max-w-xl leading-relaxed list-disc pl-6 space-y-2">
              <li>1kW to 10kW Rooftop Solar Systems</li>
              <li className="font-semibold text-orange-500">
                Upto ₹85,800 Govt Subsidy
              </li>
              <li>Reduce Monthly Electricity Bills</li>
            </ul>
          </div>

          {/* CALCULATOR */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-10 lg:p-12 border border-green-200 shadow-xl">

            <div className="text-center mb-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-green-900 mb-2">
                Solar Savings Calculator
              </h3>
              <div className="text-orange-500 font-semibold">
                Estimated (TSECL)
              </div>
            </div>

            {/* kW BUTTONS WITH SUBSIDY */}
            <div className="grid grid-cols-5 gap-3 mb-8">
              {plans.map((kw) => {
                const isActive = selectedKW === kw;

                return (
                  <button
                    key={kw}
                    onClick={() => setSelectedKW(kw)}
                    className={`rounded-xl p-3 transition text-center
                      ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "bg-white border border-green-200 text-green-800 hover:border-orange-400"
                      }`}
                  >
                    <div className="text-lg font-black">{kw} kW</div>

                    {/* Subsidy line */}
                    <div className="text-sm font-semibold mt-1">
                      <span
                        className={
                          isActive ? "text-white" : "text-orange-500"
                        }
                      >
                        Subsidy{" "}
                      </span>
                      <span
                        className={
                          isActive ? "text-white" : "text-green-600"
                        }
                      >
                        ₹{getSubsidy(kw).toLocaleString()}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CALCULATE BUTTON */}
            <button
              onClick={calculateSaving}
              className="w-full mb-8 bg-gradient-to-r from-green-500 to-orange-500 text-white font-black py-5 rounded-2xl text-xl shadow-lg hover:-translate-y-1 transition"
            >
              Calculate
            </button>

            {/* RESULT */}
            <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl font-black text-green-600">
                ₹{monthlySaving.toLocaleString()}
              </div>
              <div className="text-green-700 font-semibold">
                Estimated Monthly Bill Saving
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSolar;
