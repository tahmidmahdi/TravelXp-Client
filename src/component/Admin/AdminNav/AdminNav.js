import React from 'react';
import { Link } from 'react-router-dom';
import test from '../../../images/test.svg'
import add from '../../../images/add-file.svg'
import admin from '../../../images/administrator.svg'
import manage from '../../../images/technical-support.svg'

const AdminNav = () => {
    return (
        <div className='sidebar mt-5 '>

        <Link className='link' to="/home"><h3>Travel XP</h3></Link>
        <br /><br />
        <Link className='link' to="/admin"><h6><img style={{ height: '35px' }} src={test}  alt="" /> Order List</h6></Link>
        <br />
        <Link className='link' to='/addservice'> <h6><img style={{ height: '35px' }} src={add} alt="" /> Add Service</h6></Link>
        <br />
        <Link className='link' to='/makeadmin'><h6><img style={{ height: '35px' }} src={admin} alt="" /> Make Admin</h6></Link>
        <br />
        <Link className='link' to='/manage'><h6><img style={{ height: '35px' }} src={manage} alt="" /> Manage Service</h6></Link>
    </div>
    );
};

export default AdminNav;