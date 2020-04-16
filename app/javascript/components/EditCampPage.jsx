import React from 'react';
import { connect } from 'react-redux';
import { deleteCamp } from '../actions/deleteCamp';
import { editCamp } from '../actions/editCamp';
import AddCampForm from './AddCampForm';
import { fetchCamp } from '../actions/camp';
import styled from 'styled-components';

const DivStyled = styled.div`
    margin-left: 200;
    margin-right: 200;
`;

class EditCampPage extends React.Component {

    componentWillMount() {
        const { dispatch } = this.props
        const campId = this.props.match.params.id;
        console.log(campId);
        dispatch(fetchCamp(campId))
    };

    render() {
        if (this.props.isFetching) {
            return (<div>loading...</div>)
        } else {
            return (
                <div>
                    <AddCampForm
                        camp={this.props.camp}
                        onSubmit={(camp) => {
                            this.props.dispatch(editCamp(this.props.camp.id, camp, this.props.token));
                        }}
                    />
                </div>
            );
        }
    }
    
};

const mapStateToProps = ((state) => {
    return {
        camp: state.currentCamp,
        isFetching: state.isFetching,
        token: state.authenticationToken
    };
});
  
export default connect (mapStateToProps)(EditCampPage);