import React from 'react';

const TestimonialsCart = ({review}) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{review.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{review.designation}</h6>
                    <p class="card-text text-danger">{review.description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCart;