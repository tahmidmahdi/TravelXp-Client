import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { emailContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Booking.css'

const Booking = () => {
    const[loggedInUser] = useContext(emailContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {e} = useParams()
    console.log('params', e);
    return (
        <div className='container row'>
            <div className='col-md-4'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5 booking text-center">
                <h3>Book</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <label htmlFor="name">Enter Your Name</label>
                    <br/>
                    <input {...register("name", { required: true })} placeholder="Enter Your Name" />
                    <br/> 
                    {errors.name && <span>This field is required</span>}
                    <br/>
                    <label htmlFor="email"> Your Email</label>
                    <br/>
                    <input defaultValue={loggedInUser || localStorage.getItem('email')}   {...register("email", { required: true })} placeholder="Enter Your Name" />
                    <br/> 
                    {errors.name && <span>This field is required</span>}
                    <br/>
                    <label htmlFor="event">Event You Booked</label>
                    <br/>
                    <input defaultValue={e} {...register("event", { required: true })} placeholder="Enter Your Name" />
                    <br/> 
                    {errors.event && <span>This field is required</span>}
                    <br/> <br/>
                    <button style={{width:'400px'}} className="button">Book</button>
                </form>

            </div>
        </div>
    );
};

export default Booking;