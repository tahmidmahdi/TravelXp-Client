import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import cart from '../../../images/shopping-cart.svg'
import list from '../../../images/price-list.svg'
import rating from '../../../images/rating.svg'

const Sidebar = () => {
    return (
        <div className='sidebar mt-5 '>

            <Link className='link' to="/home"><h3>Travel XP</h3></Link>
            <br /><br />
            <Link className='link' to="/booking"><h6><img style={{ height: '35px' }} src={cart} alt="" /> Book</h6></Link>
            <br />
            <Link className='link' to='/bookinglist'> <h6><img style={{ height: '35px' }} src={list} alt="" /> Booking List</h6></Link>
            <br />
            <Link className='link' to='/review'><h6><img style={{ height: '35px' }} src={rating} alt="" /> Review</h6></Link>
        </div>
    );
};

export default Sidebar;