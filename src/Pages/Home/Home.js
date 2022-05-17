import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import ExceptionalBanner from './ExceptionalBanner';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <ExceptionalBanner></ExceptionalBanner>
           <MakeAppoinment></MakeAppoinment>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;