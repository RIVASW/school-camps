import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

const StyledJumbo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Chango&display=swap');
    .jumbo {
        background-color: #bfdce3;
        height: 300px;
        position: relative;
        z-index: -2;
        margin: 0;
        padding-top: 60px;
        @media (min-width: 320px) {padding-top: 40px};
        @media (min-width: 768px) {padding-top: 40px};
        @media (min-width: 1024px) {padding-top: 60px};
    }

    .mainText {
        @media (min-width: 320px) {font-size: 33px};
        @media (min-width: 768px) {font-size: 35px};
        @media (min-width: 1024px) {font-size: 42px};
        color: white;
        font-family: 'Overpass', sans-serif;
        text-align: center;
    }

    .jumboDescription {
        @media (min-width: 320px) {font-size: 23px};
        @media (min-width: 768px) {font-size: 23px};
        @media (min-width: 1024px) {font-size: 25px; padding-top: 15px};
        font-family: 'Overpass', sans-serif;
        text-align: center;
        color: white;
        padding-top: 0;
    }
`;

export const Jumbotron = () => (
    <StyledJumbo>
    <div fluid className="jumbo">
        <div className="container">
            <p className="mainText">The catalog of camps and activities for the kids</p>
            <p className="jumboDescription">School holiday camps and other activities. 
            <br/>Visit our 'Add camp' section to add the camp you would like to recommend.</p>
        </div>
    </div>
    </StyledJumbo>
);
