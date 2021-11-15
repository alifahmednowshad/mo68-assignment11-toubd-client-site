import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid bg-danger py-2 text-center'>
            <div className='fs-3'>
                <i className="fab fa-facebook-square me-4 icons"></i>
                <i className="fab fa-linkedin me-4 icons"></i>
                <i className="fab fa-twitter-square icons"></i>
            </div>
            <h1 className="fs-1 fw-bold text-white">Buy Bicycle</h1>
            <p className='text-white'>© 2021 Buy Bicycle.com. All rights reserved.</p>
        </div>
    );
};

export default Footer;