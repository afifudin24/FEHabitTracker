/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import NavbarDashboard from "@/components/NavbarDashboard";
import Section1 from "@/elements/dashboard/Section1";
import DarkModeToggle from "@/components/DarkModeToggle";
import Section2 from "@/elements/dashboard/Section2";
import Section3 from "@/elements/dashboard/Section3";
import Footer from "@/components/Footer";
import Section4 from "@/elements/dashboard/Section4";
import { useEffect, useState } from "react";
import { addHabitLog, getHabitIncomplete } from "@/services/habitServices";
const Dashboard = () => {
    const [habits, setHabits] = useState([
        {
            id: "5adffce3-6bce-4920-8158-5f0f404e8a82",
            userId: "587b9ff9-bd65-4fb7-8400-06a9c6acfc8a",
            title: "Drink 8 glasses of water",
            description: "Make sure to drink enough water daily",
            periodType: "daily",
            targetValue: 8,
            colorHex: "#3498db",
            archived: false,
            createdAt: "2025-05-17T09:15:42.000Z",
            updatedAt: "2025-05-17T09:15:42.000Z",
            logs: []
        },
        {
            id: "7d74fabc-8881-4be0-9f5d-b30d3c8b99d1",
            userId: "587b9ff9-bd65-4fb7-8400-06a9c6acfc8a",
            title: "Exercise for at least 30 minutes",
            description: "Stay fit with regular daily exercise",
            periodType: "daily",
            targetValue: 1,
            colorHex: "#2ecc71",
            archived: false,
            createdAt: "2025-05-17T09:15:42.000Z",
            updatedAt: "2025-05-17T09:15:42.000Z",
            logs: []
        },
        {
            id: "aab71ec6-bbfd-4c3e-b26a-8b6f9a61e944",
            userId: "587b9ff9-bd65-4fb7-8400-06a9c6acfc8a",
            title: "Read 10 pages of a book",
            description: "Improve knowledge by reading daily",
            periodType: "daily",
            targetValue: 10,
            colorHex: "#9b59b6",
            archived: false,
            createdAt: "2025-05-17T09:15:42.000Z",
            updatedAt: "2025-05-17T09:15:42.000Z",
            logs: []
        },
        {
            id: "d781fcf6-d7f6-476b-a0d0-d06de93ec5f7",
            userId: "587b9ff9-bd65-4fb7-8400-06a9c6acfc8a",
            title: "Go to bed before 11 PM",
            description: "Maintain a healthy sleep schedule",
            periodType: "daily",
            targetValue: 1,
            colorHex: "#f39c12",
            archived: false,
            createdAt: "2025-05-17T09:15:42.000Z",
            updatedAt: "2025-05-17T09:15:42.000Z",
            logs: []
        }
    ]);

    const getHabitsList = async () => {
        try {
            const response = await getHabitIncomplete();
            console.log(response);
            setHabits(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const addLog = async (id: any) => {
        try {
            const response = await addHabitLog(id)
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getHabitsList();
        console.log(habits);
    },
        []
    );
    return (
        <div className="flex min-h-[100vh] justify-between flex-col">
            <div >
                <DarkModeToggle />
                < NavbarDashboard />
                <Section1 habits={habits} setHabits={setHabits} addLog={addLog} />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard;