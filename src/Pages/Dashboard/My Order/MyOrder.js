import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {

    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
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

            <div className='container my-5'>
                <h1 className='text-success'>My order List</h1>
                <div>
                    {
                        orders.map(order => <div key={order._id}>{
                            <div className='bg-success rounded-3 text-white py-3 m-4'>
                                <h5>Order ID: {order._id}</h5>
                                <h3>Name: {order.name}</h3>
                                <h3>Email: {order.email}</h3>
                                <h3>Phone: {order.phone}</h3>
                                <h3>Status: <span className='text-warning'>{order.status}</span></h3>
                                <button className='w-50 btn btn-danger' onClick={() =>    handleDeleteOrder(order._id)}>Delete Order</button>
                            </div>
                        }</div>)
                    }
                </div>
            </div>
    );
};

export default MyOrder;