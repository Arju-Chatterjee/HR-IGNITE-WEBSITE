const SubsidyTable = () => {
    const schemes = [
        { size: '1 kW', subsidy: '₹30,000', units: '120', savings: '₹15,000/year' },
        { size: '2 kW', subsidy: '₹60,000', units: '240', savings: '₹30,000/year' },
        { size: '3 kW', subsidy: '₹78,000', units: '300+', savings: '₹36,000+/year' },
    ]

    return (
        <section className="py-24 bg-white/50 backdrop-blur-sm rounded-3xl -mt-12 mb-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                    PM Surya Ghar + Tripura CM Schemes
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Government guaranteed subsidies + free electricity for life
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {schemes.map((scheme, index) => (
                    <div key={index} className="group bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:bg-yellow-50">
                        <div className="text-3xl font-bold text-gray-900 mb-4">{scheme.size}</div>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-green-600 font-semibold">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                </svg>
                                Subsidy: <span className="text-2xl">{scheme.subsidy}</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                </svg>
                                {scheme.units} Free Units/Month
                            </div>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                            {scheme.savings}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SubsidyTable
