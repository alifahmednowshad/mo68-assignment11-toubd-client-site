import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './OrderPlace.css'

const OrderPlace = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    useEffect( () => {
        fetch(`https://dry-escarpment-15503.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
    
        axios.post('https://dry-escarpment-15503.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order processed Successfully');
                reset();
            }
        });
    }

    return (
        
        <div>
            <div  className='container'>
            <h2 className='text-danger my-4'>Place Your Order</h2>
            <div className='row g-5'>
                <div className="col-12 col-md-6">
                    <img src={service.img} className='img-fluid w-100 my-img' alt="" />
                    <div className='bg-light py-3'>
                        <h3>{service.title}</h3>
                        <h5>Order ID: {serviceId}</h5>
                        <h3>Price BDT: {service.price}</h3>
                    </div>
                </div>
                <div className="col-12 col-md-6"> 
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <input className='col-12 mb-2 py-1' defaultValue={user.displayName} {...register("name")} />
                        <input className='col-12 mb-2 py-1' defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input className='col-12 mb-2 py-1' placeholder="Address" defaultValue="" {...register("address")} />
                        <input className='col-12 mb-2 py-1' placeholder="City" defaultValue="" {...register("city")} />
                        <input className='col-12 mb-2 py-1' placeholder="Phone" defaultValue='' {...register("phone")} />
                        <input className='d-none col-12 mb-2 py-1' defaultValue='pending' {...register("status")} />
                        <input className='col-12 btn btn-danger py-1 fs-5' type="submit" value='Order Place' />
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderPlace;