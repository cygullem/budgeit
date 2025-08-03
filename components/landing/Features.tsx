"use client";

import { features } from "@/constants/landing";
import { useGSAP } from "@/lib/useGSAP";
import { rubik } from "@/lib/fonts";
import { Sparkles, Star, Zap } from "lucide-react";

export default function Features() {
   const scope = useGSAP();

   return (
      <section ref={scope} id="features" className={`${rubik.className} relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden`}>
         {/* Background decorative elements */}
         <div className="absolute inset-0" />

         {/* Floating decorative elements */}
         <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60" data-floating />
         <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40" data-floating />
         <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-50" data-floating />
         <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30" data-floating />

         {/* Glow orbs */}
         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" data-glow />
         <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" data-glow />
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/15 rounded-full blur-2xl" data-glow />

         <div className="relative max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
               <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6" data-float>
                  <Sparkles className="w-4 h-4 text-purple-200" />
                  <span className="text-purple-100 text-sm font-medium">Features</span>
                  <Star className="w-4 h-4 text-pink-200" />
               </div>

               <h2
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-transparent"
                  data-entrance
               >
                  Three ways to save
               </h2>

               <p
                  className="text-xl md:text-2lg text-white/70 max-w-3xl mx-auto leading-0.5"
                  data-entrance
               >
                  Whether you prefer saving alone or with others, BudgetIt adopts your style
               </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="group relative"
                     data-entrance
                     style={{ animationDelay: `${index * 0.2}s` }}
                  >
                     {/* Card */}
                     <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/25">

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-shimmer />

                        <div className="relative mb-8">
                           <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/50">
                              <feature.icon className="w-8 h-8 text-white" />
                           </div>

                           <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60" data-decorative />
                           <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40" data-decorative />
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                           {feature.title}
                        </h3>

                        <p className="text-white/80 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                           {feature.description}
                        </p>

                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <Zap className="w-5 h-5 text-purple-300" />
                        </div>

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-20 text-center" data-float>
               <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-8 py-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-50 font-medium">Choose your saving style</span>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
               </div>
            </div>
         </div>
      </section>
   );
}