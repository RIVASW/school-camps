import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (

    <Navbar expand="lg">
        <Navbar.Brand><NavLink to="/camps">Camps & activities</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink className="d-inline p-2" to="/camps">Camps</NavLink>
                <NavLink className="d-inline p-2" to="/activities">Activities</NavLink>
                <NavLink className="d-inline p-2" to="/add">Add camp</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

