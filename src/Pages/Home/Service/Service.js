import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {

    const { _id, title, price, des, img } = service;

    return (
        
            <div className="card my-card h-100  bg-light">
                <div className='p-2'>
                    <img src={img} className='rounded-3 service-img border card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body">
                    <h3>{title}</h3>
                    <p className="text-start">{des}</p>
                    <h5>Price: {price}</h5>
                </div>
                <div className="card-footer pt-0 mb-2 bg-light border-0">
                        <Link to={`/orderPlace/${_id}`}>
                            <button className="w-50 btn p-2 btn-danger">Booking Now</button>
                        </Link>
                    </div> 
            </div>
        
    );
};

export default Service;