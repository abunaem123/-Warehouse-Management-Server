import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div >
            <Navbar bg="dark" variant="dark" className='pe-4'>
                <Container>
                    <Navbar.Brand href="/">Bike Inventory</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/products">Peoducts</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Container>
                <Nav>
                            {
                                user?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
            </Navbar>

        </div>
    );
};

export default Header;