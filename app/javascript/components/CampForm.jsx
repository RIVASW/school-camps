import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import ImageUpload from './ImageUpload';
import styled from 'styled-components';
import { addNewCamp } from '../actions/addForReview';
import { editCamp } from '../actions/editCamp';
import { resetCampForm } from '../actions/resetCampSubmited';
import { fetchCamp } from '../actions/camp';

const Mini = styled.img`
width: 277px;
height: 176px;
`;

const Header = styled.p`
color: #28627d;
font-size: 25px;
margin-bottom: 15px;
`;

function CampForm(props) {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [contacts, setContacts] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [avatarUrl, setAvatarUrl] = useState();

    const avatar = useSelector(state => state.newCampImage);
    const token = useSelector(state => state.authenticationToken);
    const isCampSubmited = useSelector(state => state.isCampSubmited);
    const currentCamp = useSelector(state => state.currentCamp);

    const dispatch = useDispatch();
    const history = useHistory();

    const campID = props.match.params.id;

    useEffect(() => {
        if (campID && currentCamp) {
            setName(currentCamp.name);
            setLocation(currentCamp.location);
            setPrice(currentCamp.price);
            setContacts(currentCamp.contacts);
            setDescription(currentCamp.description);
            setAvatarUrl(currentCamp.avatar);
        }
    }, [currentCamp]);
    
    useEffect(() => {
        campID && dispatch(fetchCamp(campID));
    }, []);

    useEffect(() => {
        isCampSubmited && history.push('/camps') 
    });

    useEffect(() => () => dispatch(resetCampForm()), []);

   const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !location) {
            setError('Please provide name, description and location.')
        } else {
            setError('');
            const newCamp = {name, location, price, contacts, description, avatar};
            if (campID) {
                dispatch(editCamp(currentCamp.id, newCamp, token));
            } else {
                dispatch(addNewCamp(newCamp, token));
            }
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="text-center border border-light p-3">
            <Header>Add camp:</Header>
                
            <div className="form-row">
                <div className="col-md-8">

                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="name"
                            autoFocus
                            className="form-control"
                            id="formGroupExampleInput"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="location"
                            className="form-control"
                            id="formGroupExampleInput1"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="price"
                            className="form-control"
                            id="formGroupExampleInput2"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            placeholder="contacts"
                            className="form-control"
                            id="formGroupExampleInput3"
                            value={contacts}
                            onChange={(e) => setContacts(e.target.value)}
                        />
                    </div>

                    <div className="md-form md-outline">
                        <textarea 
                            id="form75" 
                            className="md-textarea form-control" 
                            rows="3"
                            placeholder="information about the camp"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                {  avatarUrl && 
                    <div className="col-md-4">
                        <Mini src={avatarUrl}/>
                    </div>
                }
                <ImageUpload/>
                <button type="submit" className="btn btn-sm btn-outline-secondary">Submit</button>
                </div>
            </form>
        </div>
        )
};

export default CampForm;