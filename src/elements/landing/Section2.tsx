"use client";

import Container from "@/components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCalendar, faChartLine } from "@fortawesome/free-solid-svg-icons";
const Section2 = () => {
    return (
        <div className="my-[30px]">
            <Container>
            <div className="title">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-center text-[2rem] font-bold mb-5">Essential Tools for Building Better Habits</h1>
            <p data-aos="fade-down" className="text-center text-[1rem] font-normal mb-5" data-aos-duration="1000">From daily tracking to personalized reminders, our features are designed to keep you motivated and on track toward your goals.</p>
           
            </div>   
            <div className="content">
                <div className="feature-item flex flex-col md:flex-row justify-between gap-[15px]">
                  
                <div className="item w-full md:w-[30%] text-center flex flex-col gap-[10px] p-5 border border-gray-300
rounded-r-[10px] rounded-l-[10px] ease-in-out duration-300 shadow-xs transition-transform hover:scale-105 hover:shadow-lg group"
     data-aos="zoom-in-down" data-aos-duration="1000">
    <div className="circle">
        <div className="icon w-auto inline-block p-2.5 rounded-r-[10px] rounded-l-[10px] group-hover:bg-primary bg-secondary-gray">
            <FontAwesomeIcon 
                icon={faCalendar} 
                className="text-bg-light text-[2rem] " 
            />
        </div>
    </div>
    <h3 className="text-base md:text-lg">Daily Habit Tracker</h3>
    <p>Track your daily habits with ease. Set goals, monitor your progress, and stay on top of your routine</p>
</div>
               
<div className="item w-full md:w-[30%] text-center flex flex-col gap-[10px] p-5 border border-gray-300
rounded-r-[10px] rounded-l-[10px] ease-in-out duration-300 shadow-xs transition-transform hover:scale-105 hover:shadow-lg group"
     data-aos="zoom-in-down" data-aos-duration="1000">
                        <div className="circle">
                        <div className="icon w-auto inline-block p-2.5 rounded-r-[10px] rounded-l-[10px] group-hover:bg-primary bg-secondary-gray">
                            <FontAwesomeIcon 
                icon={faChartLine} 
                className="text-bg-light text-[2rem] " 
            />
                            </div>
                        </div>
                        <h3> Progress Overview</h3>
                        <p>Visualize your growth with detailed charts and statistics that help you understand your habit-building journey.</p>

                    </div>
                    <div className="item w-full md:w-[30%] text-center flex flex-col gap-[10px] p-5 border border-gray-300
rounded-r-[10px] rounded-l-[10px] ease-in-out duration-300 shadow-xs transition-transform hover:scale-105 hover:shadow-lg group"
     data-aos="zoom-in-down" data-aos-duration="1000">
                        <div className="circle">
                        <div className="icon w-auto inline-block p-2.5 rounded-r-[10px] rounded-l-[10px] group-hover:bg-primary bg-secondary-gray">
                            <FontAwesomeIcon 
                icon={faBullseye} 
                className="text-bg-light text-[2rem] " 
            />
                                </div>
                        </div>
                        <h3> Streak & Goals</h3>
                        <p>Set and track your streaks and goals. Celebrate milestones and stay motivated to achieve your long-term objectives.</p>

                    </div>
                </div>
                </div>  
                </Container>
        </div>
  

    )
}

export default Section2;