import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const LoginPage = () => {
    const login_image=require(`../images/login_image.webp`);
    return (
        <>
        <div className="container p-5 bg-light">
            <h3 className="pt-3 pb-5">Log in to continue your learning journey</h3>
            <Container>
                <Row>
                    <Col>
                        <img src={login_image} />
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email Address: </Form.Label>
                                <Form.Control type='email' placeholder='name@example.com' id='user_email' name='user_email'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type='password' id='user_password' name='user_password'  />
                            </Form.Group>
                            <Button variant="outline-dark mt-4" style={{borderRadius: '0px'}}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </div>
        </>

    )
};

export default LoginPage;