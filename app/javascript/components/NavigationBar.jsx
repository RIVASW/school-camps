import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LoginBlock } from './LoginBlock';
import styled from 'styled-components';

const NavStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
`;

export default function NavigationBar() {
    const isAdmin = useSelector(state => state.isAdmin);
   
    return(
        <NavStyle>
            <Navbar expand="lg">
                <Navbar.Brand><NavLink to="/camps" style={{ color: '#8aadbd' }}>Camps & activities</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="d-inline p-2" to="/camps" style={{ color: '#8aadbd' }} activeStyle={{ color: '#28627d' }}>Camps</NavLink>
                        { isAdmin && <NavLink className="d-inline p-2" to="/not_confirmed" style={{ color: '#8aadbd' }} activeStyle={{ color: '#28627d' }}>To confirm</NavLink> }
                        <NavLink className="d-inline p-2" to="/add" style={{ color: '#8aadbd' }} activeStyle={{ color: '#28627d' }}>Add camp</NavLink>
                        
                        <LoginBlock/>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavStyle>
    )
       
};