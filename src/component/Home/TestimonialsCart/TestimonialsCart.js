import React from 'react';
import qoute from '../../../images/left-quotes-sign.svg'

const TestimonialsCart = ({review}) => {
    return (
        <div className="col-md-4 mt-3 meetGuide">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{review.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{review.designation}</h6>
                    <p class="card-text text-danger"><img style={{height: "10px"}} src={qoute} alt=""/> {review.description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCart;