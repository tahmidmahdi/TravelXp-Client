import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (

        <Navbar  expand="lg" className="container">
            <Navbar.Brand href="#home">Travel XP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto ">
                    <Link className="nav-link" to="/home"><span className="text-white">Home</span></Link>
                    <Link className="nav-link" to="/home"><span className="text-white">About US</span></Link>
                    <Link className="nav-link" to="/home"><span className="text-white">Travel Guide</span></Link>
                    <Link className="nav-link" to="/home"><span className="text-white">Discover</span></Link>
                    <Link className="nav-link" to="/home"><span className="text-white">Feature</span></Link>
                    <Link className="nav-link" to="/home"><span className="text-white">Contract Us</span></Link>
                   
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;