import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const CampListItem = (props) => {
    const {id, location, name, isAdmin} = props;

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-body">
                    <Link to={`/camps/${id}`}>
                        <p className="card-text">{name}</p>
                    </Link>
                        <p className="card-text">{location}</p>
                </div>

                {isAdmin && 
                    <Link to={`/edit/${id}`}>
                        <p>EDIT</p>
                    </Link>
                }
            </div> 
        </div>
    )
};

const mapStateToProps = ((state) => {
    return {
        isAdmin: state.isAdmin
    };
});
  
export default connect (mapStateToProps)(CampListItem);