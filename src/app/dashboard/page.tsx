"use client";
import { useEffect } from "react";
import NavbarDashboard from "@/components/NavbarDashboard";
import Section1 from "@/elements/dashboard/Section1";
import DarkModeToggle from "@/components/DarkModeToggle";
import Section2 from "@/elements/dashboard/Section2";
import Section3 from "@/elements/dashboard/Section3";
import Footer from "@/components/Footer";
import Section4 from "@/elements/dashboard/Section4";
const Dashboard = () => {
    return (
        <div className="flex min-h-[100vh] justify-between flex-col">        
        <div >
        <DarkModeToggle />
            < NavbarDashboard />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>

        <Footer />
        </div>
    )
}

export default Dashboard;