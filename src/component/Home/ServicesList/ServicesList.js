import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ServicesList = ({ service }) => {
    return (
        <div className='col-md-4'>
            <Card className='mb-4' style={{ width: '22rem', height:'32rem' }}>
                <Card.Img variant="top" src={service.img} style={{height:'15rem'}}/>
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text style={{height:'96px'}}>
                        {service.description}
                    </Card.Text>
                    <button style={{width:'200px', height:'40px'}} className='button'>Explore the Trip</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServicesList;