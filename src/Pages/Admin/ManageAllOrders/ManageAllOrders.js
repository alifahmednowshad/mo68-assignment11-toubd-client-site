import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://pacific-castle-02145.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

   
    
    return (
        <div className='container my-5'>
            <div className='bg-success mt-5'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-4'>
                        <h2 className='text-white my-3'>Manage All Orders</h2>
                    </div>
                    <div  className='col-12 col-md-8 py-2'>
                        {
                            orders.map(order => <div className='row align-items-center m-4 bg-light p-1' key={order._id}>
                            <div className='col-12 col-md-6'>
                                <h5>{order.name}</h5>
                                <p className='mb-0 pb-1'>{order.email}</p>
                                <h6 className=''>Phone: {order.phone}</h6>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='d-flex  justify-content-center align-items-center'>
                                    <h4><span className='text-danger mx-3'>{order.status}</span></h4>
                                    <Link to={`/orders/update/${order._id}`}>
                                    <button className='btn btn-success mb-2'>Update Status</button></Link>
                                </div> 
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;