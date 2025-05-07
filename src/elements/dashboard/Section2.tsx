import Container from "@/components/Container";
import {H1, H2 } from "@/components/Heading";
import LogList from "./LogList";
const Section2 = () => {
    return (
        <>  
            <Container className="mt-8">
                <H2 className="text-center text-text-primary">
                    Today Logs
                </H2>
                <div className="m-auto w-[200px] rounded-4xl h-2.5 bg-primary"></div>
                <LogList />

            </Container>
        </>
    );
}

export default Section2;