import React from 'react';
import { connect } from 'react-redux';
import CampsList from './CampsList';
import { fetchCamps } from '../actions/camps';

class CampsPage extends React.Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCamps());
  }

  render() {
    if (this.props.isFetching) {
      return (<div>loading...</div>)
    } else {
      return (
          <div>
            <h3 className="camps-header">Camps for kids</h3>
            <CampsList camps={ this.props.camps } />
          </div>
      );
    } 
  }
}

const mapStateToProps=((state) => {
  return {
    camps: state.camps,
    isFetching: state.camps ? false : true
  }
});

export default connect(mapStateToProps)(CampsPage);
