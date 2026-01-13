const SystemCards = () => {
    const systems = [
        {
            id: 1,
            size: '3 kW',
            originalPrice: '₹1,85,000',
            subsidy: '₹78,000',
            finalPrice: '₹1,07,000',
            monthlySavings: '₹3,000',
            annualSavings: '₹36,000',
            unitsPerDay: '18-22',
            bestFor: '2-3 BHK Homes',
            features: ['WiFi Inverter', 'Bi-Facial Panels', 'Net Metering', '25 Yr Warranty'],
            recommended: true
        },
        {
            id: 2,
            size: '5 kW',
            originalPrice: '₹2,95,000',
            subsidy: '₹78,000',
            finalPrice: '₹2,17,000',
            monthlySavings: '₹5,000',
            annualSavings: '₹60,000',
            unitsPerDay: '28-35',
            bestFor: '3-4 BHK Homes',
            features: ['WiFi Inverter', 'Bi-Facial Panels', 'Net Metering', '25 Yr Warranty'],
            recommended: false
        },
        {
            id: 3,
            size: '8 kW',
            originalPrice: '₹4,65,000',
            subsidy: '₹78,000',
            finalPrice: '₹3,87,000',
            monthlySavings: '₹8,000+',
            annualSavings: '₹96,000+',
            unitsPerDay: '45-55',
            bestFor: 'Large Homes/Offices',
            features: ['WiFi Inverter', 'Bi-Facial Panels', 'Net Metering', '25 Yr Warranty'],
            recommended: false
        }
    ]

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 to-white/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
                        Choose Your Solar Package
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        All systems include installation, 25-year warranty, PM Surya subsidy processing
                    </p>
                </div>

                {/* Cards Grid - FIXED SPACING */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {systems.map((system) => (
                        <article
                            key={system.id}
                            className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 h-full ${system.recommended ? 'ring-4 ring-blue-100/70 bg-blue-50/50 border-blue-200' : ''
                                }`}
                        >
                            {/* Recommended Badge - FIXED POSITION */}
                            {system.recommended && (
                                <div className="absolute -top-3 left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                    🔥 MOST POPULAR
                                </div>
                            )}

                            {/* System Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                                ⚡
                            </div>

                            {/* Title */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{system.size}</h3>
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                                    {system.bestFor}
                                </span>
                            </div>

                            {/* Pricing - COMPACT */}
                            <div className="text-center mb-8 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                                <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                                    <span className="text-xl line-through text-gray-500 font-medium">₹{system.originalPrice}</span>
                                    <span className="text-lg text-green-600 font-bold">-{system.subsidy}</span>
                                </div>
                                <div className="text-3xl lg:text-4xl font-black text-blue-600 mb-1">
                                    ₹{system.finalPrice}
                                </div>
                                <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">After Subsidy</div>
                            </div>

                            {/* Key Stats - COMPACT GRID */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="text-center p-3 bg-green-50 rounded-xl">
                                    <div className="text-2xl font-bold text-green-600">{system.monthlySavings}</div>
                                    <div className="text-xs text-green-700 font-medium">Monthly Savings</div>
                                </div>
                                <div className="text-center p-3 bg-blue-50 rounded-xl">
                                    <div className="text-2xl font-bold text-blue-600">{system.unitsPerDay}</div>
                                    <div className="text-xs text-blue-700 font-medium">Units/Day</div>
                                </div>
                            </div>

                            {/* Features List - SMALLER FONT */}
                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-800 text-sm mb-3 text-center uppercase tracking-wide">What's Included</h4>
                                <div className="space-y-2">
                                    {system.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2 p-2 bg-white/50 hover:bg-white rounded-lg transition-colors group">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 animate-pulse"></div>
                                            <span className="text-sm text-gray-700 font-medium leading-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <a
                                href={`https://wa.me/919714533858?text=Hi%2C%20I%20want%20${system.size}%20Solar%20System`}
                                className={`w-full block text-center bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 ${system.recommended ? 'ring-2 ring-blue-200/50' : ''
                                    }`}
                            >
                                Book {system.size} Now (3 Day Install)
                            </a>

                            {/* Annual Savings */}
                            {system.recommended && (
                                <div className="mt-6 pt-4 border-t border-blue-100">
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-green-600">{system.annualSavings}/year</div>
                                        <div className="text-xs text-green-700 mt-1">Lifetime Savings: ₹15 Lakh+</div>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                {/* Trust Section */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <span>✅</span>
                        <span>MNRE Approved • 25-Year Warranty • Free Subsidy Processing</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SystemCards
