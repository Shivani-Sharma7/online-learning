import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselImage from './CarouselImage'; 

const CustomCarousel = () => {
    return(
        <Carousel>
            <Carousel.Item>
               <CarouselImage text="First Item" />
            </Carousel.Item>
        </Carousel>
    )
} 

export default CustomCarousel;