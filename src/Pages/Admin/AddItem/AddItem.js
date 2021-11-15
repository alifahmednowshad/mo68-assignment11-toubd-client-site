import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dry-escarpment-15503.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className='add-service my-5'>
            <h2 className='text-danger py-3'>Add Product</h2>
            <form className='col-12 col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true, maxLength: 20 })} placeholder='Product Name' />
            <textarea {...register("description")} placeholder='Description (minimum 200 word)' />
            <input type="number" {...register("price")} placeholder='Price' />
            <input {...register("img")} placeholder='Image Url' />
            <input className='btn btn-danger py-2' type="submit" />
            </form>
        </div>

    );
};

export default AddItem;