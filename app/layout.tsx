import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "BudgeIt",
  description: "BudgeIt is a simple and easy to use budget and savings tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
