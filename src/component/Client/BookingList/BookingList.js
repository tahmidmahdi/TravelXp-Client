import React, { useContext, useEffect, useState } from 'react';
import { emailContext } from '../../../App';
import GetBookingList from '../GetBookingList/GetBookingList';
import Sidebar from '../Sidebar/Sidebar';




const BookingList = () => {
    const [bookings, setBookings] = useState([])
    const[loggedInUser] = useContext(emailContext)
    useEffect(() => {
        fetch(`https://secure-sea-65701.herokuapp.com/getBookingList/`+loggedInUser)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[loggedInUser])
    console.log(bookings);
    
    return (
        <div className="row">
            <div className="col-md-4" style={{height:'22rem'}}>
                <Sidebar></Sidebar>
            </div>
 
                {
                     bookings.map(book => <GetBookingList key={book._id} book={book} > </GetBookingList>)
                } 
          
        </div>
    );
};

export default BookingList;