const ContactCTA = () => {
    return (
        <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #0F766E 50%, #1E40AF 100%)' }}>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-xl animate-blob"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-300/20 rounded-full blur-xl animate-blob" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                        Ready For{' '}
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                            ₹0 Electricity Bills
                        </span>
                    </h2>
                    <p className="text-2xl text-blue-100/90 mb-16 max-w-4xl mx-auto leading-relaxed">
                        Free Site Survey • Complete Subsidy Processing • 3-Day Installation •
                        25-Year Warranty • Dedicated Support Team
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid lg:grid-cols-4 gap-8 mb-20 p-12 bg-white/10 backdrop-blur-2xl rounded-4xl border border-white/20">
                    {[
                        { value: '4.7', label: '★ Google Rating', icon: '⭐' },
                        { value: '353+', label: 'Happy Customers', icon: '👥' },
                        { value: '500+', label: 'Systems Installed', icon: '⚡' },
                        { value: '25', label: 'Years Warranty', icon: '🛡️' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center group hover:scale-105 transition-transform">
                            <div className="text-5xl lg:text-6xl mb-4">{stat.icon}</div>
                            <div className="text-4xl lg:text-5xl font-black text-yellow-300 mb-3 group-hover:text-yellow-400 transition-colors">{stat.value}</div>
                            <div className="text-blue-100 font-semibold text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Triple CTA */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <a
                        href="https://wa.me/919714533858?text=Hi%2C%20Please%20schedule%20Solar%20Site%20Visit"
                        className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-black py-8 px-12 rounded-4xl text-2xl shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 text-center"
                    >
                        <svg className="w-10 h-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
                        </svg>
                        WhatsApp Chat
                    </a>

                    <a
                        href="tel:+919714533858"
                        className="group bg-white/30 backdrop-blur-xl border-2 border-white/50 hover:bg-white/50 text-white font-black py-8 px-12 rounded-4xl text-2xl hover:scale-105 hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-4"
                    >
                        <span className="text-3xl">📞</span>
                        Call Instantly
                    </a>

                    <button className="group bg-white text-gray-900 font-black py-8 px-12 rounded-4xl text-2xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-500 border-2 border-white/30">
                        Free Site Visit
                    </button>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-4 gap-12 text-center pt-20 border-t-4 border-white/20">
                    <div className="space-y-4">
                        <div className="text-4xl">📍</div>
                        <div className="text-xl font-bold text-white">Agartala, Tripura</div>
                        <div className="text-blue-100">Doorstep Service</div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-4xl">📱</div>
                        <div className="text-xl font-bold text-white">+91 97145 33858</div>
                        <div className="text-blue-100">24×7 Support</div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-4xl">⭐</div>
                        <div className="text-xl font-bold text-white">PM Surya Approved</div>
                        <div className="text-blue-100">MNRE Vendor</div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-4xl">⚡</div>
                        <div className="text-xl font-bold text-white">3 Day Install</div>
                        <div className="text-blue-100">Net Metering Ready</div>
                    </div>
                </div>
            </div>

            {/* Persistent WhatsApp */}
            <a
                href="https://wa.me/919714533858"
                className="fixed bottom-8 right-8 w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-3xl shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center text-3xl animate-pulse-slow"
                target="_blank" rel="noopener noreferrer"
            >
                💬
            </a>
        </section>
    )
}

export default ContactCTA
