import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { emailContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import './Booking.css'

const Booking = () => {
    const[loggedInUser] = useContext(emailContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [book, setBook] = useState({})


    const onSubmit = data => {
        
        fetch(`http://localhost:4000/book`,{
            method: 'POST',
            headers: { 'Content-type':'application/json' },
            body: JSON.stringify(data)
        })
        .then(console.log('successfull'))
        console.log(data)
    };


    const {e} = useParams()
    console.log('params', e);


    // const handlePaymentSuccess = paymentId =>{

    //     book.paymentId = paymentId

    //     fetch(`http://localhost:4000/book`,{
    //         method: 'POST',
    //         headers: { 'Content-type':'application/json' },
    //         body: JSON.stringify(book)
    //     })
    //     .then(console.log('successfull'))
    //     console.log(book)
    // }
   

    // style={{display: book ? 'none':'block'}}


    return (
        <div className='container row'>
            <div className='col-md-4'>
                <Sidebar></Sidebar>
            </div>
            <div  className="col-md-8 mt-5 booking text-center">
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
                    <label htmlFor="event">Event You Want To Booked</label>
                    <br/>
                    <input defaultValue={e} {...register("event", { required: true })} placeholder="Enter Your Name" />
                    <br/> 
                    {errors.event && <span>This field is required</span>}
                    <br/> <br/>
                    <button style={{width:'400px'}} className="button">Book</button>
                </form>


                <br/> <br/>
               <div>
                    <h4>Pay With Card</h4>
                    <br/>
                    <ProcessPayment ></ProcessPayment>
               </div>
            </div>
           
        </div>
    );
};

export default Booking;