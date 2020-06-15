import React from 'react';
import styled from 'styled-components';
// import { TextStyle } from './CampsList';

export const TextStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
  color: #8aadbd;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const style = {
    width: 525,
    height: 314,
    margin: 30, 
};

const CampListItemInfo = (props) => {
    const {id, name, description, contacts, price, location, avatar} = props.camp;
    return (    
        <TextStyle key={id}>
            <div className="row">
                <div className="col-lg-6">
                    <h3>{name}</h3>
                    <a href={contacts} target="blank" style={{color: '#28627d'}}>Our website</a>
                    <p>Min price: {price}$</p>
                    <p>{description}</p>
                    <p>Location: {location}</p>
                </div>
                <div className="col-lg-6">
                    <img src={avatar} style={style}/>
                </div>
            </div>
               
        </TextStyle>  
    );
};

export default CampListItemInfo;
