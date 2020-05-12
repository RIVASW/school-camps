import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CampListItem from './CampListItem';
import { deleteCamp } from '../actions/deleteCamp';
import { fetchCamps } from '../actions/camps';
import { confirmDeleteCamp } from '../actions/deleteCamp';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { hideDeleteModal } from "../actions/modalDeleteForm";
import { setCurrentPage } from "../actions/pagination";
import Pagination from "./Pagination";
import styled from 'styled-components';

export const TextStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
  color: #8aadbd;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const CampsList = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.authenticationToken);
    const isDeleted = useSelector(state => state.isDeleted);
    const camps = useSelector(state => state.camps);
    const isFetching = useSelector(state => state.isFetching);
    const isConfirmDeleteVisible = useSelector(state => state.isConfirmDeleteVisible);
    const campToDeleteId = useSelector(state => state.campToDeleteId);
    const campsPerPage = useSelector(state => state.campsPerPage);
    const currentPage = useSelector(state => state.currentPage);

    const indexOfLastPost = currentPage * campsPerPage;
    const indexOfFirstPost = indexOfLastPost - campsPerPage;
    const currentPosts = camps.slice(indexOfFirstPost, indexOfLastPost);

    const onDelete = (id) => {
        dispatch(confirmDeleteCamp(id));
    };

    const onDeleteConfirm = () => {
        dispatch(deleteCamp(campToDeleteId, token))
    };

    const onHideDeleteModal = () => {
        dispatch(hideDeleteModal());
    };

    const paginate = (number) => {
        dispatch(setCurrentPage(number))
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
        <h3 className="pb-md-4 mx-auto text-center">Camps for kids</h3>
        <div className="container">
            <div className="row">
                {currentPosts.map((camp) => { 
                    return <CampListItem key={camp.id} {...camp} onDelete={onDelete}/>
                })}
            </div>
            <Pagination
                campsPerPage={campsPerPage}
                totalCamps={camps.length}
                paginate={paginate}
                currentPage={currentPage}
            />
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

