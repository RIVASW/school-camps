import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const CampListItem = (props) => {
    const {id, location, name, isAdmin} = props;

    return (
        <div className="camp-list">
            <Link to={`/camps/${id}`}>
                <p>{name}</p>
            </Link>
            <p>{location}</p>

            {isAdmin && 
                <Link to={`/edit/${id}`}>
                    <p>EDIT</p>
                </Link>
            } 
        </div>
    )
};

const mapStateToProps = ((state) => {
    return {
        isAdmin: state.isAdmin
    };
});
  
export default connect (mapStateToProps)(CampListItem);