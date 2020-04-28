import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CampListItem(props) {
    
    const isAdmin = useSelector(state => state.isAdmin);

    const onDelete = (e) => {
        e.target.disabled = true;
        props.onDelete(props.id);
    };

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">

            { props.avatar && <img src={props.avatar} className="card-img-top" alt="Thumbnail [100%x225]" />}

                <div className="card-body">
                    <Link to={`/camps/${props.id}`}>
                        <p className="card-text">{props.name}</p>
                    </Link>
                        <p>{props.location}</p>

                    <div className="btn-group">
                        {isAdmin && 
                            <Link to={`/edit/${props.id}`}>
                                <button type="button" className="btn btn-sm btn-outline-secondary">edit</button>
                            </Link>
                        }
                        {isAdmin && 
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onDelete}>delete</button>
                        }
                    </div>
                </div>
            </div> 
        </div>
    )
};
  
export default CampListItem;