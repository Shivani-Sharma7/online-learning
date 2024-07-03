import React from 'react';
import {Card, Button, Carousel} from 'react-bootstrap';


const CustomWatched = () => {
    return (
        <>
            <div className='container text-start pt-3'>
                <h4>Learners are viewing</h4>
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
    )
}

export default CustomWatched;