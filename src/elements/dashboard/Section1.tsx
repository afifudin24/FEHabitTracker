import Container from "@/components/Container";
import { P1 } from "@/components/Paragraph";
import { H2, H3 } from "@/components/Heading";
import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HabitList from "./HabitList";
import Card from "@/components/Card";
const Section1 = () => {
    return (
        <Container className="md:mt-8 mt-20">
            <div className="flex gap-1  items-center justify-between flex-col md:flex-row">
                <div className="left w-full md:w-6/12">
                    <P1 className="my-5 text-center md:text-start">
                    <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                    Thursday, May 9, 2025
                    </P1>
                    <H2 className="my-5 text-center md:text-left">
                        Good Morning, Afif
                    </H2>
                    <P1 className="my-5 text-center md:text-left">
                    Today is another chance to grow.
                                    Check off your habits and stay consistent.
                                    
                    </P1>
                    <P1 className="my-5 text-center md:text-left">
                    You’ve completed <strong>2 of 4</strong> habits today <FontAwesomeIcon icon={faArrowRight} />
                    </P1>
                </div>
                <div className="right md:w-6/12 w-full  p-2">
                   <Card className="w-full p-3">
                    <H3>
                        Today Habits
                    </H3>
                    <HabitList />   
                   </Card>
                </div>
            </div>
        </Container>
    );
}

export default Section1;