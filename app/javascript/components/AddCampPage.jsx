import React from 'react';
import { connect } from 'react-redux';
import AddCampForm from './AddCampForm';
import { addNewCamp } from '../actions/addForReview'

const AddCampPage = (props) => {
    console.log (props);
    return (
        <div>
            <AddCampForm
                onSubmit={(forReview) => {
                    props.dispatch(addNewCamp(forReview));
                }}
            />
        </div>
    )
};

const mapStateToProps=((state) => {
    return {
        state
    }
  });
  
export default connect (mapStateToProps)(AddCampPage);