import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100 banner"
                        src='https://i.ibb.co/PGR35Yy/slider-mcyhome-mt10sp.jpg'
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100 banner"
                        src='https://i.ibb.co/prqQbv9/01-sliders-60th-family-1920x748.jpg'
                        alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100 banner"
                        src='https://i.ibb.co/RD7dpfy/slider-mcyhome-xsr900.jpg'
                        alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;