import { features } from "@/constants/landing";

export default function Features() {
   return (
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-white mb-4">
                  Three ways to save
               </h2>
               <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Whether you prefer saving alone or with others, BudgeIt adopts your style
               </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8"> 
               {features.map((feature, index) => (
                  <div 
                     key={index}
                     className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 transition-all transform hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                           <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                           {feature.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                           {feature.description}
                        </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}