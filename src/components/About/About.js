import React from 'react';
import SectionTwo from '../ExtraSection/SectionTwo/SectionTwo';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='container text-start '>
                <div class="row d-flex align-items-center my-4">
                    <div class="col-sm ">
                        <img className='about-img' src="https://i.ibb.co/SfN1PNb/image-2022-05-18-T08-42-53-803-Z.png" alt="" />
                    </div>
                    <div class="col-sm">
                        <h3>About Our Warehouse</h3>
                        <p>With roots starting out of the garage of a triathlete in 2012 to having a full warehouse operation - My Bike Shop has has grown rapidly based on a not-so-secret recipe: we hire really, really smart people who are also really, really nice. Most of ‘em also happen to love the sport of Bicking too. We’ve amassed some of the brightest minds who know Bicking, and more than that…they know cyclists. What binds us together in the MBS family is not two wheels, but what you can do on two wheels.</p>
                        <button className='btn btn-primary'>View Product</button>
                    </div>

                </div>
            </div>
            <div className='bg-light'>
                <SectionTwo></SectionTwo>
            </div>

            
        </div>
    );
};

export default About;