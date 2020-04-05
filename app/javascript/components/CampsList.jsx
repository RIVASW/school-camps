import React from 'react';
import { Link } from 'react-router-dom';
import CampListItem from './CampListItem';

const CampsList = ({camps}) => (
    <div className="container">
        <div className="row">
            {camps.map((camp) => { 
                return <CampListItem key={camp.id} {...camp} />
            })}
        </div>
    </div>
);

export default CampsList;

