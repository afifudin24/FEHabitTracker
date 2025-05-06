"use client";
import ThemeToggle from "@/components/DarkModeToggle";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import Section1 from "@/elements/landing/Section1";
import Section2 from "@/elements/landing/Section2";
import Section3 from "@/elements/landing/Section3";
export default function Home() {
  return (
    <div className="flex min-h-[100vh] justify-between flex-col">
      <Navbar />
      {/* Section 1 */}
     <Section1 />
     <Section2 />
     <Section3 />
      <Footer />
      <DarkModeToggle />
    </div>

  );
}
