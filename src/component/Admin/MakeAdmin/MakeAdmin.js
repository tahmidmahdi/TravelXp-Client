import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNav from '../AdminNav/AdminNav';

const MakeAdmin = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://secure-sea-65701.herokuapp.com/adminEmail`,{
            method: 'POST',
            headers: { 'Content-type':'application/json'},
            body: JSON.stringify(data)
        })
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <AdminNav></AdminNav>
            </div>
            <div className="col-md-8 mt-5">
                <h1>Make Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='form mt-5'>
                    <label htmlFor="adminemail">Enter Email</label>
                    <br />
                    <input {...register("adminemail", { required: true })} placeholder="Enter Your Email" />
                    <br />
                    {errors.adminemail && <span>This field is required</span>}
        
                    <br /> <br />
                    <button style={{ width: '400px' }} className="button">Make Admin</button>
                </form>
            </div>
            
        </div>
    );
};

export default MakeAdmin;