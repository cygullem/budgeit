import { rubik } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className={`${rubik.className} text-4xl font-bold`}>
        BudgeIt
      </h1>
      <p>Small Steps, Big Savings</p>
    </main>
  );
}
