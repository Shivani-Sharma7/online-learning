import React, {useState} from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        user_fname:'',
        user_lname:'',
        user_dob:'',
        user_password:'',
        user_repassword:''
    });

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const submitSignupForm = (event) => {
        event.preventDefault();
        localStorage.setItem('formData',JSON.stringify(formData));
        navigate('/myaccount');
    }

    const login_image=require(`../images/login_image.webp`);
    return (
        <>
        <div className="container p-5 bg-light">
            <h3 className="pt-3 pb-5">Sign up to escalate your learning journey</h3>
            <Container>
                <Row>
                    <Col>
                        <img src={login_image} />
                    </Col>
                    <Col>
                        <Form onSubmit={submitSignupForm}>
                            <Form.Group>
                                <Form.Label>First Name: </Form.Label>
                                <Form.Control type='text' id='user_fname' name='user_fname' value={formData.user_fname} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last Name: </Form.Label>
                                <Form.Control type='text' id='user_lname' name='user_lname' value={formData.user_lname} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date of Birth </Form.Label>
                                <Form.Control type='date' id='user_dob' name='user_dob' value={formData.user_dob} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type='password' id='user_password' name='user_password' value={formData.user_password} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Retype Password: </Form.Label>
                                <Form.Control type='password' id='user_repassword' name='user_repassword' value={formData.user_repassword} onChange={handleInputChange} />
                            </Form.Group>
                            <Button variant="outline-dark mt-4" style={{borderRadius: '0px'}} type='submit'>
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </div>
        </>

    )
};

export default SignupPage;