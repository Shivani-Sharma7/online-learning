import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselImage from './CarouselImage'; 

const CustomCarousel = () => {
    return(
        <div className="custom-carousel-container">
            <Carousel className="custom-carousel">
                <Carousel.Item>
                <CarouselImage text="first" />
                </Carousel.Item>
                <Carousel.Item>
                <CarouselImage text="second" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
} 

export default CustomCarousel;