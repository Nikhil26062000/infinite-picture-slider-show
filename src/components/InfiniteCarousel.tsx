
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const images = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
];

const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      if (index < 0) index = images.length + index;
      if (index >= images.length) index = index - images.length;
      visibleImages.push({ index, image: images[index] });
    }
    return visibleImages;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
      <div className="overflow-hidden relative">
        <div className="flex items-center justify-center gap-4 min-h-[300px]">
          {getVisibleImages().map(({ index, image }, position) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-in-out absolute transform",
                {
                  // Center image
                  "z-30 translate-x-0": position === 2,
                  // Left images
                  "z-20 -translate-x-[110%]": position === 1,
                  "z-10 -translate-x-[220%]": position === 0,
                  // Right images
                  "z-20 translate-x-[110%]": position === 3,
                  "z-10 translate-x-[220%]": position === 4,
                }
              )}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-[400px] h-[250px] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          onClick={handlePrev}
          variant="outline"
          size="icon"
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          onClick={handleNext}
          variant="outline"
          size="icon"
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
