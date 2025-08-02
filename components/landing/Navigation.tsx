"use client";

import { useState, useEffect } from "react";
import { PiggyBank, Menu, X } from "lucide-react";

export default function Navigation() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
         }`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
               <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                     <PiggyBank className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">BudgeIt</span>
               </div>

               <div className="hidden md:flex items-center space-x-8">
                  <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
                  <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How it Works</a>
                  <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Reviews</a>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                     Sign Up
                  </button>
               </div>

               <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                  {isMenuOpen ? <X /> : <Menu />}
               </button>
            </div>
         </div>

         {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
               <div className="px-4 py-4 space-y-4">
                  <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
                  <a href="#how-it-works" className="block text-slate-300 hover:text-white">How it Works</a>
                  <a href="#testimonials" className="block text-slate-300 hover:text-white">Reviews</a>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg">
                     Sign Up
                  </button>
               </div>
            </div>
         )}
      </nav>
   );
}