import React from 'react';
import { Link } from 'react-router-dom';
import CampListItem from './CampListItem';

const CampsList = ({camps}) => (
    <div className="row">
        {camps.map((camp) => { 
            return <CampListItem key={camp.id} {...camp} />
        })}
    </div>
);

export default CampsList;