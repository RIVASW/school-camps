import React from 'react';
import { connect } from 'react-redux';
import CampsList from './CampsList';
import { fetchCamps } from '../actions/camps';
import styled from 'styled-components';

const TextStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', sans-serif;
  font-size: 1rem;
  color: #8aadbd;
`;

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
            <TextStyle>
                <h3 className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">Camps for kids</h3>
                <CampsList camps={ this.props.camps } />
            </TextStyle>
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
