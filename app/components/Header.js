"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, MoreHorizontal, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 bg-[#1a191f] text-white font-sans border-b border-gray-800 z-50 gap-4">
      
      {/* Top Row: Logo, Toggle, and Nickname (Mobile optimization) */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter flex items-center">
          <span className="text-[#ff55a5]">HOT</span>
          <span>FLIX</span>
        </Link>

        <div className="flex items-center gap-3 md:hidden">
          <Link 
            href="/profile" 
            className="border-2 border-[#ff55a5] px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-[#ff55a5] transition duration-300"
          >
            Nickname
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Middle Section: Navigation (Desktop Only) */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold uppercase tracking-wide">
        <div className="relative">
          <button onClick={() => toggleDropdown('home')} className="hover:text-[#ff55a5] flex items-center gap-1 py-2 transition">
            Home <ChevronDown size={14} className={activeDropdown === 'home' ? 'rotate-180 transition' : 'transition'} />
          </button>
          {activeDropdown === 'home' && (
            <div className="absolute top-full left-0 w-48 bg-[#1a191f] border border-gray-800 rounded-xl mt-2 py-4 shadow-xl z-[60]">
              <Link href="/" className="block px-6 py-2 hover:text-[#ff55a5]">Home Style 1</Link>
              <Link href="/home-2" className="block px-6 py-2 hover:text-[#ff55a5]">Home Style 2</Link>
            </div>
          )}
        </div>

        <div className="relative">
          <button onClick={() => toggleDropdown('catalog')} className="hover:text-[#ff55a5] flex items-center gap-1 py-2 transition">
            Catalog <ChevronDown size={14} className={activeDropdown === 'catalog' ? 'rotate-180 transition' : 'transition'} />
          </button>
          {activeDropdown === 'catalog' && (
            <div className="absolute top-full left-0 w-48 bg-[#1a191f] border border-gray-800 rounded-xl mt-2 py-4 shadow-xl z-[60]">
              <Link href="/catalog" className="block px-6 py-2 hover:text-[#ff55a5]">Grid View</Link>
              <Link href="/catalog-list" className="block px-6 py-2 hover:text-[#ff55a5]">List View</Link>
            </div>
          )}
        </div>

        <Link href="/pricing" className="hover:text-[#ff55a5] transition">Pricing</Link>
        <button className="hover:text-[#ff55a5] transition"><MoreHorizontal size={20} /></button>
      </nav>

      {/* Right Section: Search, Language, and Nickname */}
      <div className="flex items-center justify-between w-full md:w-auto space-x-3 lg:space-x-6">
        {/* Search Bar: Now visible on all screens */}
        <div className="relative flex-grow md:flex-grow-0">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#222028] text-xs md:text-sm py-2 px-3 md:px-4 pr-8 md:pr-10 rounded-lg border border-transparent focus:border-[#ff55a5] outline-none transition w-full md:w-40 lg:w-64"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" size={14} />
        </div>

        {/* Language Selector */}
        <LanguageSelector />

        {/* User Button: Visible on Desktop (Mobile has it in the top row) */}
        <Link 
          href="/profile" 
          className="hidden md:block border-2 border-[#ff55a5] px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#ff55a5] transition duration-300"
        >
          Nickname
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a191f] border-b border-gray-800 md:hidden p-6">
          <div className="flex flex-col space-y-4 font-semibold uppercase text-sm">
            <div className="text-[#ff55a5]">Home</div>
            <div className="pl-4 flex flex-col gap-2 text-white/60">
              <Link href="/">Style 1</Link>
              <Link href="/home-2">Style 2</Link>
            </div>
            
            <div className="text-[#ff55a5]">Catalog</div>
            <div className="pl-4 flex flex-col gap-2 text-white/60">
              <Link href="/catalog">Grid View</Link>
              <Link href="/catalog-list">List View</Link>
            </div>
            
            <Link href="/pricing">Pricing Plan</Link>
          </div>
        </div>
      )}
    </header>
  );
}