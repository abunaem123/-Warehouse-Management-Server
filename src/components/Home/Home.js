import React from 'react';
import About from '../About/About';
import BlogSection from '../ExtraSection/BlogSection/BlogSection';
import SectionTwo from '../ExtraSection/SectionTwo/SectionTwo';

import Banner from './Banner/Banner';
import './Home.css'
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <SectionTwo></SectionTwo>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;