import React, { useState, useEffect } from "react";

const images = [
  "/images/Carousel/image1.jpg",
  "/images/Carousel/image2.jpg",
  "/images/Carousel/image3.jpg",
  "/images/Carousel/image4.jpg",
];

export default function ImageCarouselHandle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mt-5 mb-10">
      <div className="w-[80%] mx-auto relative">
        {/* تصویر به عنوان دکمه */}
        <button onClick={nextSlide} className="w-full">
          <img
            src={images[currentIndex]}
            alt="Carousel"
            className="w-full h-[70vh] object-cover rounded-lg transition-all duration-500"
          />
        </button>

        {/* دکمه‌های ناوبری کنار هم و پایین سمت راست */}
        <div className="absolute bottom-4 right-4 flex gap-0.5">
          <button
            onClick={prevSlide}
            className="aspect-square px-2 bg-white"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="aspect-square px-2 bg-white"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
