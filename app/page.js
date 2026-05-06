import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
// 
const page = () => {
  return (
    // <div>
    //   <h1> About Page</h1>
    //   <Link href="/components/home">Home</Link>
    //   <Link href="/components/about">About</Link>
    //   <Link href="/components/teams">Teams</Link>
    //   <Image src="/download.jpg" alt='About Image' width={500} height={500} />

    // </div>

  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0f0f15] relative overflow-hidden">
      
    {/* Dynamic Background Gradient */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#ff55a5] opacity-20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#6366f1] opacity-20 blur-[120px]" />
    </div>

    {/* Content Container */}
    <div className="relative z-10 pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
        
      {/* Sign In Button */}
      <Link href="/user/signin" className="w-full sm:w-auto">
        <button className="w-full px-12 py-4 bg-[#ff55a5] text-white rounded-2xl font-black tracking-widest hover:bg-transparent border-2 border-[#ff55a5] hover:text-[#ff55a5] transition-all duration-300 shadow-[0_0_30px_rgba(255,85,165,0.4)] uppercase text-sm active:scale-95">
          Sign In
        </button>
      </Link>

      {/* Sign Up Button */}
      <Link href="/user/signup" className="w-full sm:w-auto">
        <button className="w-full px-12 py-4 border-2 border-white/10 text-white rounded-2xl font-black tracking-widest hover:border-[#ff55a5] hover:text-[#ff55a5] transition-all duration-300 uppercase text-sm backdrop-blur-md bg-white/5 hover:bg-white/10 active:scale-95">
          Sign Up
        </button>
      </Link>
        
    </div>
  </div>
  )
}

export default page