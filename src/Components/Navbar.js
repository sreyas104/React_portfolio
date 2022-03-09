import React from "react";
import { Container } from "react-bootstrap/";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function Navbar1() {
    return (
        <div>
            <Navbar className="fixed" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SREYAS R</Navbar.Brand>
                    <Nav className="me-mx">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbar1;
