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
        margin-bottom: 0;
    }

    .mainText {
        @media (min-width: 768px) {font-size: 30px};
        @media (min-width: 992px) {font-size: 35px};
        @media (min-width: 1200px) {font-size: 45px};
        color: white;
        font-family: 'Overpass', sans-serif;
        text-align: center;
    }

    .jumboDescription {
        @media (min-width: 768px) {font-size: 21px};
        @media (min-width: 992px) {font-size: 23px};
        @media (min-width: 1200px) {font-size: 25px;};
        font-family: 'Overpass', sans-serif;
        text-align: center;
        color: white;
        padding-top: 20px;
    }
`;

export const Jumbotron = () => (
    <StyledJumbo>
    <Jumbo fluid className="jumbo">
        <Container>
            <p className="mainText">The catalog of camps and activities for the kids</p>
            <p className="jumboDescription">School holiday camps and other activities. 
            <br/>Visit our 'Add camp' section to add the camp you would like to recommend.</p>
        </Container>
    </Jumbo>
    </StyledJumbo>
);
