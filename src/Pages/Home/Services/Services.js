import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://pacific-castle-02145.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container my-5' id="services">
            <h1 className="text-success mt-5">Our services</h1>
            <div className="d-flex row my-3 g-4">
                {
                    services.map(service => <div  key={service._id} className="col-lg-6 col-md-6 col-12 "><Service
                        service={service}
                    ></Service></div>)
                }
            </div>
        </div>
    );
};

export default Services;