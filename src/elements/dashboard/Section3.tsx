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
            <H2 className='text-center my-5'>
                Progress Overview
            </H2>
            <P1 className='text-center my-5'>
                This week you've completed <strong>18 of 28</strong> total habits ✅
            </P1>

           <Progress />

            <WeeklyTracker />


</Container>


        </div>
    );
}

export default Section3;