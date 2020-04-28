import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

const StyledJumbo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Chango&display=swap');
    .jumbo {
        background-color: #bfdce3;
        height: 320px;
        position: relative;
        z-index: -2;
        margin-bottom: 0;
    }

    .mainText {
        font-size: 40px;
        color: white;
        font-family: 'Overpass', sans-serif;
        text-align: center;
    }

    .jumboDescription {
        font-size: 25px;
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
            <p className="mainText">Catalog of camps and activities for kids</p>
            <p className="jumboDescription">We collected camps and other activities for your kids on this web-site, 
            so that you could find exectly what you are looking for the kids not to be bored at home during school holidays</p>
        </Container>
    </Jumbo>
    </StyledJumbo>
);
