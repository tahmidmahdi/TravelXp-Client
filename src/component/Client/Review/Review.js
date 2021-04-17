import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './Review.css'

const Review = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch(`https://secure-sea-65701.herokuapp.com/addReview`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(alert('review sent successfully'))
    };

    return (
        <div className="row ">
            <h1 className="text-center">WRITE REVIEW</h1>
            <div className="col-md-4 text-center">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5 text-center ">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label htmlFor="name">Enter Your Name</label>
                    <br/>
                    <input {...register("name", { required: true })} placeholder="Enter Your Name" />
                    <br/> 
                    {errors.name && <span>This field is required</span>}
                    <br/>
                    <label htmlFor="designation"> Your Designation</label>
                    <br/>
                    <input   {...register("designation", { required: true })} placeholder="Enter Your Designation" />
                    <br/> 
                    {errors.designation && <span>This field is required</span>}
                    <br/>
                    <label htmlFor="description">Description</label>
                    <br/>
                    <input  {...register("description", { required: true })} placeholder="Enter Your Description" />
                    <br/> 
                    {errors.description && <span>This field is required</span>}
                    <br/> <br/>
                    <button style={{width:'400px'}} className="button">Write Review</button>
                </form>

            </div>

        </div>
    );
};

export default Review;