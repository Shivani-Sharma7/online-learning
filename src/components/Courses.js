import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const CustomCourses = () => {
    const courses_list=['Python','Excel','Web Development','Javascript','Data Science','Amazon AWS', 'Drawing']
    return(
        <>
            <Container fluid className="p-5">  
            </Container>
            <div className='container text-start'>
            <h3>A broad selection of courses</h3>
            <p>Choose from over 220,000 online video courses with new additions published every month</p>
            </div>
            <div className="container">
                <Nav>
                    {courses_list.map(each_course=>(
                    <Nav.Item >
                        <Nav.Link style={{ color: 'grey', fontWeight: 'bold',fontSize: '15px' }}>{each_course}</Nav.Link>
                    </Nav.Item>
                    ))}
                </Nav>
                <div className="mt-3 border p-3">
                    <h5>Selected Content:</h5>
                    <p></p>
                </div>
            </div>
            <Container fluid className="p-5"></Container>
    </>
    )
}

export default CustomCourses;