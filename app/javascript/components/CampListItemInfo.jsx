import React from 'react';
import styled from 'styled-components';
import { TextStyle } from './CampsList';

const style = {
    width: 554,
    height: 352,
    margin: 30, 
};

const CampListItemInfo = (props) => {
    const {id, name, description, contacts, price, location, avatar} = props.camp;
    return (    
        <TextStyle key={id}>
            <div className="row">
                <div className="col-md-6">
                    <h3>{name}</h3>
                    <a href={contacts} target="blank" style={{color: '#28627d'}}>Our website</a>
                    <p>Min price: {price}$</p>
                    <p>{description}</p>
                    <p>Location: {location}</p>
                </div>
                <div className="col-md-6">
                    <img src={avatar} style={style}/>
                </div>
            </div>
               
        </TextStyle>  
    );
};

export default CampListItemInfo;
