import React, { useEffect, useState } from 'react';
import TestimonialsCart from '../TestimonialsCart/TestimonialsCart';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://secure-sea-65701.herokuapp.com/getReview`)
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
           <div className="text-center mt-3"> <button className="button ">Load More Review</button></div>
        </div>
    );
};

export default Testimonials;