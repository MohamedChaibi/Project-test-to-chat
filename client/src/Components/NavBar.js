import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';  // Ensure the path is correct based on your file structure



// Menu Items with Icons
const items = [
    { text: "Store", icon: "🏪", link: "/" },
    { text: "Sign In", icon: "🔑", link: "/login" },
    { text: "Sign Up", icon: "📝", link: "/register" },
    { text: "Profile", icon: "👤", link: "/profile" },
    { text: "Products", icon: "👤", link: "/Products" },
];

const NavBar = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Container>
            <Navbar.Brand href="/" style={{ fontSize: "24px", textTransform: "uppercase" }}>
Luxery
</Navbar.Brand>
                <Nav className="me-auto">
                    {items.map(({ text, icon, link }) => (
                        <Nav.Link key={text} href={link}>
                            {icon} {text}
                        </Nav.Link>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
