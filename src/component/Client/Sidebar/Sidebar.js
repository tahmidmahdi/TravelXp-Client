import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar mt-5 '>

            <Link className='link' to="/home"><h3>Travel XP</h3></Link>
            <br/><br/>
            <h6>Book</h6>
            <br/>
            <h6>Booking List</h6>
            <br/>
            <h6>Review</h6>
        </div>
    );
};

export default Sidebar;