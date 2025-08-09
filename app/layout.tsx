import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { ReactLenis } from "@/lib/lenis";

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
        className={`${inter.variable} antialiased`}
      >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
