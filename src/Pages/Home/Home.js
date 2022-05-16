import React from 'react';
import Banner from './Banner';
import ExceptionalBanner from './ExceptionalBanner';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <ExceptionalBanner></ExceptionalBanner>
           <MakeAppoinment></MakeAppoinment>
           <Testimonials></Testimonials>
           <Footer></Footer>
        </div>
    );
};

export default Home;