import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import photo1 from '../images/02.jpg';
import { deleteCamp } from '../actions/deleteCamp';

class CampListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onDelete = () => {
        const { dispatch } = this.props;
        dispatch(deleteCamp(this.props.id));
    }

    render(){
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">

            <img src={photo1} className="card-img-top" alt="Thumbnail [100%x225]" />

                <div className="card-body">
                    <Link to={`/camps/${this.props.id}`}>
                        <p className="card-text">{this.props.name}</p>
                    </Link>
                        <p>{this.props.location}</p>

                    <div className="btn-group">
                        {this.props.isAdmin && 
                            <Link to={`/edit/${this.props.id}`}>
                                <button type="button" className="btn btn-sm btn-outline-secondary">edit</button>
                            </Link>
                        }
                        {this.props.isAdmin && 
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.onDelete}>delete</button>
                        }
                    </div>
                </div>
            </div> 
        </div>
    )}
};

const mapStateToProps = ((state) => {
    return {
        isAdmin: state.isAdmin
    };
});
  
export default connect (mapStateToProps)(CampListItem);