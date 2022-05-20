import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark m-0 py-4'>
            <div className='text-start container'>
                

                <div className='container text-start py-4'>
                    <div class="row d-flex align-items-center">
                        <div class="col-sm ">
                            <h2 className='text-white'><span className='text-primary'>Bike</span> Warehouse</h2>
                            <p className='text-white'>For some people, a motorcycle is just a two-wheeler used for transportation, while on the other hand, for others, it is more like an emotion.</p>
                        </div>
                        <div class="col-sm footer-link">
                            <h5 className='text-white'>Quick Link</h5>
                            <a className='text-white text-decoration-none' href="/home">Home</a><br />
                            <a className='text-white text-decoration-none' href="/about">About</a><br />
                            <a className='text-white text-decoration-none' href="/blogs">Blogs</a>
                        </div>

                    </div>
                </div>

                <div>
                    <div className='text-white m-0 border-top text-center pt-2'>
                        <p className='m-0'>© 2022 Laptop Warehouse. All rights reserved</p>
                        <p className='text-white m-0'>Web Build By <b><a className='text-primary text-decoration-none' href="https://abunaem.com/">Abu Naem</a></b></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;