import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero"

export default function LandingPage() {
   return (
      <div className="min-h-screen w-full bg-[#fefcff] relative">
         <div
            className="absolute inset-0 z-0"
            style={{
               backgroundImage: `
                  radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.6), transparent 70%),
                  radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.7), transparent 70%)
               `,
            }}
         />

         <div className="relative bg-white/10 backdrop-blur-2xl z-10">
            <Navigation />
            <Hero />
         </div>
      </div>
   );
}
