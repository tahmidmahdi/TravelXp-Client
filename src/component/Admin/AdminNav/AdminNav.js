import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div className='sidebar mt-5 '>

        <Link className='link' to="/home"><h3>Travel XP</h3></Link>
        <br /><br />
        <Link className='link' to="/orderlist"><h6><img style={{ height: '35px' }} src={cart} alt="" /> Order List</h6></Link>
        <br />
        <Link className='link' to='/addservice'> <h6><img style={{ height: '35px' }} src={list} alt="" /> Add Service</h6></Link>
        <br />
        <Link className='link' to='/makeadmin'><h6><img style={{ height: '35px' }} src={rating} alt="" /> Make Admin</h6></Link>
        <br />
        <Link className='link' to='/manage'><h6><img style={{ height: '35px' }} src={rating} alt="" /> Manage Service</h6></Link>
    </div>
    );
};

export default AdminNav;