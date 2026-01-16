const SubsidyTable = () => {
  const schemes = [
    { size: "1 kW", subsidy: "₹33,000", units: "120", savings: "₹15,000/year" },
    { size: "2 kW", subsidy: "₹66,000", units: "240", savings: "₹30,000/year" },
    { size: "3 kW", subsidy: "₹85,800", units: "300+", savings: "₹36,000+/year" },
    { size: "4 kW", subsidy: "₹85,800", units: "480+", savings: "₹48,000+/year" },
    { size: "5 kW", subsidy: "₹85,800", units: "600+", savings: "₹60,000+/year" },
    { size: "6 kW", subsidy: "₹85,800", units: "720+", savings: "₹72,000+/year" },
    { size: "7 kW", subsidy: "₹85,800", units: "840+", savings: "₹84,000+/year" },
    { size: "8 kW", subsidy: "₹85,800", units: "960+", savings: "₹96,000+/year" },
    { size: "9 kW", subsidy: "₹85,800", units: "1080+", savings: "₹1,08,000+/year" },
    { size: "10 kW", subsidy: "₹85,800", units: "1200+", savings: "₹1,20,000+/year" },
  ];

  return (
    <section className="py-24 bg-white rounded-3xl -mt-12 mb-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-4">
          PM Surya Ghar + Tripura CM Schemes
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Government guaranteed subsidies + free electricity for life (1 kW – 10 kW)
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-green-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Size */}
            <div className="text-2xl font-bold text-green-900 mb-3">
              {scheme.size}
            </div>

            {/* Details */}
            <div className="space-y-2 mb-5">
              {/* Subsidy */}
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                Subsidy:
                <span className="text-lg text-orange-600">
                  {scheme.subsidy}
                </span>
              </div>

              {/* Units */}
              <div className="flex items-center gap-2 text-green-700">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                {scheme.units} Units / Month
              </div>
            </div>

            {/* Savings */}
            <div className="text-xl font-bold text-green-800">
              {scheme.savings}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubsidyTable;
