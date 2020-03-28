import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (
    
    <Navbar>
        {/* <Navbar.Brand href="/">Camps and Activities</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/camps">Camps</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/activities">Activities</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/add">Add camp</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

// bg="light" expand="lg"