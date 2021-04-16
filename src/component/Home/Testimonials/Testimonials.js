import React, { useEffect, useState } from 'react';
import TestimonialsCart from '../TestimonialsCart/TestimonialsCart';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/getReview`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className="container mt-5 pt-5">
            <h1>Review From Our Customer</h1>
            <div className="row">
                {
                    reviews.map(review => <TestimonialsCart key={review._id} review={review}></TestimonialsCart>)
                }
            </div>
        </div>
    );
};

export default Testimonials;