import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import volks from '../images/volkswagen_logo.svg';
// import cisco from '../images/cisco_logo.svg';
// import citi from '../images/citi_logo.svg';
// import ericsson from '../images/ericsson_logo.svg';
// import hp from '../images/hewlett_packard_enterprise_logo.svg';
// import procter from '../images/proctor_gamble_logo.svg';
// import samsung from '../images/samsung_logo.svg';
// import vimeo from '../images/vimeo_logo.svg';

const CustomJumbotron = () => {
    return(
        <div>
            <Container fluid className="p-5">
            </Container>
            <Container fluid className="p-5 bg-light text-center text-format">
                <Row>
                    <Col>
                        <h5  >Trusted by over 15,000 companies and millions of learners around the world</h5>
                        <img src={volks} alt='volkswagen'/>
                        <img src={volks} alt='cisco'/>
                        <img src={volks} alt='citi'/>
                        <img src={volks} alt='ericsson'/>
                        <img src={volks} alt='hp'/>
                        <img src={volks} alt='proctor'/>
                        <img src={volks} alt='samsung'/>
                        <img src={volks} alt='vimeo'/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default CustomJumbotron;