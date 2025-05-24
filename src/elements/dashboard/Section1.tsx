/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { P1 } from "@/components/Paragraph";
import { H2, H3 } from "@/components/Heading";
import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HabitList from "./HabitList";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { getDayName } from "@/functions/date";
import { getFormattedToday } from "@/functions/date";
const Section1 = ({ habits, setHabits, addLog }: any) => {
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        const updateUserFromLocalStorage = () => {
            const userData = localStorage.getItem("user");
            console.log(userData);
            if (userData) {
                setUser(JSON.parse(userData)); // ← set user state di komponen ini
            } else {
                window.location.href = "/login";
            }
        };

        updateUserFromLocalStorage(); // ← Dipanggil pertama kali saat komponen mount

        window.addEventListener("userUpdated", updateUserFromLocalStorage);

        console.log(user);
        return () => {
            window.removeEventListener("userUpdated", updateUserFromLocalStorage);
        };
    }, []);
    return (
        <Container className="md:mt-8 mt-20">
            <div className="flex gap-1  items-center justify-between flex-col md:flex-row">
                <div data-aos="fade-right" data-aos-duration="1000" className="left w-full md:w-6/12">
                    <P1 className="my-5 text-center md:text-start">
                        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                        {getDayName()}, {getFormattedToday()}
                    </P1>
                    <H2 className="my-5 text-center md:text-left">
                        Good Morning, {user?.name}
                    </H2>
                    <P1 className="my-5 text-center md:text-left">
                        Today is another chance to grow.
                        Check off your habits and stay consistent.

                    </P1>
                    <P1 className="my-5 text-center md:text-left">
                        You’ve completed <strong>2 of 4</strong> habits today <FontAwesomeIcon icon={faArrowRight} />
                    </P1>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="right md:w-6/12 w-full  p-2">
                    <Card className="w-full p-3">
                        <H3>
                            Today Habits
                        </H3>
                        <HabitList habits={habits} setHabits={setHabits} addLog={addLog} />
                    </Card>
                </div>
            </div>
        </Container>
    );
}

export default Section1;