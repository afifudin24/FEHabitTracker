import NextNProgress from 'nextjs-progressbar';
import { H2 } from '@/components/Heading';
import { P1 } from '@/components/Paragraph';
import Container from '@/components/Container';
import Progress from '@/components/Progress';
import WeeklyTracker from './WeeklyTracker';
const Section3 = () => {
    return (
        <div className='my-20'>
            <Container>
                <div data-aos="fade-down" data-aos-duration="1000">

                    <H2 className='text-center my-5'>
                        Progress Overview
                    </H2>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000">

                    <P1 className='text-center my-5'>
                        This week you've completed <strong>18 of 28</strong> total habits ✅
                    </P1>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <Progress />
                </div>
                <WeeklyTracker />


            </Container>


        </div>
    );
}

export default Section3;