import { useEffect, useState } from "react";

const projects = [
  { img: "https://images.unsplash.com/photo-1581091215361-5d9d46bbcd11?auto=format&fit=crop&w=1200&q=80", title: "Residential Rooftop" },
  { img: "https://images.unsplash.com/photo-1590487989442-5b9e9c0c17f5?auto=format&fit=crop&w=1200&q=80", title: "Commercial Rooftop" },
  { img: "https://images.unsplash.com/photo-1581091227192-2ed60e5c5d56?auto=format&fit=crop&w=1200&q=80", title: "Industrial Installation" },
  { img: "https://images.unsplash.com/photo-1601597111256-78e2f3b7f647?auto=format&fit=crop&w=1200&q=80", title: "Ground-Mounted Solar" },
  { img: "https://images.unsplash.com/photo-1602524813206-3ccfb1e39e0b?auto=format&fit=crop&w=1200&q=80", title: "Solar Park" },
  { img: "https://images.unsplash.com/photo-1602524838323-49d7198a1b0e?auto=format&fit=crop&w=1200&q=80", title: "Hybrid Systems" },
  { img: "https://images.unsplash.com/photo-1602524801647-cf2b8a80e5d3?auto=format&fit=crop&w=1200&q=80", title: "Smart Solar Solutions" },
];

const ProjectsSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Solar Projects
          </h2>
          <p className="text-gray-600 mt-3">
            Rooftop & ground-mounted installations across India
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg">

          {/* Slides */}
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div key={i} className="min-w-full relative group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[420px] object-cover rounded-3xl"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 text-gray-800 p-3 rounded-full transition"
            aria-label="Previous slide"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 text-gray-800 p-3 rounded-full transition"
            aria-label="Next slide"
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
