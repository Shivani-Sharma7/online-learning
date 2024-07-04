import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import volks from '../images/volkswagen_logo.svg';
import {Image} from 'react-bootstrap';

const CustomJumbotron = () => {
    const cisco=require(`../images/citi_logo.jpg`);
    const citi=require(`../images/citi_logo.jpg`);
    const ericsson=require(`../images/ericsson_logo.jpg`);
    const hp=require(`../images/hewlett_packard_enterprise_logo.jpg`);
    const proctor=require(`../images/procter_gamble_logo.jpg`);
    const samsung=require(`../images/samsung_logo.jpg`);
    const vimeo=require(`../images/vimeo_logo.jpg`);
    return(
        <div>
            <Container className="p-5">
            </Container>
            <Container className="p-5 bg-light text-center text-format">
                <h5 style={{color:'grey',marginBottom:'50px'}}>Trusted by over 15,000 companies and millions of learners around the world</h5>
                <Row>
                    <Col><img src={volks} alt='volkswagen'/></Col>
                    <Col><img src={cisco} alt='cisco' width='60px' height='50px'/></Col>
                    <Col><img src={citi} alt='citi' width='60px' height='50px'/></Col>
                    <Col><img src={ericsson} alt='ericsson' width='60px' height='50px'/></Col>
                    <Col><img src={hp} alt='hp' width='60px' height='50px'/></Col>
                    <Col><img src={proctor} alt='proctor' width='60px' height='50px'/></Col>
                    <Col><img src={samsung} alt='samsung' width='60px' height='50px'/></Col>
                    <Col><img src={vimeo} alt='vimeo' width='60px' height='50px'/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomJumbotron;