import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LoginBlock } from './LoginBlock';
import styled from 'styled-components';

const NavStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
  color: #8aadbd;
`;

export default function NavigationBar() {
   
    return(
        <NavStyle>
            <Navbar expand="lg">
                <Navbar.Brand><NavLink to="/camps">Camps & activities</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="d-inline p-2" to="/camps">Camps</NavLink>
                        <NavLink className="d-inline p-2" to="/activities">Activities</NavLink>
                        <NavLink className="d-inline p-2" to="/add">Add camp</NavLink>
                        
                        <LoginBlock/>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavStyle>
    )
       
};