import { Geist, Geist_Mono, Rubik } from "next/font/google";

export const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

export const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const rubik = Rubik({
   variable: "--font-rubik",
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700", "800", "900"],
});
