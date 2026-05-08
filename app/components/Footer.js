"use client";
import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-[#0f0f13] border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
    {/* Background Glow Effect */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#ff55a5] to-transparent opacity-50" />
      
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
          <div className="text-3xl font-black tracking-tighter mb-4">
            <span className="text-[#ff55a5]">HOT</span><span className="text-white">FLIX</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left max-w-xs">
            The best streaming experience for movies and series. Join our community and stay updated.
          </p>
        </div>

        {/* Quick Links Group */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Browse</h4>
          <nav className="flex flex-col space-y-3 items-center md:items-start text-sm text-gray-400">
            <a href="#" className="hover:text-[#ff55a5] transition-all transform hover:translate-x-1">Home</a>
            <a href="#" className="hover:text-[#ff55a5] transition-all transform hover:translate-x-1">Movies</a>
            <a href="#" className="hover:text-[#ff55a5] transition-all transform hover:translate-x-1">TV Series</a>
          </nav>
        </div>

        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Support</h4>
          <nav className="flex flex-col space-y-3 items-center md:items-start text-sm text-gray-400">
            <a href="#" className="hover:text-[#ff55a5] transition-all">About Us</a>
            <a href="#" className="hover:text-[#ff55a5] transition-all">Contacts</a>
            <a href="#" className="hover:text-[#ff55a5] transition-all">Privacy Policy</a>
          </nav>
        </div>

        {/* Scroll & Interaction */}
        <div className="col-span-1 flex flex-col items-center md:items-end justify-between">
           <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#ff55a5] border border-white/10 rounded-full transition-all duration-500"
          >
            <span className="text-xs font-bold text-white uppercase tracking-widest group-hover:pr-2 transition-all">Back to Top</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-[#ff55a5] group-hover:text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-[11px] tracking-widest uppercase text-center">
          © {currentYear} HOTFLIX. All rights reserved. 
          <span className="mx-2">|</span> 
          Created by <span className="text-white font-bold hover:text-[#ff55a5] cursor-pointer transition-colors">MASK X</span>
        </div>
          
        {/* Social Icons (Font Awesome Classes) */}
        <div className="flex items-center gap-3">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#1877F2] transition-all duration-300">
             <i className="fa-brands fa-facebook-f text-white text-lg"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#1DA1F2] transition-all duration-300">
             <i className="fa-brands fa-twitter text-white text-lg"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#E4405F] transition-all duration-300">
             <i className="fa-brands fa-instagram text-white text-lg"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#FF0000] transition-all duration-300">
             <i className="fa-brands fa-youtube text-white text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer