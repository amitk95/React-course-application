import React, { useEffect } from 'react'
import {Card, Container, Button} from 'reactstrap'

const Home=() =>{
    useEffect(() => {
        document.title = "Home || Learncodewith Amit";
    }, []);


    return (
        <>
        <Card className= 'text-center bg-secondary' >
            <h1> LearnCode With Amit</h1>
            <p>
                Thi is developed by LearnCode with Amit for Learniing purpose and backend is on spring boot and frontend on react js

            </p>
            <Container>
                <Button color='primary mb-3'> Start using </Button>
            </Container>
        </Card>
        </>
    )

}

export default Home;