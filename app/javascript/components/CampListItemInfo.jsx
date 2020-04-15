import React from 'react';

const style = {
    width: 554,
    height: 352,
    margin: 30 
}

const CampListItemInfo = (props) => {
    const {id, name, description, contacts, price, avatar} = props.camp;
    return (    
        <div key={id}>
            <h2>{name}</h2>
            <a>{contacts}</a>
            <p>{price}</p>
            <img src={avatar} style={style}/>
            <p>{description}</p>
            
        </div>  
    );
};

export default CampListItemInfo;
