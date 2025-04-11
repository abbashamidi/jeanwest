import React, { useState, useEffect } from "react";

const images = [
  "/images/Carousel/image1.jpg",
  "/images/Carousel/image2.jpg",
  "/images/Carousel/image3.jpg",
  "/images/Carousel/image4.jpg",
];

export default function ImageCarouselHandle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 300); // مدت زمان فید
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300);
  };

  return (
    <div className="w-full md:mt-5 md:mb-10">
      <div className="md:w-[80%] w-full mx-auto relative">
        <button onClick={nextSlide} className="w-full">
          <div className="relative w-full h-[70vh]">
            <img
              src={images[currentIndex]}
              alt="Carousel"
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-1000 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </button>

        {/* دکمه‌های ناوبری */}
        <div className="absolute bottom-4 right-4 flex gap-1 hidden md:block">
          <button onClick={prevSlide} className="aspect-square px-2 bg-white">
            ❮
          </button>
          <button onClick={nextSlide} className="aspect-square px-2 bg-white">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
