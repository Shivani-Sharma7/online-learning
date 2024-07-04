import React from "react";
import { Image } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

const CarouselImage = ({text}) => {
    const imagePath=require(`../images/carouselimage${text}.jpg`);
    return (
        <Image className="d-block w-100" src={imagePath} alt={text} />
    )
}

export default CarouselImage;