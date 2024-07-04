import React, { useState, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
 
const CustomCourses = () => {
    const courses_list={
        'Python':{
            'heading':'Expand your career opportunities with Python',
            'content':'Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build...'
        },
        'Excel':{
            'heading':'Analyze and visualize data with Excel',
            'content':'Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex...'
        },
        'Web Development':{
            'heading':'Build websites and applications with Web Development',
            'content':'The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we...'
        },
        'Javascript':{
            'heading':'Grow your software development skills with JavaScript',
            'content':'JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers...'
        },
        'Data Science':{
            'heading':'Lead data-driven decisions with Data Science',
            'content':'Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and...'
        },
        'Amazon AWS':{
            'heading':'Become an expert in cloud computing with AWS Certification',
            'content':'Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales...'
        },
        'Drawing':{
            'heading':'Expand your creative skillset with Drawing',
            'content':'Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an...'
        }
    }

    const [heading,setHeading]=useState('');
    const [content,setContent]=useState('');
    const [buttonText,setButtonText]=useState('');
    
    const showContent = (each_content) => {
        const course=each_content.each_course;
        const course_data=courses_list[course];
        setHeading(course_data.heading);
        setContent(course_data.content);
        setButtonText(course);
    }

    useEffect(() => {
        const course=Object.keys(courses_list)[0];
        setHeading(courses_list[course].heading);
        setContent(courses_list[course].content);
        setButtonText(course);
    },[]);
        
    
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
                    {Object.keys(courses_list).map((each_course)=>(
                        <Nav.Item>
                        <Nav.Link style={{ color: 'grey', fontWeight: 'bold',fontSize: '15px' }} onClick={()=>{showContent({each_course})}}>{each_course}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <div className="mt-3 border p-3 text-start">
                    <h4>{heading}</h4>
                    <p id="course_content">{content}</p>
                    <Button variant="outline-dark" style={{borderRadius:'0px'}}>Explore {buttonText}</Button>
                </div>
            </div>
            <Container fluid className="p-5"></Container>
    </>
    )
}

export default CustomCourses;