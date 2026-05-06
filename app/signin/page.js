import React from 'react';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a191f] px-4">
      <div className="w-full max-w-md bg-[#16151a] p-10 rounded-2xl shadow-2xl border border-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-wider">
            <span className="text-[#ff55a5]">HOT</span><span className="text-white">FLIX</span>
          </h1>
        </div>

        <form className="space-y-5">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-[#1a191f] border border-transparent focus:border-[#ff55a5] text-white p-4 rounded-xl outline-none transition-all"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-[#1a191f] border border-transparent focus:border-[#ff55a5] text-white p-4 rounded-xl outline-none transition-all"
          />
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-400 cursor-pointer">
              <input type="checkbox" className="accent-[#ff55a5] w-4 h-4" />
              <span>Remember Me</span>
            </label>
            <Link href="/forgot-password" className="text-[#ff55a5] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button className="w-full border-2 border-[#ff55a5] text-[#ff55a5] font-bold py-3 rounded-xl hover:bg-[#ff55a5] hover:text-white transition-all duration-300 tracking-widest mt-4">
            SIGN IN
          </button>
        </form>

        <p className="text-gray-400 text-center mt-8 text-sm">
          Don't have an account? <Link href="/signup" className="text-[#ff55a5] hover:underline">Sign up!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;