import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://pacific-castle-02145.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className='mt-4 mb-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register("price")} placeholder='Price' />
            <input {...register("img")} placeholder='Image Url' />
            <input type="submit" />
            </form>
        </div>

    );
};

export default AddReview;