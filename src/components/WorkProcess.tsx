const steps = [
  {
    step: "Step 01",
    title: "Initial Consultation",
    description: "Connect with us and let’s explore your solar potential.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    step: "Step 02",
    title: "System Design",
    description: "Customize your solar system and discover financing options.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  },
  {
    step: "Step 03",
    title: "Installation & Active",
    description:
      "Upon design approval and financial arrangement, installation begins.",
    image:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
  },
  {
    step: "Step 04",
    title: "System Monitoring",
    description: "Enjoy ongoing support and watch your savings grow.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-24 animate-fadeUp">
          <span className="text-green-600 font-semibold tracking-widest uppercase text-sm">
            How It Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4">
            Our Work Process
          </h2>
        </div>

        {/* Connector Line */}
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-px bg-gray-200"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
            {steps.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fadeUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Badge */}
                <div className="inline-block mb-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-md shadow-sm">
                    {item.step}
                  </span>
                </div>

                {/* Image */}
                <div className="relative w-44 h-44 mx-auto mb-8 transition-all duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-100 group-hover:border-green-200 transition-colors"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-full p-2"
                  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WorkProcess;
