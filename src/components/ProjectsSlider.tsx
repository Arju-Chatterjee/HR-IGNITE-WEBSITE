import { useEffect, useState } from "react";

const projects = [
  { img: "src/Assets/Slide Photos/Slide1.jpg", title: "Residential Rooftop" },
  { img: "src/Assets/Slide Photos/Slide2.jpg", title: "Commercial Rooftop" },
  { img: "src/Assets/Slide Photos/Slide3.avif", title: "Industrial Installation" },
  { img: "src/Assets/Slide Photos/Slide4.webp", title: "Ground-Mounted Solar" },
  { img: "src/Assets/Slide Photos/Slide5.png", title: "Solar Park" },
  
];


const ProjectsSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Solar Projects</h2>
          <p className="text-gray-600 mt-3">Rooftop & ground-mounted installations across India</p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div key={i} className="min-w-full relative group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[420px] md:h-[500px] object-cover rounded-3xl"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/1200x500?text=Image+Not+Available";
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold text-center px-4">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 text-gray-800 p-3 rounded-full transition"
            aria-label="Previous slide"
          >
            ❮
          </button>
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
