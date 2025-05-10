import React from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import NavbarDashboard from "@/components/NavbarDashboard";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { H2, H3 } from "@/components/Heading";
const Stats = () => {
    return (

        <div>
            <NavbarDashboard />
            <DarkModeToggle />
            <div className="flex min-h-[100vh] justify-between flex-col">
                <Container className="md:mt-10 mt-28">
                    <div data-aos="fade-down" data-aos-duration="1000">
                        <H3 className="text-center md:text-start">Statistics</H3>

                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-wrap gap-5 justify-center my-5">
                        <div className="bg-bg-card shadow-md rounded-xl p-5 flex-1 min-w-[150px] text-center">
                            <h3 className="text-lg font-semibold text-text-primary mb-2">Total Habits</h3>
                            <p className="text-2xl font-bold text-primary">5</p>
                        </div>
                        <div className="bg-bg-card shadow-md rounded-xl p-5 flex-1 min-w-[150px] text-center">
                            <h3 className="text-lg font-semibold text-text-primary mb-2">Completed</h3>
                            <p className="text-2xl font-bold text-text-primary">3</p>
                        </div>
                        <div className="bg-bg-card shadow-md rounded-xl p-5 flex-1 min-w-[150px] text-center">
                            <h3 className="text-lg font-semibold text-text-primary mb-2">Missed</h3>
                            <p className="text-2xl font-bold text-red-500">2</p>
                        </div>
                    </div>

                    <div className="mt-8" data-aos="fade-down" data-aos-duration="1000">
                        <h3 className="text-xl font-semibold text-center md:text-start text-text-primary mb-4">Weekly Progress</h3>
                        <div className="flex items-end h-52 gap-3 bg-bg-card p-4 rounded-lg shadow">
                            <div className="w-8 bg-primary text-center text-xs text-text-primary rounded-t-md" style={{ height: '80%' }}>Mon</div>
                            <div className="w-8 bg-primary text-center text-xs text-text-primary rounded-t-md" style={{ height: '60%' }}>Tue</div>
                            <div className="w-8 bg-primary text-center text-xs text-text-primary rounded-t-md" style={{ height: '100%' }}>Wed</div>
                            <div className="w-8 bg-primary text-center text-xs text-text-primary rounded-t-md" style={{ height: '50%' }}>Thu</div>
                            <div className="w-8 bg-primary text-center text-xs text-text-primary rounded-t-md" style={{ height: '90%' }}>Fri</div>
                            <div className="w-8 bg-primary text-center text-xs text-text-primary rounded-t-md" style={{ height: '70%' }}>Sat</div>
                            <div className="w-8 bg-primary text-center text-xs text-text-primary rounded-t-md" style={{ height: '30%' }}>Sun</div>
                        </div>
                    </div>

                </Container>
            </div>
            <Footer />
        </div >
    )
}

export default Stats;