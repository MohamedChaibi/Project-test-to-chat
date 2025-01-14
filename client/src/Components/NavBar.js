import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
    <div>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/">My project</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </div>
)
};

export default NavBar
