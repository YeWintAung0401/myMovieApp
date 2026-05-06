import React from 'react'
import Link from 'next/link'
import { Search, ChevronDown, MoreHorizontal } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#1a191f] text-white font-sans border-b border-gray-800">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center">
          <span className="text-[#ff55a5]">HOT</span>
          <span>FLIX</span>
        </Link>
      </div>

      {/* Middle Section: Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wide">
        <Link href="/components/home" className="hover:text-[#ff55a5] flex items-center gap-1 transition">
          Home 
          {/* <ChevronDown size={14} /> */}
        </Link>
        <Link href="/components/catalog" className="hover:text-[#ff55a5] flex items-center gap-1 transition">
          Catalog 
          {/* <ChevronDown size={14} /> */}
        </Link>
        <Link href="/components/pricing" className="hover:text-[#ff55a5] transition">
          Pricing Plan
        </Link>
        <Link href="/components/pages" className="hover:text-[#ff55a5] flex items-center gap-1 transition">
          Pages 
          {/* <ChevronDown size={14} /> */}
        </Link>
        <button className="hover:text-[#ff55a5] transition">
          <MoreHorizontal size={20} />
        </button>
      </nav>

      {/* Right Section: Search & Profile */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#222028] text-sm py-2 px-4 pr-10 rounded-lg border border-transparent focus:border-[#ff55a5] outline-none transition w-64"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer uppercase">
          EN <ChevronDown size={14} />
        </div>

        {/* User Button */}
        <Link 
          href="/profile" 
          className="border-2 border-[#ff55a5] px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#ff55a5] transition duration-300"
        >
          Nickname
        </Link>
      </div>
    </header>
  )
}

export default Header