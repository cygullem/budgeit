export default function CTA() {
   return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-2 border-purple-400/30 rounded-3xl p-12 shadow-2xl shadow-purple-500/20">
               <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent drop-shadow-sm">
                  Transform Your Financial Future
               </h2>
               <p className="text-xl text-white mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
                  Join hundreds of users who have successfully achieved their financial goals and built lasting wealth with BudgeIt's proven methodology
               </p>
               <div className="space-y-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-xl text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/30 border border-purple-400/30 active:scale-95 cursor-pointer">
                     Get started free
                  </button>
                  <p className="text-purple-200 text-base font-medium">No credit card required • Free at this moment</p>
               </div>
            </div>
         </div>
      </section>
   );
}