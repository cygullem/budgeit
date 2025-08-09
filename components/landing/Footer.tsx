import { PiggyBank, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
   const currentYear = new Date().getFullYear();
   
   return (
      <footer className="relative border-t border-purple-200/5 bg-gradient-to-r from-white/5 via-purple-50/5 to-pink-50/10 backdrop-blur-sm py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
         </div>

         <div className="max-w-7xl mx-auto relative">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
               {/* Logo Section */}
               <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                     <PiggyBank className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        BudgeIt
                     </span>
                     <span className="text-xs text-gray-500 font-medium">Smart Savings Made Simple</span>
                  </div>
               </div>

               {/* Copyright Section */}
               <div className="flex flex-col items-end text-sm lg:text-left">
                  <p className="text-purple-400">
                     &copy; {currentYear} BudgeIt. All rights reserved.
                  </p>
                  <p className="text-sm text-pink-400 mt-1 flex items-center justify-center lg:justify-start">
                     Made with <Heart className="w-4 h-4 text-pink-500 mx-1" /> for smart savers
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}