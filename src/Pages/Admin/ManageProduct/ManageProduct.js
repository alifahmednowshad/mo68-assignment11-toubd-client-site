import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
    const [services, setServices] = useState([]);

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
        <div>
        <div className='container my-5'>
            <h1 className="text-danger mt-5">Manage Services</h1>
            <div className="d-flex row my-3 g-4">
                {
                    services.map(service => <div  key={service._id} className="col-lg-4 col-md-6 col-12 "><div className="card my-card h-100  bg-light">
                    <div className='p-2'>
                        <img src={service.img} className='rounded-3 service-img border card-img-top img-fluid' alt="" />
                    </div>
                    <div className="card-body">
                        <h3>{service.title}</h3>
                        <p className="text-start">{service.description}</p>
                        <h5>Price BDT: {service.price}</h5>
                    </div>
                    <div className="card-footer pt-0 mb-2 bg-light border-0">
                    <button className='w-100 btn btn-danger' onClick={() => handleDeleteServices(service._id)}>Delete</button>
                    </div> 
                </div>
                </div>)}
            </div>
        </div>
    </div>
    );
};

export default ManageProduct;