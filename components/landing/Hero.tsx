"use client";

import {
   ArrowRight,
   Star,
   Play,
   PiggyBank,
   TrendingUp,
   Users,
   Car,
   Plane,
   Ship,
   Mountain,
   Trophy
} from "lucide-react";
import { rubik } from "@/lib/fonts";
import { useGSAP } from "@/lib/useGSAP";
import { useState, useEffect } from "react";

export default function Hero() {
   const scope = useGSAP();
   const [particles, setParticles] = useState<Array<{
      left: string;
      top: string;
      animationDelay: string;
      animationDuration: string;
   }>>([]);

   useEffect(() => {
      const generateParticles = () => {
         const particleCount = 20;
         const newParticles = Array.from({ length: particleCount }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
         }));
         setParticles(newParticles);
      };

      generateParticles();
   }, []);

   return (
      <div ref={scope} className={`${rubik.className} h-screen w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden`}>
         {/* Floating icons */}
         <div
            data-floating
            className="absolute top-1/7 left-1/4 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float hover-lift"
         >
            <PiggyBank className="w-10 h-10 text-purple-600" />
         </div>
         <div
            data-floating
            className="absolute top-1/3 right-1/9 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-pink-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float-delayed hover-lift"
         >
            <TrendingUp className="w-10 h-10 text-pink-600" />
         </div>
         <div
            data-floating
            className="absolute bottom-1/8 left-1/4 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float hover-lift"
         >
            <Trophy className="w-8 h-8 text-blue-600" />
         </div>
         <div
            data-floating
            className="absolute bottom-1/4 right-1/4 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float-delayed hover-lift"
         >
            <Users className="w-6 h-6 text-purple-600" />
         </div>

         {/* Floating icons */}
         <div
            data-floating
            className="absolute top-1/5 right-1/3 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float hover-lift"
         >
            <Car className="w-8 h-8 text-green-600" />
         </div>
         <div
            data-floating
            className="absolute top-2/5 left-1/16 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float-delayed hover-lift"
         >
            <Plane className="w-8 h-8 text-blue-600" />
         </div>
         <div
            data-floating
            className="absolute bottom-2/5 right-1/6 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float hover-lift"
         >
            <Ship className="w-8 h-8 text-cyan-600" />
         </div>
         <div
            data-floating
            className="absolute top-1/2 left-1/9 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float-delayed hover-lift"
         >
            <Mountain className="w-8 h-8 text-orange-600" />
         </div>

         {/* Gradient orbs */}
         <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse animate-glow"></div>
         <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse animate-glow" style={{ animationDelay: '1s' }}></div>
         <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse animate-glow" style={{ animationDelay: '2s' }}></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
               <div
                  data-entrance
                  className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-2 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift"
               >
                  <Star className="w-4 h-4 text-yellow-500 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-purple-700 text-sm font-medium">Join 100+ successful savers</span>
               </div>

               <h1
                  data-entrance
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
               >
                  <span className="gradient-text-animate">
                     Small steps,
                  </span>
                  <span className="bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-transparent">
                     {" "}Big savings
                  </span>
               </h1>

               <p
                  data-entrance
                  className="text-xl text-black mb-10 max-w-3xl mx-auto leading-relaxed"
               >
                  Transform your savings journey with BudgeIt. Set personal goals, join group challenges,
                  and track your progress with friends and family. Make saving money fun and social.
               </p>

               <div
                  data-entrance
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
               >
                  <button
                     data-pulse
                     className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center shadow-lg active:scale-100 cursor-pointer relative overflow-hidden hover-lift"
                  >
                     <span className="absolute inset-0 animate-shimmer"></span>
                     <span className="relative z-10">Start Saving Today</span>
                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                  <button
                     className="bg-white/30 backdrop-blur-sm group flex items-center text-purple-700 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-purple-300 hover:border-purple-400 hover:bg-white/60 transition-all active:scale-95 cursor-pointer relative overflow-hidden hover-lift"
                  >
                     <span className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                     <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform relative z-10" />
                     <span className="relative z-10">Watch Demo</span>
                  </button>
               </div>
            </div>
         </div>

         {/* Floating particles */}
         <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle, i) => (
               <div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-particle"
                  style={{
                     left: particle.left,
                     top: particle.top,
                     animationDelay: particle.animationDelay,
                     animationDuration: particle.animationDuration,
                  }}
               />
            ))}
         </div>

         {/* Decorative elements */}
         <div data-decorative className="absolute top-1/6 right-1/8 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
         <div data-decorative className="absolute bottom-1/6 left-1/8 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
         <div data-decorative className="absolute top-1/3 left-1/6 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
         <div data-decorative className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
   );
}