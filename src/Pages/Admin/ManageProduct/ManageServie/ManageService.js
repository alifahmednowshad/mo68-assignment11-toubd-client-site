import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ManageService = ({ service }) => {

    const { title, price, description, img } = service;

    const [services, setServices] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch('https://dry-escarpment-15503.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDeleteServices = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://dry-escarpment-15503.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remainingOrders = services.filter(service => service._id !== id);
                setServices(remainingOrders);
            }
        });
        }
    }

    return (
        
            <div className="card my-card h-100  bg-light">
                <div className='p-2'>
                    <img src={img} className='rounded-3 service-img border card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body">
                    <h3>{title}</h3>
                    <p className="text-start">{description}</p>
                    <h5>Price BDT: {price}</h5>
                </div>
                <div className="card-footer pt-0 mb-2 bg-light border-0">
                <button conClick={() => handleDeleteServices(service_id)}>Delete Product</button>
                </div> 
            </div>
        
    );

};

export default ManageService;

