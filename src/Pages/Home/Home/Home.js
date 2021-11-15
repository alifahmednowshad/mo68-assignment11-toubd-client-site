import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='top-banner d-flex align-items-center justify-content-center'>
                <h2 className='banner-text text-white fs-1 fw-bold p-4 rounded-3 bg-danger'>Welcome to My BuyBicycle.Com</h2>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;