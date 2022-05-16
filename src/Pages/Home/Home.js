import React from 'react';
import Banner from './Banner';
import ExceptionalBanner from './ExceptionalBanner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <ExceptionalBanner></ExceptionalBanner>
           <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;