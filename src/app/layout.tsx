

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import AnimatedGradient from "@/components/AnimatedGradient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PortFolio",
  description: "Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience building frontend and full stack applications. Skilled in developing responsive web interfaces using React and Tailwind CSS, and backend APIs with Node.js and MongoDB. Eager to contribute to dynamic development teams and grow in a collaborative environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} h-full flex flex-col bg-black antialiased`}>
        <AnimatedGradient />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
