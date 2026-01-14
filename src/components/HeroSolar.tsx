const HeroSolar = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-green-50 to-orange-100">

            {/* Soft Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-blob"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/40 rounded-full blur-3xl animate-blob"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/50 rounded-full blur-2xl animate-pulse-slow"></div>
            </div>

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:pl-12">

                        {/* <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-6 py-3 rounded-2xl border border-green-200 shadow-md mb-12"> */}
                        {/* <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div> */}
                        {/* <span className="text-green-800 font-semibold text-lg">
                                ⭐ 5.0★ (60 Reviews) | PM Surya Approved Vendor
                            </span> */}
                        {/* </div> */}

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

                        <p className="text-xl lg:text-2xl text-green-700 mb-12 max-w-xl leading-relaxed">
                            1kW to 10kW Rooftop Solar |
                            <span className="font-semibold text-orange-500">
                                {" "}₹85,800 Government Subsidy
                            </span>{" "}
                            | 100% Bill Elimination | 30-Year Warranty
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <a
                                href="https://wa.me/919714533858?text=Hi%2C%20I%20want%20complete%20Solar%20details%20with%20subsidy"
                                className="group bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-xl hover:shadow-green-400/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                            >
                                Get Free Quote (3 Min)
                            </a>

                            <a
                                href="#calculator"
                                className="bg-white/70 backdrop-blur-xl border border-green-200 hover:bg-white text-green-800 font-semibold py-5 px-10 rounded-2xl text-xl hover:scale-105 transition-all duration-300"
                            >
                                Calculate Savings
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-4 mt-12">
                            {["MNRE Approved", "ALMM Listed Panels", "25 Yr Warranty"].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-white/70 px-6 py-3 rounded-xl border border-green-200 shadow-sm"
                                >
                                    <div className={`w-3 h-3 ${i === 1 ? "bg-orange-400" : "bg-green-500"} rounded-full`}></div>
                                    <span className="text-green-800 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Calculator */}
                    <div
                        id="calculator"
                        className="bg-white/70 backdrop-blur-2xl rounded-3xl p-10 lg:p-12 border border-green-200 shadow-xl"
                    >
                        <div className="text-center mb-10">
                            <h3 className="text-3xl lg:text-4xl font-bold text-green-900 mb-4">
                                Your Solar Savings
                            </h3>
                            <div className="text-xl text-orange-500 font-semibold">
                                Live Calculator
                            </div>
                        </div>

                        <div className="space-y-6">

                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { size: "1 kW", subsidy: "₹33,000" },
                                    { size: "2 kW", subsidy: "₹66,000" },
                                    { size: "3 kW", subsidy: "₹85,800" },
                                ].map(plan => (
                                    <button
                                        key={plan.size}
                                        className="bg-white border border-green-200 hover:border-orange-400 text-green-800 font-bold py-4 rounded-xl hover:scale-105 transition"
                                    >
                                        {plan.size}
                                        <div className="text-xs text-orange-500 mt-1">
                                            {plan.subsidy} Subsidy
                                        </div>
                                    </button>
                                ))}
                            </div>


                            <div className="grid lg:grid-cols-2 gap-6 p-8 bg-green-50 rounded-2xl border border-green-200">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-orange-500">
                                        ₹78,000
                                    </div>
                                    <div className="text-green-700 font-semibold">Govt Subsidy</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-green-600">
                                        ₹0
                                    </div>
                                    <div className="text-green-700 font-semibold">Monthly Bill</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSolar
