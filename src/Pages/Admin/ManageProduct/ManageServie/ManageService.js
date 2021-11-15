import React, { useEffect, useState } from 'react';


const ManageService = ({ service }) => {

    const { title, price, description, img } = service;

    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://dry-escarpment-15503.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://dry-escarpment-15503.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remainingOrders = orders.filter(order => order._id !== id);
                setOrders(remainingOrders);
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
                    {
                        orders.map(order => <button key={order._id} className='w-100 btn btn-danger' onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                    )}
                </div> 
            </div>
        
    );

};

export default ManageService;