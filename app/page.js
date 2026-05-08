"use client";
import React, { useState, useEffect } from 'react';

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
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide effect (Optional, but modern)
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentBanner = BANNERS[currentIndex];

  return (
    <div className="h-full bg-[#0b0b0e] flex flex-col items-center justify-center p-4 md:p-8">
          
    {/* Container: Stacked on Mobile, Relative/Absolute on Desktop */}
    <section className="w-full lg:max-w-[1400px] flex flex-col md:relative md:h-[650px] lg:mt-8 lg:rounded-[2.5rem] overflow-hidden bg-[#0b0b0e] border-white/5 lg:border">
        
      {/* 1. Image Layer: Top of the stack on mobile */}
      <div className="relative w-full h-[45vh] md:absolute md:inset-0 md:h-full">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url('${currentBanner.image}')` }}
        >
          {/* Desktop-only Gradient */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0b0b0e] via-[#0b0b0e]/50 to-transparent" />
          {/* Mobile-only Bottom Fade (smoothes transition to content layer) */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0b0b0e] to-transparent" />
        </div>
          
        {/* Mobile Rating Badge (Floating over image) */}
        <div className="absolute top-4 right-4 md:hidden px-3 py-1 bg-green-500 rounded-lg text-black font-bold text-xs">
          {currentBanner.rating}
        </div>
      </div>

      {/* 2. Content Layer: Under the image on mobile */}
      <div className="relative flex flex-col px-6 py-8 md:h-full md:justify-center md:px-20 md:py-0 z-10">
          
        <div className="max-w-2xl space-y-4">
          {/* Hidden on desktop, shown on mobile for visual separation */}
          <div className="md:hidden w-12 h-1 bg-[#ff55a5] rounded-full mb-2" />

          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            {currentBanner.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden md:flex items-center justify-center w-10 h-10 border border-green-500 rounded-full text-green-500 font-bold text-xs">
              {currentBanner.rating}
            </div>
            <p className="text-[#ff55a5] font-bold text-xs md:text-sm tracking-widest uppercase">
              {currentBanner.genres.join(' • ')}
            </p>
          </div>

          <p className="text-gray-400 text-sm md:text-lg leading-relaxed md:max-w-lg">
            {currentBanner.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
            <button className="flex-1 sm:flex-none px-10 py-4 bg-[#ff55a5] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(255,85,165,0.4)] transition-all active:scale-95">
              <i className="fa-solid fa-play mr-2"></i> Play Now
            </button>
            <button className="flex-1 sm:flex-none px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              <i className="fa-solid fa-plus mr-2"></i> My List
            </button>
          </div>
        </div>

        {/* 3. Controls Layer */}
        <div className="mt-12 md:mt-0 md:absolute md:bottom-10 md:right-20 flex items-center justify-between md:justify-end gap-6">
            
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#ff55a5] transition-all">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#ff55a5] transition-all">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {BANNERS.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#ff55a5]' : 'w-2 bg-white/20'}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  </div>
  )
}

export default page