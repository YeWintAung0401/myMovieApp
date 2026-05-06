"use client";
import React from 'react'


const Footer = () => {
  return (
  <footer className="bg-[#1a191f] border-t border-gray-800 py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
      {/* Logo and Copyright Section */}
      <div className="flex flex-col items-center md:items-start space-y-2">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-[#ff55a5]">HOT</span><span className="text-white">FLIX</span>
        </div>
        <div className="text-gray-500 text-xs text-center md:text-left">
          <p>© HOTFLIX, 2019—2026</p>
          <p>Created by <span className="text-[#ff55a5] hover:underline cursor-pointer">Mask X</span></p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
        <a href="#" className="hover:text-[#ff55a5] transition-colors">About Us</a>
        <a href="#" className="hover:text-[#ff55a5] transition-colors">Contacts</a>
        <a href="#" className="hover:text-[#ff55a5] transition-colors">Privacy policy</a>
      </nav>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="group flex items-center justify-center w-10 h-10 border-2 border-[#ff55a5] rounded-xl hover:bg-[#ff55a5] transition-all duration-300 shadow-[0_0_10px_rgba(255,85,165,0.3)]"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-[#ff55a5] group-hover:text-white transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </div>
  </footer>
  )
}

export default Footer