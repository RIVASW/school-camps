import React from 'react';
import { Link } from 'react-router-dom';

const CampListItem = ({id, name, location}) => (
    <div className="camp-list">
        <Link to={`/camps/${id}`}>
            <p>{name}</p>
        </Link>
        <p>{location}</p>
    </div>
);

export default CampListItem;