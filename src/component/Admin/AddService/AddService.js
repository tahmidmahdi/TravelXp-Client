import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminNav from '../AdminNav/AdminNav';

const AddService = () => {
    const [imgURL, setImgURL] = useState(null)
    const handleChange = e => {

        const form = new FormData();
        form.set('key', 'd5c178daff730a82d11eaf1d08f8994b')
        form.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', form)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImgURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...data };
        newData.image = imgURL;


        console.log(newData);

        fetch(`https://secure-sea-65701.herokuapp.com/addEvent`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData)
        })
        .then(console.log('Event Added Successfully'))
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminNav></AdminNav>
            </div>
            <div className="col-md-9 mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <label htmlFor="name">Service Name</label>
                    <br />
                    <input {...register("serviceName", { required: true })} placeholder="Enter Your Service Name" />
                    <br />
                    {errors.serviceName && <span>This field is required</span>}
                    <br />
                    <label htmlFor="description"> Description</label>
                    <br />
                    <input   {...register("description", { required: true })} placeholder="Enter Your Description" />
                    <br />
                    {errors.description && <span>This field is required</span>}
                    <br />
                    <input onChange={handleChange} type="file" name="file" id="" />

                    <br /> <br />
                    <button style={{ width: '400px' }} className="button">Add Service</button>
                </form>
            </div>

        </div>
    );
};

export default AddService;