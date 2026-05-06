"use client";
import React, { useState } from 'react';

const BANNERS = [
  {
    id: 1,
    title: "Savage Beauty",
    rating: "9.8",
    genres: ["Action", "Drama", "Comedy"],
    description: "A brilliant scientist discovers a way to harness the power of the ocean's currents to create a new, renewable energy source. But when her groundbreaking technology falls into the wrong hands, she must race against time.",
    image: "/homebanner.jpg", 
  },
  {
    id: 2,
    title: "The Silent Sea",
    rating: "8.5",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
    description: "During a perilous 24-hour mission on the moon, space explorers attempt to retrieve samples from an abandoned research facility steeped in classified secrets.",
    image: "/homebanner2.jpg", 
  },
  {
    id: 3,
    title: "Project Phoenix",
    rating: "9.1",
    genres: ["Adventure", "Fantasy"],
    description: "In a world divided by magic and machinery, a young mechanic accidental unearths a legendary mechanized titan, igniting a war of global proportions.",
    image: "/homebanner3.jpg", 
  }
];

const page = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + BANNERS.length) % BANNERS.length);
  };

  const currentBanner = BANNERS[currentIndex];
  
  return (
  <div className="flex flex-col items-center justify-center py-6 px-4 md:px-8 lg:px-12 min-h-[calc(100vh-200px)] bg-[#1a191f]">
      
    {/* Responsive Hero Container */}
    <section className="relative w-full max-w-7xl h-100vh sm:h-[500px] md:h-[600px] overflow-hidden rounded-3xl group shadow-2xl">
          
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105"
        style={{ 
          backgroundImage: `url('${currentBanner.image}')`, 
        }}
      >
        {/* Multi-stage Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a191f] via-[#1a191f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a191f]/80 via-transparent to-transparent md:hidden" />
      </div>

      {/* Content Layer: Centered vertically, responsive alignment */}
      <div className="relative h-full w-full flex flex-col justify-center px-6 sm:px-10 md:px-16">
        <div className="max-w-2xl space-y-4 md:space-y-6">
              
          {/* Title & Rating */}
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
              {currentBanner.title}
            </h1>
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-2 border-green-500 rounded-full bg-[#1a191f]/50 backdrop-blur-sm">
              <span className="text-white text-xs md:text-sm font-bold">{currentBanner.rating}</span>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-2 text-[#ff55a5] text-xs md:text-sm font-semibold tracking-wide">
            {currentBanner.genres.map((genre, idx) => (
              <React.Fragment key={genre}>
                <span>{genre}</span>
                {idx < currentBanner.genres.length - 1 && <span className="text-gray-500">•</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Description: Clamped for small screens */}
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-lg line-clamp-3 md:line-clamp-none min-h-[80px]">
            {currentBanner.description}
          </p>

          {/* Action Section */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-10 py-3.5 border-2 border-[#ff55a5] text-[#ff55a5] rounded-xl font-bold tracking-[0.2em] hover:bg-[#ff55a5] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,85,165,0.25)] uppercase text-sm">
              Watch Now
            </button>
          </div>
        </div>

        {/* Controls: Next/Prev Buttons and Pagination dots */}
        <div className="hidden sm:flex absolute bottom-8 left-6 sm:left-10 md:left-16 items-center gap-6">
          <div className="flex gap-3">
            {/* Prev Button */}
            <button 
              onClick={handlePrev}
              className="w-11 h-11 bg-white/5 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center transition-all backdrop-blur-md active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
              
            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="w-11 h-11 bg-white/5 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center transition-all backdrop-blur-md active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
              
          {/* Dynamic Pagination Dots */}
          <div className="flex gap-2.5 items-center">
            {BANNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "w-6 h-1.5 bg-[#ff55a5]" 
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default page