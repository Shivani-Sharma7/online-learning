import React from "react";
import {startCase} from 'lodash';
import { Button } from "react-bootstrap";

const CustomFeatured =()=> {
    const category={
        'Development':{
            'python':'36,354,994',
            'Web Development':'11,415,615',
            'Machine Learning':'7,070,015'
        },
        'Business':{
            'Financial Analysis':'1,195,282',
            'SQL':'5,977,561',
            'PMP':'1,733,398'
        },
        'IT and Software':{
            'Amazon AWS':'6,123,456',
            'Ethical Hacking':'10,931,066',
            'Cyber Security':'3,998,037'
        },
        'Design':{
            'Photoshop':'10,909,736',
            'Graphic Design':'3,381,052',
            'Drawing':'2,410,849'
        }
    }
    return(
        <>
            <div className='container text-start bg-light p-5'>
                <h3  style={{marginLeft: '50px'}}>
                    Featured topics by category
                </h3>
                <div className="d-flex justify-content-between p-5">
                    {Object.keys(category).map((mainCategory) => (
                        <div key={mainCategory}>
                            <h5>{startCase(mainCategory)}</h5>
                            <ul className="list-unstyled">
                                {Object.keys(category[mainCategory]).map((sub_category)=>(
                                    <>
                                        <li><a href='#' className="fw-bold">{startCase(sub_category)}</a></li>
                                        <li style={{color:'grey',marginBottom: '15px'}}>{category[mainCategory][sub_category]} learners</li>
                                    </>
                                ))}
                            </ul>
                            
                        </div>
                    ))}
                </div>
                <Button variant='outline-dark' style={{borderRadius: '0px',marginLeft: '50px'}}>Explore more topics</Button>
            </div>
        </>
    )
}

export default CustomFeatured;