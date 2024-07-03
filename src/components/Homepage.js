import React from 'react';
import CustomNavbar from './Navbar';
import CustomCarousel from './Carousel';
import CustomJumbotron from './CustomJumbotron';
import CustomCourses from './Courses';
import CustomTestimonials from './CustomTestimonials';
import CustomWatched from './CustomWatched';
import CustomFooter from './CustomFooter';
import CustomAppeal from './CustomAppeal';
import CustomFeatured from './CustomFeatured';
import CustomBusiness from './CustomBusiness';

const Homepage = () => {
    return(
        <div>
            <CustomNavbar></CustomNavbar>
            <CustomCarousel></CustomCarousel>
            <CustomJumbotron></CustomJumbotron>
            <CustomCourses></CustomCourses>
            <CustomTestimonials></CustomTestimonials>
            <CustomWatched></CustomWatched>
            <CustomFeatured></CustomFeatured>
            <CustomBusiness></CustomBusiness>
            <CustomAppeal></CustomAppeal>
            <CustomFooter></CustomFooter>
        </div>
    )
}

export default Homepage;