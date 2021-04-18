import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { emailContext, paymentContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import './Booking.css'

const Booking = () => {
    const[loggedInUser] = useContext(emailContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [paymentInfo] = useContext(paymentContext)



    const onSubmit = data => {
        const newData = {...data}
        newData.payment = paymentInfo;
        newData.status = 'pending'
        fetch(`https://secure-sea-65701.herokuapp.com/book`,{
            method: 'POST',
            headers: { 'Content-type':'application/json' },
            body: JSON.stringify(newData)
        })
        .then(console.log('successfull'))
        console.log(data)
        
    };


    const {e} = useParams()
    console.log('params', e);

    console.log(`paymentinfo`, paymentInfo);

    


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
                    <input defaultValue={e} {...register("event", { required: true })} placeholder="Event You Choose" />
                    <br/> 
                    {errors.event && <span>This field is required</span>}
                    <br/> <br/>
                   {/* {(paymentInfo[0]) && <button style={{width:'400px'}} className="button">Book</button>} */}
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