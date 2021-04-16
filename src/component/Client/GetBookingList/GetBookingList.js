import React from 'react';

const GetBookingList = ({book}) => {
    return (
        <div className=" container col-md-4 mt-5">
            <div style={{cursor:'pointer'}} class="card" style={{width: "22rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{book.event}</h5>
                    <br/>
                    <h6 class="card-subtitle mb-2 text-muted">by: {book.name}</h6>
                    <p class="card-text">Travel XP is a trusted company what can provide you a great travel Experiences. We are happy To Provide Our customer a better and qualityful experience. Your Package <strong>{book.event}</strong>- is trusted by our other Customers</p>
                    <small>Thank You For Trusting Us</small>
                </div>
            </div>
        </div>
    );
};

export default GetBookingList;