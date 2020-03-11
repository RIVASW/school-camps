import React from 'react';
import { connect } from 'react-redux';
import CampListItemInfo from './CampListItemInfo';
import { fetchCamp } from '../actions/camp';

class CampListItemPage extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        const campId = this.props.match.params.id;
        dispatch(fetchCamp(campId))
    };


    render() {
        if (this.props.isFetching) {
            return (<div>loading...</div>)
        } else {
            return (
                <div>
                    <CampListItemInfo
                        camp={this.props.camp}
                    />
                </div>
            );
        }
    }
    
};

const mapStateToProps = ((state) => {
    return {
        camp: state.currentCamp,
        isFetching: state.currentCamp ? false : true
    };
});

export default connect(mapStateToProps)(CampListItemPage);


