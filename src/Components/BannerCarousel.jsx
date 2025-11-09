import React from "react";

const BannerCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Web Development",
      subtitle: "Learn to Build Modern Websites",
      image: "https://i.ibb.co/9HJScK28/web-dev.webp",
    },
    {
      id: 2,
      title: "Graphic Design",
      subtitle: "Master the Art of Visual Communication",
      image: "https://i.ibb.co/ZRFhFCrR/R.jpg",
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "Boost Your Brand with Smart Marketing",
      image: "https://i.ibb.co/wNPcWvgS/OIP.webp",
    },
  ];

  return (
    <div className="carousel w-full h-[420px] rounded-xl overflow-hidden shadow-md relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full h-full"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-indigo-200 text-lg font-medium mb-2">
              {slide.subtitle}
            </h3>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              {slide.title}
            </h2>
            <button className="btn bg-indigo-600 border-none hover:bg-indigo-700 text-white">
              Explore Course
            </button>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-3">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle bg-white/70 hover:bg-white/90 text-gray-800 border-none"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > slides.length ? 1 : index + 2}`}
              className="btn btn-circle bg-white/70 hover:bg-white/90 text-gray-800 border-none"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCarousel;
