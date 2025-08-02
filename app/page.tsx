import { rubik } from "@/lib/fonts";

export default function Home() {
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

         <section className={`${rubik.className} h-screen w-full flex flex-col items-center justify-center relative z-10`}>
            <h1 className="text-4xl font-bold text-text-primary mb-4">
               BudgeIt
            </h1>
            <p className="text-lg text-text-secondary">
               Small Steps, Big Savings
            </p>
         </section>
      </div>
   );
}
