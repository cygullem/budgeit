import { ArrowRight, Star, Play, PiggyBank, TrendingUp, Target, Users, Car, Plane, Ship, Mountain, Trophy } from "lucide-react";
import { rubik } from "@/lib/fonts";

export default function Hero() {
   return (
      <section className={`${rubik.className} h-screen w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden`}>
         {/* Floating icons */}
         <div className="absolute top-1/7 left-1/4 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-200/50">
            <PiggyBank className="w-10 h-10 text-purple-600" />
         </div>
         <div className="absolute top-1/3 right-1/9 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-pink-200/50">
            <TrendingUp className="w-10 h-10 text-pink-600" />
         </div>
         <div className="absolute bottom-1/8 left-1/4 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200/50">
            <Trophy className="w-8 h-8 text-blue-600" />
         </div>
         <div className="absolute bottom-1/4 right-1/4 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-200/50">
            <Users className="w-6 h-6 text-purple-600" />
         </div>

         {/* Additional floating icons */}
         <div className="absolute top-1/5 right-1/3 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-200/50">
            <Car className="w-8 h-8 text-green-600" />
         </div>
         <div className="absolute top-2/5 left-1/16 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200/50">
            <Plane className="w-8 h-8 text-blue-600" />
         </div>
         <div className="absolute bottom-2/5 right-1/6 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-200/50">
            <Ship className="w-8 h-8 text-cyan-600" />
         </div>
         <div className="absolute top-1/2 left-1/9 w-15 h-15 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-200/50">
            <Mountain className="w-8 h-8 text-orange-600" />
         </div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
               <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-2 mb-8 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-purple-700 text-sm font-medium">Join 100+ successful savers</span>
               </div>

               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-pink-600 to-pink-900 bg-clip-text text-transparent">
                     Small steps,
                  </span>
                  <span className="bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
                     {" "}Big savings
                  </span>
               </h1>

               <p className="text-xl text-black mb-10 max-w-3xl mx-auto leading-relaxed">
                  Transform your savings journey with BudgeIt. Set personal goals, join group challenges,
                  and track your progress with friends and family. Make saving money fun and social.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center shadow-lg active:scale-95 cursor-pointer">
                     Start Saving Today
                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white/30 backdrop-blur-sm group flex items-center text-purple-700 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-purple-300 hover:border-purple-400 hover:bg-white/60 transition-all active:scale-95 cursor-pointer">
                     <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                     Watch Demo
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}