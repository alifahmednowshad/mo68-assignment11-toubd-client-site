import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://dry-escarpment-15503.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <div className='container my-5'>
                <h1 className="text-danger mt-5">Our Products</h1>
                <div className="d-flex row my-3 g-4">
                    {
                        services.map(service => <div  key={service._id} className="col-lg-4 col-md-6 col-12 "><Service
                            service={service}
                        ></Service></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;