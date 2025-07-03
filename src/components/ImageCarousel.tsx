
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop',
    title: 'Summer Sale',
    subtitle: 'Up to 50% off'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
    title: 'Tech Deals',
    subtitle: 'Latest gadgets'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    title: 'Work from Home',
    subtitle: 'Essential tools'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={bannerImages[currentIndex].url}
            alt={bannerImages[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold mb-2"
              >
                {bannerImages[currentIndex].title}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm md:text-base"
              >
                {bannerImages[currentIndex].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200"
      >
        <ChevronLeft size={20} className="text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200"
      >
        <ChevronRight size={20} className="text-gray-700" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
