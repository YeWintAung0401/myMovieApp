"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from 'react'

const LanguageSelector = () => {

const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "EN", label: "English" },
    { code: "MM", label: "Myanmar" },
    { code: "JP", label: "Japanese" },
  ];

  const handleLangChange = (code) => {
    setSelectedLang(code);
    setLangOpen(false);
  };

  return (
<div className="relative">
  {/* Trigger */}
  <button 
    onClick={() => setLangOpen(!langOpen)}
    className="flex items-center gap-1 text-[10px] md:text-sm cursor-pointer shrink-0 hover:text-[#ff55a5] transition-colors"
  >
    {selectedLang} 
    <ChevronDown 
      size={12} 
      className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} 
    />
  </button>

  {/* Dropdown Menu */}
  {langOpen && (
    <>
      {/* Backdrop to close on click outside */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setLangOpen(false)} 
      />
          
      <ul className="absolute top-full right-0 mt-2 w-32 bg-[#1a191f] border border-gray-800 rounded-xl py-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              onClick={() => handleLangChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors hover:bg-white/5 ${
                selectedLang === lang.code ? "text-[#ff55a5]" : "text-white/70"
              }`}
            >
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </>
  )}
</div>
  )
}

export default LanguageSelector