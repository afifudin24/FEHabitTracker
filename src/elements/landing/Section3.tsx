import Image from "next/image"
import activity from "../../assets/activity.svg";
import activityDark from "../../assets/activitydark.svg";
import Container from "@/components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChartLine, faCheckCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const Section3 = () => {
    return (
    
        <div className="my-[30px]">
            <Container>
        <div className="works flex flex-col md:flex-row items-center justify-center  p--5 gap-5">
            <div className="left md:w-6/12 w-full p-2.5" data-aos="fade-left" data-aos-duration="1000">
                <h1 className="my-[30px] text-[2rem] text-center md:text-start font-bold mb-5">How It Works</h1>
                <Image src={activity} alt="activity" className="my-2.5 block h-[80%] w-[100%] dark:hidden imglight"  />
                <Image src={activityDark} className="my-2.5 h-[80%] w-[100%] hidden dark:block" alt="darkimg" />
                <p className="md:text-lg font-normal my-2">Our habit tracker helps you build and maintain positive habits by making it easy to track your progress every day. Follow these simple steps to get started:</p>
                </div>
                <div className="right md:w-6/12 w-full">
                   
                    <div className="steps md:flex text-text-primary gap-2.5 justify-evenly flex-wrap  hidden ">
                        <div className="step w-[40%] bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                          <FontAwesomeIcon icon={faPlusCircle} className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5" />
                          <h3 className="md:text-lg mb-2.5">Add Your Habit</h3>
                          <p className="md:text-base">Set up your habit and make a plan to track it daily.</p>
                        </div>
                        <div className="step w-[40%] bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                          
                          <FontAwesomeIcon icon={faCalendar}  className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5"  />
                          <h3 className="md:text-lg mb-2.5">Track Every Day</h3>
                          <p  className="md:text-base">Log your progress and track your habit consistently.</p>
                        </div>
                        <div className="step w-[40%] bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                         
                          <FontAwesomeIcon icon={faCheckCircle} className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5" />
                          <h3 className="md:text-lg mb-2.5">Stay Consistent</h3>
                          <p className="md:text-base">Make sure you stick to your routine and stay committed.</p>
                        </div>
                        <div className="step w-[40%] bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                          
                          <FontAwesomeIcon  icon={faChartLine} className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5" />
                          <h3 className="md:text-lg mb-2.5">See Your Growth</h3>
                          <p className="md:text-base">Visualize your progress and celebrate milestones along the way.</p>
                        </div>
                </div>

                <div className="steps md:hidden text-text-primary gap-2.5 justify-evenly flex-wrap flex-col  flex ">
                        <div className="step w-full bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                          <FontAwesomeIcon icon={faPlusCircle} className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5" />
                          <h3 className="md:text-lg mb-2.5">Add Your Habit</h3>
                          <p className="md:text-base">Set up your habit and make a plan to track it daily.</p>
                        </div>
                        <div className="step w-full bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                          
                          <FontAwesomeIcon icon={faCalendar}  className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5"  />
                          <h3 className="md:text-lg mb-2.5">Track Every Day</h3>
                          <p  className="md:text-base">Log your progress and track your habit consistently.</p>
                        </div>
                        <div className="step w-full bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                         
                          <FontAwesomeIcon icon={faCheckCircle} className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5" />
                          <h3 className="md:text-lg mb-2.5">Stay Consistent</h3>
                          <p className="md:text-base">Make sure you stick to your routine and stay committed.</p>
                        </div>
                        <div className="step w-full bg-bg-light text-text-primary group p-5 rounded-[10px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]
 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-bg-soft hover:shadow-[0_4px_8px_rgba(0,1,1,0.2)]" data-aos="fade-right" data-aos-duration="1000">
                          
                          <FontAwesomeIcon  icon={faChartLine} className="md:text-5xl text-4xl group-hover:text-primary text-secondary-gray mb-3.5" />
                          <h3 className="md:text-lg mb-2.5">See Your Growth</h3>
                          <p className="md:text-base">Visualize your progress and celebrate milestones along the way.</p>
                        </div>
                </div>
                </div>
               
        </div>
        </Container>
    </div>
  
    )
}

export default Section3;