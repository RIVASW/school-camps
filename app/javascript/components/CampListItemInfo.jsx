import React from 'react';

const CampListItemInfo = (props) => {
    const {id, name, description, contacts} = props.camp;
    return (       
        <div key={id}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{contacts}</p>
        </div>
    );
};

export default CampListItemInfo;