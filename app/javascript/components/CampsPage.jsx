import React from 'react';
import { connect } from 'react-redux';
import CampsList from './CampsList';
import { fetchCamps } from '../actions/camps';
import Image from './Image';
import styles from "../styles/styles";

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
            <div className="container">
              <Image/>
              <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
              <h3 className="mainText">Catalog of camps and activities for kids</h3>
          </div>
          <div>
            <h3 className="camps-header">Camps for kids</h3>
            <CampsList camps={ this.props.camps }/>
          </div>
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

export default connect (mapStateToProps)(CampsPage);
