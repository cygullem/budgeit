
export default function HotItWorks() {
   const steps = [
      { step: "1", title: "Set Your Goal", desc: "Define what you're saving for and set your target amount and timeline." },
      { step: "2", title: "Choose Your Style", desc: "Save individually, join a group goal, or track personal progress within a group." },
      { step: "3", title: "Track & Achieve", desc: "Monitor your progress, celebrate milestones, and reach your financial goals." }
   ]

   return (
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-white mb-4">How BudgeIt Works</h2>
               <p className="text-xl text-slate-300">Simple steps to start your savings journey</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {steps.map((item, index) => (
                  <div key={index} className="text-center">
                     <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                        {item.step}
                     </div>
                     <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                     <p className="text-slate-300">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}