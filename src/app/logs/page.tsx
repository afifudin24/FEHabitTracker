"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import NavbarDashboard from "@/components/NavbarDashboard";
const Logs = () => {
    return (
        <div className="flex min-h-[100vh] justify-between flex-col">
            <div>
                <DarkModeToggle />
                < NavbarDashboard />
            </div>
            <Footer />
        </div>
    );
}

export default Logs;