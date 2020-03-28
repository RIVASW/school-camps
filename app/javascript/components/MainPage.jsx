import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleAdmin } from '../actions/isAdmin';

class MainPage extends React.Component {
    
    adminClick(e) {
        const { dispatch } = this.props;
        dispatch(toggleAdmin(e.target.checked));
    };

    render() {
        return (
            <div className="mainLinks">
                <Link to={`/camps`}>
                    <p>Camps</p>
                </Link>
                <Link to={`/activities`}>
                    <p>Activities</p>
                </Link>
                <Link to={`/add`}>
                    <p>Add camp or activity</p>
                </Link>
                Admin: <input type="checkbox" id="adminCheck"  checked={this.props.isAdmin} onChange={(e) => this.adminClick(e)}></input>
            </div>
        );
    }
}

const mapStateToProps = ((state) => {
    return {
        isAdmin: state.isAdmin
    };
});
  
export default connect (mapStateToProps)(MainPage);