import React, { useEffect, useState } from 'react';
import ServicesList from '../ServicesList/ServicesList';
import { useHistory } from 'react-router';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://secure-sea-65701.herokuapp.com/allEvents`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    let history = useHistory();

    const handleClick = (e) =>{
        history.push("/booking/"+e);
    }
    return (
        <div className="container text-center mt-5 pt-5">
            <h1>Explore The World With Us</h1>
            <div className='row' >
                {
                    services.map(service => <ServicesList service={service} handleClick={handleClick}></ServicesList>)
                }
            </div>
        </div>
    );
};

export default Services;