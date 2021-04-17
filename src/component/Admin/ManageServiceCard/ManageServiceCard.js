import React from 'react';
import { Card } from 'react-bootstrap';

const ManageServiceCard = ({event}) => {
    console.log(event._id);
    const handleDelete = (id) =>{
        fetch(`https://secure-sea-65701.herokuapp.com/delete`,{
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({id})

        })
    }
    return (
        <div className="col-md-4 mt-5">
              <Card className='mb-4' style={{ width: '22rem', height:'32rem' }}>
                <Card.Img variant="top" src={event.image} style={{height:'15rem'}}/>
                <Card.Body>
                    <Card.Title>{event.serviceName}</Card.Title>
                    <Card.Text style={{height:'96px'}}>
                        {event.description}
                    </Card.Text>
                    <button onClick={() => handleDelete(event._id)}  style={{width:'200px', height:'40px'}} className='button'>Delete Event</button>
                </Card.Body>
            </Card>          
        </div>
    );
};

export default ManageServiceCard;