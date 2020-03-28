import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import mainPhoto from '../images/seaphoto.jpg';

const Styles = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Chango&display=swap');
    .jumbo {
        background: url(${mainPhoto});
        background-size: cover;
        color: #efefef;
        height: 300px;
        position: relative;
        z-index: -2;
    }

    .mainText {
        font-size: 40px;
        color: white;
        font-family: 'Chango', cursive;
        text-align: center;
    }
`;

export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <Container>
            <p className="mainText">Catalog of camps and activities for kids</p>
        </Container>
    </Jumbo>
    </Styles>
);
// no-repeat fixed bottom