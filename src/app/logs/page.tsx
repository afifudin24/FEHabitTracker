"use client";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import NavbarDashboard from "@/components/NavbarDashboard";
import LogList from "@/elements/logs/LogList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@/components/Container";
import { H3 } from "@/components/Heading";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const Logs = () => {
    return (
        <div>
            <DarkModeToggle />
            < NavbarDashboard />

            <div className="flex min-h-[100vh] justify-between flex-col">
                <div className="filter" data-aos="fade-down" data-aos-duration="1000">
                    <div className=" md:mt-10 mt-28">



                        <Container>

                            <H3>
                                LOGS
                            </H3>
                            <div className="flex items-center w-full md:w-6/12 gap-4">
                                {/* Input Date */}
                                <div className="relative w-full max-w-sm">
                                    <input
                                        type="date"
                                        id="date"
                                        className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                                        style={{
                                            position: 'relative',
                                            zIndex: 2,
                                        }}
                                    />
                                    <span className="absolute inset-y-0 right-5 flex items-center text-gray-500 pointer-events-none z-10">
                                        {/* <i className="fa-regular fa-calendar text-base"></i> */}
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </span>
                                </div>



                                {/* Filter Button */}
                                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition">
                                    Filter
                                </button>
                            </div>


                            <LogList />
                        </Container>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Logs;