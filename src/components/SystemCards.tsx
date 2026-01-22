const SystemCards = () => {
  const systems = [
    { id: 1, size: '1 kW', monthlySavings: '₹1,000', unitsPerDay: '6-8', bestFor: '1 BHK Homes', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 2, size: '2 kW', monthlySavings: '₹2,000', unitsPerDay: '12-15', bestFor: '1-2 BHK Homes', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 3, size: '3 kW', monthlySavings: '₹3,000', unitsPerDay: '18-22', bestFor: '2-3 BHK Homes', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: true },
    { id: 4, size: '4 kW', monthlySavings: '₹4,000', unitsPerDay: '24-30', bestFor: '2-3 BHK Homes', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 5, size: '5 kW', monthlySavings: '₹5,000', unitsPerDay: '28-35', bestFor: '3-4 BHK Homes', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 6, size: '6 kW', monthlySavings: '₹6,000', unitsPerDay: '35-42', bestFor: '3-4 BHK Homes', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 7, size: '7 kW', monthlySavings: '₹7,000', unitsPerDay: '42-50', bestFor: 'Large Homes/Offices', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 8, size: '8 kW', monthlySavings: '₹8,000+', unitsPerDay: '45-55', bestFor: 'Large Homes/Offices', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 9, size: '9 kW', monthlySavings: '₹9,000+', unitsPerDay: '50-60', bestFor: 'Large Homes/Offices', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
    { id: 10, size: '10 kW', monthlySavings: '₹10,000+', unitsPerDay: '60-70', bestFor: 'Large Homes/Offices', features: ['WiFi Inverter','Bi-Facial Panels','Net Metering','25 Yr Warranty'], recommended: false },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Choose Your Solar Package</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            All systems include installation, 25-year warranty, PM Surya subsidy processing
          </p>
        </div>

        {/* Cards Grid - Two Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {systems.map((system) => (
            <article
              key={system.id}
              className={`group relative bg-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-green-400 hover:-translate-y-2 h-full ${
                system.recommended ? 'ring-4 ring-green-200/70 bg-green-100/50 border-green-300' : ''
              }`}
            >

              {/* Recommended Badge */}
              {system.recommended && (
                <div className="absolute -top-3 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                   MOST POPULAR
                </div>
              )}

              {/* Title */}
              <div className="text-center mb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-black">{system.size}</h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold uppercase mt-1">{system.bestFor}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-2 bg-green-100 rounded-lg">
                  <div className="font-bold text-green-700">{system.monthlySavings}</div>
                  <div className="text-xs text-green-800">Monthly Savings</div>
                </div>
                <div className="text-center p-2 bg-black/5 rounded-lg">
                  <div className="font-bold text-black">{system.unitsPerDay}</div>
                  <div className="text-xs text-black/70">Units/Day</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-black text-sm mb-2 text-center uppercase tracking-wide">What's Included</h4>
                <ul className="space-y-1 text-sm text-black">
                  {system.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-700 rounded-full mt-1 animate-pulse"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/919714533858?text=Hi%2C%20I%20want%20${system.size}%20Solar%20System`}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition"
              >
                Book {system.size} Now
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SystemCards;
