import React from "react";
import { Container, Card, Button, Carousel } from "react-bootstrap";

const CustomTestimonials = () => {
  return (
    <>
      <div className="container bg-light p-5 text-start">
        <h4>How learners like you are achieving their goals</h4>
        <Carousel className="p-5">
          <Carousel.Item>
            <div className="d-flex">
              <Card className="me-3">
                <Card.Body>
                  <Card.Title>Hello 1</Card.Title>
                  <Card.Text>Content for Hello 1</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Hello 2</Card.Title>
                  <Card.Text>Content for Hello 2</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CustomTestimonials;
