import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Form,Row,Col,Button} from 'react-bootstrap';

const CustomNavbar = () => {
    return(
        <>
            <Navbar bg="white" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Udemy</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Form inline>
                            <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search for anything"
                                className=" mr-sm-2"
                                />
                            </Col>
                            </Row>
                        </Form>
                    </Nav>
                    <Nav className="align-items-center">
                        <Nav.Link href="#features">Plans & Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Udemy Business</Nav.Link>
                        <Nav.Link href="#pricing">Tech on Udemy</Nav.Link>
                        <Nav.Link className='align-text-middle'>
                            <Button variant='light' style={{borderRadius: '0'}}>Log in</Button></Nav.Link>
                        <Nav.Link className='align-text-middle'>
                            <Button variant='dark' style={{borderRadius: '0'}}>Sign up</Button>
                        </Nav.Link>
                        <Nav.Link className='align-text-middle'>
                            <Button variant='light' style={{borderRadius: '0'}}><i className="bi bi-globe"></i></Button>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
} 

export default CustomNavbar;