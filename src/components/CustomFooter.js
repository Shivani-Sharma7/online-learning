import React from "react";
import { Button } from "react-bootstrap";

const CustomFooter = () => {
    return (
        <div className="bg-dark p-5 text-start border border-secondary">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-around align-items-center mb-3">
                    <ul className="list-unstyled" style={{ fontSize: '14px' }}>
                        <li><span className="text-light">Udemy Business</span></li>
                        <li><span className="text-light">Teach on Udemy</span></li>
                        <li><span className="text-light">Get the app</span></li>
                        <li><span className="text-light">About us</span></li>
                        <li><span className="text-light">Contact us</span></li>
                    </ul>
                    <ul className="list-unstyled" style={{ fontSize: '14px' }}>
                        <li><span className="text-light">Careers</span></li>
                        <li><span className="text-light">Blog</span></li>
                        <li><span className="text-light">Help and Support</span></li>
                        <li><span className="text-light">Affiliate</span></li>
                        <li><span className="text-light">Investors</span></li>
                    </ul>
                    <ul className="list-unstyled" style={{ fontSize: '14px' }}>
                        <li><span className="text-light">Terms</span></li>
                        <li><span className="text-light">Privacy Policy</span></li>
                        <li><span className="text-light">Cookie settings</span></li>
                        <li><span className="text-light">Sitemap</span></li>
                        <li><span className="text-light">Accessibility statement
                        </span></li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Button variant="outline-light" style={{borderRadius: '0'}}><i className="bi bi-globe"></i>&nbsp;&nbsp;English</Button>
                        </li>
                    </ul>
                </div>
                <div className=" d-flex justify-content-between align-items-center">
                    <h3 className="text-light">Udemy</h3>
                    <span className="text-light" style={{ fontSize: '12px', textAlign: 'right' }}>© 2024 Udemy, Inc.</span>
                </div>
            </div>
        </div>
    )
}

export default CustomFooter;
