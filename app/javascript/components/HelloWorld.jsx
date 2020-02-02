import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const GET_CAMPS_REQUEST = "GET_CAMPS_REQUEST";
const GET_CAMPS_SUCCESS = "GET_CAMPS_SUCCESS";

function getCamps() {
  console.log('getCamps() Action!');
  return dispatch => {
    dispatch({ type: GET_CAMPS_REQUEST });
    return fetch("v1/camps.json")
      .then(response => response.json())
      .then(json => dispatch(getCampsSuccess(json)))
      .catch(error => console.log(error));
  };
}

class HelloWorld extends React.Component {
  render () {
    const { camps } = this.props;
    const campList = camps.map( (camp) => {
       return <li key={camp.name}> {camp.name} {camp.time} </li>;
    });

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getCampsBtn" onClick={ () => this.props.getCamps()}> Get Camps </button>
        <br/>
        <ul> {campList} </ul>
      </React.Fragment>
    );
  }
}

export function getCampsSuccess(json) {
  return {
    type: GET_CAMPS_SUCCESS,
    json
  }
}

const structuredSelector = createStructuredSelector({
  camps: state => state.camps
});

const mapDispatchToProps = { getCamps };

HelloWorld.propTypes = {
  greetings: PropTypes.string
}

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
