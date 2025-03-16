"use client";
import { FC, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Removed AnimatePresence since it's not used
import Image from "next/image";
import { companies } from "../data/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PortfolioCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Update carousel width and items per view on resize
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
        setIsMobile(false);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
        setIsMobile(false);
      } else {
        setItemsPerView(4);
        setIsMobile(false);
      }
    };

    updateLayout(); // Initial call
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const maxIndex = Math.max(0, companies.length - itemsPerView);

  const next = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to start
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to end
      setCurrentIndex(maxIndex);
    }
  };

  // Calculate slide width based on items per view
  const getSlideWidth = () => {
    if (!carouselRef.current) return 0;
    const containerWidth = carouselRef.current.offsetWidth;
    return containerWidth / itemsPerView;
  };

  const totalPages = Math.ceil(companies.length / itemsPerView);
  const currentPage = Math.floor(currentIndex / itemsPerView);

  return (
    <motion.section
      id="portfolio-companies"
      className="py-8 md:py-16 bg-white overflow-hidden"
      initial={{ opacity: 0.8, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 mb-4 md:mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-12 heading-font"
        >
          <a
            href="/portfolio"
            className="inline-block hover:text-teal-900 hover:scale-105 transition duration-300 transform"
          >
            Our Portfolio Companies
          </a>
        </motion.h2>
      </div>
      
      <div className="relative max-w-full md:max-w-7xl mx-auto px-2 md:px-4">
        {/* Navigation Arrows - Hidden on small mobile, shown from smallest breakpoint */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center -ml-2 sm:-ml-4 bg-white rounded-full p-1 sm:p-2 shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Previous companies"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
        </button>
        
        <button
          onClick={next}
          className="absolute right-0 z-10 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center -mr-2 sm:-mr-4 bg-white rounded-full p-1 sm:p-2 shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Next companies"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
        </button>
        
        {/* Carousel Container */}
        <div className="overflow-hidden mx-1 sm:mx-6 md:mx-8" ref={carouselRef}>
          <motion.div
            className="flex"
            animate={{
              x: -currentIndex * getSlideWidth()
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 }
            }}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: -maxIndex * getSlideWidth(), right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset }) => { // Removed unused 'velocity' parameter
              if (isMobile) {
                const swipe = offset.x;
                
                if (swipe < -50) {
                  next();
                } else if (swipe > 50) {
                  prev();
                }
              }
            }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 md:p-4`}
                style={{ width: `${100 / itemsPerView}%` }}
                initial={{ scale: 0.9, opacity: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center h-full bg-gray-50 rounded-lg shadow-md md:shadow-lg border border-gray-100 px-3 py-4 md:px-6 md:py-8 hover:shadow-lg md:hover:shadow-xl hover:bg-gray-50/80 transition-all duration-300 group"
                >
                  <div className="mb-3 md:mb-6 overflow-hidden rounded-md w-20 h-20 md:w-32 md:h-32 flex items-center justify-center bg-white p-2 md:p-4 border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      className="w-full h-full object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 heading-font group-hover:text-teal-800 transition-colors duration-300 text-center">
                    {company.name}
                  </span>
                  <p className="text-xs md:text-sm text-gray-600 text-center normal-font max-w-xs line-clamp-2 md:line-clamp-none">
                    {company.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Mobile Navigation (Swipe indicators) */}
        <div className="sm:hidden flex justify-between items-center mt-4 px-4">
          <button
            onClick={prev}
            className="flex items-center space-x-1 text-sm text-gray-600"
            aria-label="Previous companies"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Swipe</span>
          </button>
          <button
            onClick={next}
            className="flex items-center space-x-1 text-sm text-gray-600"
            aria-label="Next companies"
          >
            <span>Swipe</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 md:mt-8 space-x-1 md:space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const isActive = idx === currentPage;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? "w-4 md:w-6 bg-teal-500" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioCarousel;