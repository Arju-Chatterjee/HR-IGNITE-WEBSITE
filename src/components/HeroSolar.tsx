const HeroSolar = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden gradient-solar">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse-slow"></div>
            </div>

            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:pl-12">
                        <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/30 mb-12">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white font-semibold text-lg">⭐ 4.7★ (353 Reviews) | PM Surya Approved Vendor</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-none">
                            <div>Your Electricity</div>
                            <div className="mt-4">
                                <span className="text-5xl lg:text-6xl text-yellow-400 font-normal">Bill = </span>
                                <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-8xl lg:text-9xl">₹0</span>
                            </div>
                        </h1>

                        <p className="text-xl lg:text-2xl text-blue-100/90 mb-12 max-w-xl leading-relaxed">
                            3kW to 8kW Rooftop Solar | <span className="font-semibold text-yellow-300">₹78,000 Government Subsidy</span> |
                            Tripura CM Bonus | 100% Bill Elimination | 25-Year Warranty
                        </p>

                        {/* Enhanced CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <a
                                href="https://wa.me/919714533858?text=Hi%2C%20I%20want%20complete%20Solar%20details%20with%20subsidy"
                                className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-black py-5 px-10 rounded-3xl text-xl shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 w-full sm:w-auto"
                            >
                                <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.378-5.033 9.87 9.87 0 011.368-5.031l.342-.341L2.106.592l3.647.998.365-.237A9.86 9.86 0 0110.472.05a9.87 9.87 0 015.031 1.368l.361.214 3.741-.982-.998 3.648.235.374a9.86 9.86 0 011.378 5.033 9.87 9.87 0 01-1.368 5.031l-.342.341-3.745-.998-.365.237a9.86 9.86 0 01-5.03 1.379" />
                                </svg>
                                Get Free Quote (3 Min)
                            </a>

                            <a
                                href="#calculator"
                                className="group bg-white/20 backdrop-blur-xl border-2 border-white/40 hover:bg-white/30 text-white font-semibold py-5 px-10 rounded-3xl text-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Calculate Savings</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4 mt-12">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-sm font-medium">MNRE Approved</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-sm font-medium">ALMM Listed Panels</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                <span className="text-white text-sm font-medium">25 Yr Warranty</span>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Calculator */}
                    <div id="calculator" className="bg-white/20 backdrop-blur-2xl rounded-3xl p-10 lg:p-12 border border-white/30 shadow-2xl animate-float">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Solar Savings</h3>
                            <div className="text-2xl text-yellow-300 font-semibold">Live Calculator</div>
                        </div>

                        <div className="space-y-6">
                            {/* System Selector */}
                            <div>
                                <label className="block text-white/90 text-lg font-semibold mb-4">Select System Size</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {['3 kW', '5 kW', '8 kW'].map((size) => (
                                        <button
                                            key={size}
                                            className="group bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 text-white font-bold py-4 px-6 rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                        >
                                            {size}
                                            <div className="text-xs opacity-75 mt-1">₹78,000 Subsidy</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Results Cards */}
                            <div className="grid lg:grid-cols-2 gap-6 p-8 bg-white/10 rounded-2xl border-2 border-white/20">
                                <div className="text-center p-6">
                                    <div className="text-4xl lg:text-5xl font-black text-yellow-300 mb-2">₹78,000</div>
                                    <div className="text-white/90 text-lg font-semibold">Govt Subsidy</div>
                                </div>
                                <div className="text-center p-6">
                                    <div className="text-4xl lg:text-5xl font-black text-green-300 mb-2">₹0</div>
                                    <div className="text-white/90 text-lg font-semibold">Monthly Bill</div>
                                </div>
                            </div>

                            {/* ROI Section */}
                            <div className="grid md:grid-cols-2 gap-6 p-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-3xl text-center">
                                <div>
                                    <div className="text-4xl font-black text-green-400 mb-2">3-4 Years</div>
                                    <div className="text-green-100 text-lg font-semibold">Payback Period</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-green-400 mb-2">25 Years</div>
                                    <div className="text-green-100 text-lg font-semibold">Free Power</div>
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
