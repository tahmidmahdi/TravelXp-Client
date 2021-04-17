import React from 'react';
import { Card } from 'react-bootstrap';

const ServicesList = ({ service, handleClick }) => {
    return (
        <div className='col-md-4'>
            <Card className='mb-4' style={{ width: '22rem', height:'32rem' }}>
                <Card.Img variant="top" src={service.image} style={{height:'15rem'}}/>
                <Card.Body>
                    <Card.Title>{service.serviceName}</Card.Title>
                    <Card.Text style={{height:'96px'}}>
                        {service.description}
                    </Card.Text>
                    <button onClick={() => handleClick(service.serviceName)} style={{width:'200px', height:'40px'}} className='button'>Book the Trip</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServicesList;