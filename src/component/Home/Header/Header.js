import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { adminContext, emailContext } from '../../../App';
// import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    const [loggedInUser] = useContext(emailContext);
    const [admin] = useContext(adminContext);

    const isAdmin = admin.find(ad => ad.adminemail === loggedInUser)
    console.log(`is admin`, isAdmin);

    return (

        <Navbar expand="lg" className="container">
            <Navbar.Brand href="#home">Travel XP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto ">
                    <Link className="nav-link" to="/home"><span className="text-white nav-text">Home</span></Link>
                    <Link className="nav-link" to="/login"><span className="text-white nav-text">Login</span></Link>
                    <Link className="nav-link" to="/home"><span className="text-white nav-text">Travel Guide</span></Link>
                    <Link className="nav-link" to="/home"><span className="text-white nav-text">Discover</span></Link>
                    {(isAdmin === undefined) && <Link className="nav-link" to="/booking nav-text"><span className="text-white">Booking</span></Link>}
                    {(isAdmin) && <Link className="nav-link" to="/admin"><span className="text-white nav-text">Admin</span></Link>}

                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;