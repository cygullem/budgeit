"use client";

import { useState, useEffect, useRef } from "react";
import { PiggyBank, Menu, X } from "lucide-react";

export default function Navigation() {
   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
   const mobileMenuRef = useRef<HTMLDivElement>(null);
   const menuItemsRef = useRef<HTMLDivElement>(null);
   const [isActive, setIsActive] = useState('');
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
   }

   return (
      <nav className={`w-full transition-all duration-300 border-b border-pink-500/5 ${scrollY > 50 ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
               <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                     <PiggyBank className="w-5 h-5 text-white" />
                  </div>
                  <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                     BudgeIt
                  </a>
               </div>

               <div className="hidden md:flex items-center space-x-8">
                  <a href="#features"
                     onClick={() => setIsActive('features')}
                     className={`text-md hover:text-purple-500 transition-colors ${isActive === 'features' ? 'text-purple-500' : 'text-purple-900'}`}>
                     Features
                  </a>
                  <a href="#cta"
                     onClick={() => setIsActive('pricing')}
                     className={`text-md hover:text-purple-500 transition-colors ${isActive === 'pricing' ? 'text-purple-500' : 'text-purple-900'}`}>
                     Pricing
                  </a>
               </div>

               <button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
                  Sign Up
               </button>

               {/* Hamburger menu */}
               <button
                  className="md:hidden text-gray-900"
                  onClick={toggleMobileMenu}
               >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
               </button>
            </div>
         </div>

         {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-200 shadow-lg">
               <div className="px-4 py-4 space-y-4">
                  <a href="#features" className="block text-gray-600 hover:text-purple-700">Features</a>
                  <a href="#how-it-works" className="block text-gray-600 hover:text-purple-700">How it Works</a>
                  <a href="#testimonials" className="block text-gray-600 hover:text-purple-700">Reviews</a>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg">
                     Sign Up
                  </button>
               </div>
            </div>
         )}
      </nav>
   );
}