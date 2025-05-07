import Container from "@/components/Container";
import MotivationText from "./MotivationText";
import { H2 } from "@/components/Heading";
const Section4 = () => {
    return (
        <div className="my-20">
            <Container>
        <div className="w-full text-center"  data-aos="zoom-in-down" data-aos-offset="10" data-aos-duration="1000">
            <H2>Daily Motivation</H2>
          <div id="motivate" className="mt-8 w-full text-center  line align-middle"> 
                <MotivationText />
          </div>
        </div>
        </Container>
    </div>
    )
}

export default Section4;