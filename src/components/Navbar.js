import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { lowerCase } from 'lodash';

const CustomNavbar = () => {
    const [formData, setFormData] = useState({
        search_keyword: ''
    });

    const courses_list = {
        python: ['Python for Beginners', 'Python Intermediate', 'Python Advanced'],
        Javascript: ['Javascript for Beginners', 'Javascript Intermediate', 'Javascript Advanced'],
        'C#': ['C# for Beginners', 'C# Intermediate', 'C# Advanced'],
        SQL: ['SQL for Beginners', 'SQL Intermediate', 'SQL Advanced']
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const searchCourse = (event) => {
        event.preventDefault();
        let available=false;
        for (let key in courses_list){
            if(lowerCase(key).includes(lowerCase(formData.search_keyword))){
                available=true;
            }
            const values=courses_list[key];
            if (values.some(each_value=>lowerCase(each_value).includes(lowerCase(formData.search_keyword)))){
                available=true;
            }
        }
    };

    return (
        <>
            <Navbar bg="white" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Udemy</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Form inline onSubmit={searchCourse}>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        name="search_keyword"
                                        onChange={handleOnChange}
                                        value={formData.search_keyword}
                                        placeholder="Search for anything"
                                        className="mr-sm-2"
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Nav>
                    <Nav className="align-items-center">
                        <Nav.Link href="#features">Plans & Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Udemy Business</Nav.Link>
                        <Nav.Link href="#pricing">Tech on Udemy</Nav.Link>
                        <Nav.Link className="align-text-middle">
                            <Button variant="light" style={{ borderRadius: '0' }}>Log in</Button>
                        </Nav.Link>
                        <Nav.Link className="align-text-middle">
                            <Button variant="dark" style={{ borderRadius: '0' }}>Sign up</Button>
                        </Nav.Link>
                        <Nav.Link className="align-text-middle">
                            <Button variant="light" style={{ borderRadius: '0' }}><i className="bi bi-globe"></i></Button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
