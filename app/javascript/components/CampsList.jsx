import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CampListItem from './CampListItem';
import { deleteCamp } from '../actions/deleteCamp';
import { fetchCamps } from '../actions/camps';
import styled from 'styled-components';
import { confirmDeleteCamp } from '../actions/deleteCamp';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { hideDeleteModal } from "../actions/modalDeleteForm";

const TextStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
  color: #8aadbd;
`;

const CampsList = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.authenticationToken);
    const isDeleted = useSelector(state => state.isDeleted);
    const camps = useSelector(state => state.camps);
    const isFetching = useSelector(state => state.isFetching);
    const isConfirmDeleteVisible = useSelector(state => state.isConfirmDeleteVisible);
    const campToDeleteId = useSelector(state => state.campToDeleteId);

    const onDelete = (id) => {
        dispatch(confirmDeleteCamp(id));
    };

    const onDeleteConfirm = () => {
        dispatch(deleteCamp(campToDeleteId, token))
    };

    const onHideDeleteModal = () => {
        dispatch(hideDeleteModal());
    };

    useEffect(() => {
       dispatch(fetchCamps());
    }, []);

    useEffect(() => { 
        isDeleted && dispatch(fetchCamps()) 
    });

    return(
        <div>
        <TextStyle>
        <h3 className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">Camps for kids</h3>
        <div className="container">
            <div className="row">
                {camps.map((camp) => { 
                    return <CampListItem key={camp.id} {...camp} onDelete={onDelete}/>
                })}
            </div>
        </div>
        </TextStyle>

        <ConfirmDeleteModal
            show={isConfirmDeleteVisible}
            onDeleteConfirm={onDeleteConfirm}
            onHide={onHideDeleteModal}
        />
        </div>
    )
}

export default CampsList;

