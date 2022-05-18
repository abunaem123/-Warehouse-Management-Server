import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/PGR35Yy/slider-mcyhome-mt10sp.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/prqQbv9/01-sliders-60th-family-1920x748.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/RD7dpfy/slider-mcyhome-xsr900.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;