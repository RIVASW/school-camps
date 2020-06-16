import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FontStyle = styled.div`
    @media (min-width: 320px) {font-size: 20px};
    @media (min-width: 768px) {font-size: 25px};
    @media (min-width: 1024px) {font-size: 20px};
`;

function CampListItem(props) {
    const isAdmin = useSelector(state => state.isAdmin);

    const onDelete = (e) => {
        props.onDelete(props.id);
    };

    const linkTo = props.confirmed ? '/camps' : '/not_confirmed';

    return (
        <div className="col-lg-4">
            <div className="card mb-4 box-shadow">

            { props.avatar && <img src={props.avatar} className="card-img-top" alt="Thumbnail [100%x225]" />}

                <div className="card-body">

                    <FontStyle>
                        <Link to={`/camps/${props.id}`} style={{color: '#28627d'}}>
                            <p className="card-text">{props.name}</p>
                        </Link>
                            <p>{props.location}</p>
                    </FontStyle>

                    <div className="btn-group">
                        {isAdmin && 
                            <Link to={`/edit/${props.id}${linkTo}`}>
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