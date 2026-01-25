const SystemComparison = () => {
  const systems = [
    { size: '1 kW', savings: 'Up to ₹1,000', generation: 'Approx. 4–6 units/day', roof: '~64 sq.ft', subsidy: '₹33,000', popular: false },
    { size: '2 kW', savings: 'Up to ₹2,000', generation: 'Approx. 8–10 units/day', roof: '~128 sq.ft', subsidy: '₹66,000', popular: false },
    { size: '3 kW', savings: 'Up to ₹3,000', generation: 'Approx. 12–14 units/day', roof: '~192 sq.ft', subsidy: '₹85,800', popular: true },
    { size: '4 kW', savings: 'Up to ₹4,000', generation: 'Approx. 16–18 units/day', roof: '~256 sq.ft', subsidy: '₹85,800', popular: false },
    { size: '5 kW', savings: 'Up to ₹5,000', generation: 'Approx. 20–22 units/day', roof: '~320 sq.ft', subsidy: '₹85,800', popular: false },
    { size: '6 kW', savings: 'Up to ₹6,000', generation: 'Approx. 24–26 units/day', roof: '~352 sq.ft', subsidy: '₹85,800', popular: false },
    { size: '7 kW', savings: 'Up to ₹7,000', generation: 'Approx. 28–30 units/day', roof: '~416 sq.ft', subsidy: '₹85,800', popular: false },
    { size: '8 kW', savings: 'Up to ₹8,000+', generation: 'Approx. 32–34 units/day', roof: '~480 sq.ft', subsidy: '₹85,800', popular: false },
    { size: '9 kW', savings: 'Up to ₹9,000+', generation: 'Approx. 36–38 units/day', roof: '~544 sq.ft', subsidy: '₹85,800', popular: false },
    { size: '10 kW', savings: 'Up to ₹10,000+', generation: 'Approx. 40–42 units/day', roof: '~608 sq.ft', subsidy: '₹85,800', popular: false }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Compare Solar Power Systems
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compare system capacity, estimated savings, power generation, roof space requirements, and government subsidy benefits.
            All systems include long-term warranties, free servicing & subsidy assistance.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4 text-left">System Size</th>
                <th className="p-4 text-left">Estimated Savings</th>
                <th className="p-4 text-left">Power Generation</th>
                <th className="p-4 text-left">Approx. Roof Area</th>
                <th className="p-4 text-left">Subsidy</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {systems.map((s, i) => (
                <tr
                  key={i}
                  className={`border-b last:border-none ${
                    s.popular ? 'bg-green-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="p-4 font-semibold">
                    {s.size}
                    {s.popular && (
                      <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                  </td>
                  <td className="p-4">{s.savings}</td>
                  <td className="p-4">{s.generation}</td>
                  <td className="p-4">{s.roof}</td>
                  <td className="p-4">{s.subsidy}</td>
                  <td className="p-4">
                    <a
                      href={`https://wa.me/919714533858?text=Hi%2C%20I%20want%20${s.size}%20Solar%20System`}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Common Benefits */}
        <div className="mt-10 text-center text-gray-700">
          <p className="font-semibold mb-2">All systems include:</p>
          <p className="text-sm">
            Bi-Facial Solar Panels • Net Metering • 27 Years Panel Warranty •
            10 Years Inverter Warranty • Lifetime Structure Warranty •
            5 Years Free Servicing
          </p>
        </div>

      </div>
    </section>
  );
};

export default SystemComparison;
