import {
   Navigation,
   Hero,
   Features,
   CTA,
   Footer
} from "@/components/landing";

export default function LandingPage() {
   return (
      <div className="min-h-screen w-full bg-[#fefcff] relative overflow-hidden">
         {/* Fixed Background Gradients */}
         <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
               backgroundImage: `
                  radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.6), transparent 70%),
                  radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.7), transparent 70%)
               `,
               backgroundAttachment: 'fixed',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}
         />

         <div className="relative z-10">
            <div>
               <div className="fixed top-0 z-50 w-full">
                  <Navigation />
               </div>
               <main>
                  <Hero />
                  <Features />
                  <CTA />
                  <Footer />
               </main>
            </div>
         </div>
      </div>
   );
}
