import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ModalLoginForm from './ModalLoginForm';
import { showLoginForm, hideLoginForm, logOut } from '../actions/modalLoginForm';
import { userSignin } from '../actions/userLogin';
import { setToken } from '../actions/userLogin';

export function LoginBlock() {
    const dispatch = useDispatch();
    const isLoginFormVisible = useSelector(state => state.isLoginFormVisible);
    const isLoginError = useSelector(state => state.isUserLoginError);
    const isAdmin = useSelector(state => state.isAdmin);
    const authenticationToken = useSelector(state => state.authenticationToken);

    const TOKEN = 'token';
    const [cookies, setCookie, removeCookie] = useCookies([TOKEN]);

    useEffect(() => {
        if (cookies.token) {
            dispatch(setToken(cookies.token));
        }
    }, [cookies.token])

    useEffect(() => {
        if (isAdmin) {
            setCookie(TOKEN, authenticationToken, { path: '/' });
        } else {
            removeCookie(TOKEN, { path: '/' });
        }
    }, [isAdmin]);



    return(
        <ButtonToolbar>
            {
                isAdmin && 
                <Button onClick={() => dispatch(logOut())} style={{background: '#28627d'}}>
                    Log out
                </Button>
            }

            {
                !isAdmin &&
                <Button onClick={() => dispatch(showLoginForm())} style={{background: '#28627d'}}>
                    Sign in
                </Button>
            }
            <ModalLoginForm
                show={isLoginFormVisible}
                onHide={() => dispatch(hideLoginForm())}
                onLogin={(user) => dispatch(userSignin(user))}
                isLoginError={isLoginError}
            />
            
        </ButtonToolbar>
    )
}