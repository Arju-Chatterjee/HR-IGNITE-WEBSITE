const ContactCTA = () => {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 40%, #FFF7ED 100%)",
      }}
    >
      {/* Soft Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-green-900 mb-8 leading-tight">
            Ready For{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
              ₹0 Electricity Bills
            </span>
          </h2>
          <p className="text-2xl text-green-800 mb-16 max-w-4xl mx-auto leading-relaxed">
            Free Site Survey • Complete Subsidy Processing • 15-Day Installation •
            27-Year Warranty • Dedicated Support Team
          </p>
        </div>

        {/* Stats */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20 p-12 bg-white rounded-4xl shadow-xl">
          {[
            { value: "5.0", label: "★ Google Rating", icon: "⭐" },
            { value: "353+", label: "Happy Customers", icon: "👥" },
            { value: "500+", label: "Systems Installed", icon: "⚡" },
            { value: "27", label: "Years Warranty", icon: "🛡️" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-black text-orange-500 mb-3">
                {stat.value}
              </div>
              <div className="text-green-700 font-semibold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <a
            href="https://wa.me/910056 82736"
            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-black py-8 px-12 rounded-4xl text-2xl shadow-xl hover:scale-105 transition-all text-center"
          >
            💬 WhatsApp Chat
          </a>

          <a
            href="tel:+9170056 82736"
            className="bg-green-800 hover:bg-green-700 text-white font-black py-8 px-12 rounded-4xl text-2xl shadow-xl hover:scale-105 transition-all text-center"
          >
            📞 Call Instantly
          </a>

          <button className="bg-white border-2 border-orange-400 text-orange-600 font-black py-8 px-12 rounded-4xl text-2xl shadow-xl hover:bg-orange-50 hover:scale-105 transition-all">
            Free Site Visit
          </button>
        </div>

        {/* Info */}
        <div className="grid md:grid-cols-4 gap-12 text-center pt-20 border-t border-green-200">
          {[
            ["📍", "Agartala, Tripura", "Doorstep Service"],
            ["📱", "+91 70056 82736", "24×7 Support"],
            ["⭐", "PM Surya Ghar Approved", "MNRE Vendor"],
            ["⚡", "15 Day Install", "Net Metering Ready"],
          ].map(([icon, title, sub], i) => (
            <div key={i} className="space-y-4">
              <div className="text-4xl">{icon}</div>
              <div className="text-xl font-bold text-green-900">{title}</div>
              <div className="text-green-700">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/9170056 82736"
        className="fixed bottom-8 right-8 w-20 h-20 bg-green-500 hover:bg-green-600 text-white rounded-3xl shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-3xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </section>
  );
};

export default ContactCTA;
