import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the props interface
interface CarouselProps {
  readonly images: string[];
  readonly autoPlay?: boolean;
  readonly interval?: number;
  readonly showDots?: boolean;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  interval = 3000,
  showDots = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Jump to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Set up autoplay
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex]);

  // If no images provided, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-64 bg-gray-200 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main carousel container */}
      <div className="relative h-64 bg-gray-100 rounded-lg">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Using placeholder images for demonstration */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none transition-all duration-300"
            >
              <ChevronLeft className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none transition-all duration-300"
            >
              <ChevronRight className="text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Navigation dots */}
      {showDots && (
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 transform scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
