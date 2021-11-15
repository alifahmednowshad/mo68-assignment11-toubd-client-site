import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {

    const {user, token} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://dry-escarpment-15503.herokuapp.com/orders?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to cancel order?');
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

            <div className='container my-5'>
                <h1 className='text-danger'>My order List</h1>
                <div>
                    {
                        orders.map(order => <div key={order._id}>{
                            <div className='bg-danger rounded-3 text-white py-3 m-4'>
                                <h6>Order ID: {order._id}</h6>
                                <h3>Name: {order.name}</h3>
                                <h6>Email: {order.email}</h6>
                                <h5>Phone: {order.phone}</h5>
                                <h3>Status: <span className='text-warning'>{order.status}</span></h3>
                                <button className='w-25 btn btn-primary text-white' onClick={() =>    handleDeleteOrder(order._id)}>Cancel Order</button>
                            </div>
                        }</div>)
                    }
                </div>
            </div>
    );
};

export default MyOrder;