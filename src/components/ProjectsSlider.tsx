import { useEffect, useState } from "react";

const projects = [
  "/projects/project12.png",
  "/projects/project13.png",
  "/projects/project16.png",
  "/projects/project18.png",
  "/projects/project19.png",
  "/projects/project20.png",
  "/projects/project11.png",
  
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
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-700 via-green-500 to-orange-500 bg-clip-text text-transparent">
            Our Solar Projects
          </h2>
          <p className="text-gray-700 mt-3">
            Rooftop & ground-mounted installations across India
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">

          {/* Slides */}
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((img, i) => (
              <div key={i} className="min-w-full">
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-[420px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-green-700 p-3 rounded-full shadow-lg transition"
            aria-label="Previous slide"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-green-700 p-3 rounded-full shadow-lg transition"
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
