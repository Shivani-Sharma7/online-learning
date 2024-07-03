import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Image} from 'react-bootstrap';


const CustomBusiness = () => {
    const ub_logo=require(`../images/UB_Promo.jpg`);
    return(
        <>
            <Container className="p-5 text-start justify-content-between">
                <Row className="align-items-center">
                    <Col md={8}>
                    <h3>
                    Upskill your team with Udemy Business
                    </h3>
                    <div className='text-justify'>
                        <ul style={{fontSize:'20px'}}>
                            <li>Unlimited access to 26,000+ top Udemy courses, anytime, anywhere</li>
                            <li>
                            International course collection in 14 languages
                            </li>
                            <li>Top certifications in tech and business</li>
                        </ul>
                    </div>
                    <Button variant="dark" style={{borderRadius:'0px',marginRight:'10px'}}>Get Udemy Business</Button>
                    <Button variant="outline-dark" style={{borderRadius:'0px'}}>Learn more</Button>
                    </Col>
                    <Col md={4}><Image src={ub_logo} alt='UB_logo' height='100%' width='50%' /></Col>
                </Row>
            </Container>
        </>
    )
}

export default CustomBusiness;