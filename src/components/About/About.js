import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='d-flex container my-4 '>
            <div className='col-lg-6'>
                <img className='about-img' src="https://i.ibb.co/SfN1PNb/image-2022-05-18-T08-42-53-803-Z.png" alt="" />
            </div>
            <div className='col-lg-6 col-sm-12 align-items-center p-4 text-start' >
                <h3>This Is Heading</h3>
                <p>With roots starting out of the garage of a triathlete in 2012 to having a full warehouse operation - My Bike Shop has has grown rapidly based on a not-so-secret recipe: we hire really, really smart people who are also really, really nice. Most of ‘em also happen to love the sport of Bicking too. We’ve amassed some of the brightest minds who know Bicking, and more than that…they know cyclists. What binds us together in the MBS family is not two wheels, but what you can do on two wheels.</p>
                <button className='btn btn-primary'>View Product</button>
            </div>
            
        </div>
    );
};

export default About;