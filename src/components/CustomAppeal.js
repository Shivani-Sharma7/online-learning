import React from "react";
import { Button, Col, Container, Row  } from "react-bootstrap";
import {Image} from "react-bootstrap";

const CustomAppeal = () => {
    const instructor=require(`../images/instructor.jpg`);
    return(
        <>
            <Container className="p-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <Image src={instructor} alt='instructor' />
                    </Col>
                    <Col md={6}>
                        <h2>Become an instructor</h2>
                        <p>
                            Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.  
                        </p>
                        <Button variant='dark'style={{borderRadius: '0'}}>Start Teaching Today</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CustomAppeal;