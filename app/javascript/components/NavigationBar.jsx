import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Button, ButtonToolbar } from 'react-bootstrap';
import styled from 'styled-components';
import ModalLoginForm from './ModalLoginForm';
import { showLoginForm, hideLoginForm, logOut } from '../actions/modalLoginForm';
import { userSignin } from '../actions/userLogin';

const NavStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
  color: #8aadbd;
`;

class NavigationBar extends React.Component {
    constructor(props){
        super(props);
    }

    onShowClick = () => {
        const { dispatch } = this.props;
        dispatch(showLoginForm());
    };

    onHideClick = () => {
        const { dispatch } = this.props;
        dispatch(hideLoginForm());
    };

    onLogOut = () => {
        const { dispatch } = this.props;
        dispatch(logOut());
    }

    render() {
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
                            
                            <ButtonToolbar>
                                {
                                this.props.isLoginSucces && 
                                <Button onClick={this.onLogOut}>
                                    Log out
                                </Button>
                                }

                                {
                                !this.props.isLoginSucces &&
                                <Button onClick={this.onShowClick}>
                                    Sign in
                                </Button>
                                }
                                <ModalLoginForm
                                    show={this.props.isLoginFormVisible}
                                    onHide={this.onHideClick}
                                    onLogin={(user) => this.props.dispatch(userSignin(user))}
                                    isLoginError={this.props.isLoginError}
                                >
                                </ModalLoginForm>
                                
                            </ButtonToolbar>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </NavStyle>
        )
    }    
};

const mapStateToProps = ((state) => {
    return {
        isLoginFormVisible: state.isLoginFormVisible,
        isLoginError: state.isUserLoginError,
        isLoginSucces: state.isUserLoginSucces
    };
});
  
export default connect (mapStateToProps)(NavigationBar);