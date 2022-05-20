import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import  logo from '../../Images/Naeem Web Logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div >
            {/* <Navbar bg="dark" variant="dark" className='pe-4'>
                <Container>
                    <Navbar.Brand href="/"><span className='text-primary fw-bold'>Bike</span> Warehouse</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="manageinventory">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="addmyitem">Add My Item</Nav.Link>

                                <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                            </>
                        }
                    </Nav>
                </Container>
                <Nav>
                    {
                        user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            :

                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                </Nav>
            </Navbar> */}

            <Navbar collapseOnSelect sticky='top' expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="manageinventory">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="addmyitem">Add My Item</Nav.Link>

                                <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                            </>
                        }
                        </Nav>
                        <Nav>
                        <Nav>
                    {
                        user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            :

                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;