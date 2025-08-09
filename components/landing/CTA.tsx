export default function CTA() {
   return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-pink-300/20 rounded-3xl p-12">
               <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Saving?</h2>
               <p className="text-xl text-slate-300 mb-8">
                  Join thousands of users who are already crushing their savings goals with BudgeIt
               </p>
               <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                  Get Started Free
               </button>
               <p className="text-slate-400 mt-4 text-sm">No credit card required • Free forever</p>
            </div>
         </div>
      </section>
   );
}