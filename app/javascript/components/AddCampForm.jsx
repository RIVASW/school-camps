import React from 'react';
import { connect } from 'react-redux';
import ImageUpload from './ImageUpload';
import styles from "../styles/styles";
import photo from '../images/02.jpg';
import styled from 'styled-components';

const Mini = styled.img`
width: 277px;
height: 176px;
`;

class AddCampForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.camp ? props.camp.name : '',
            location: props.camp ? props.camp.location : '',
            price: props.camp ? props.camp.price : '',
            contacts: props.camp ? props.camp.contacts : '',
            description: props.camp ? props.camp.description : '',
            avatar: props.camp ? props.camp.avatar : '',
            error: ''
        };
    };
    
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }))
    };
    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState(() => ({ location }))
    };
    onPriceChange = (e) => {
        const price = e.target.value;
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }));
        }
    };
    onContactsChange = (e) => {
        const contacts = e.target.value;
        this.setState(() => ({ contacts }))
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.description || !this.state.location) {
            this.setState(() => ({ error: 'Please provide name, description and location.' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                name: this.state.name,
                location: this.state.location,
                price: this.state.price,
                contacts: this.state.contacts,
                description: this.state.description,
                avatar: this.props.image
            }, this.props.token)
        }
    };

    render() {
        return (
    <div>
        <div className="activities-list">
            <h5>Add camp:</h5>
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="name"
                    autoFocus
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                <input 
                    type="text"
                    placeholder="location"
                    value={this.state.location}
                    onChange={this.onLocationChange}
                />
                <input 
                    type="text"
                    placeholder="price"
                    value={this.state.price}
                    onChange={this.onPriceChange}
                />
                <input 
                    type="text"
                    placeholder="contacts"
                    value={this.state.contacts}
                    onChange={this.onContactsChange}
                />
                <input 
                    type="text"
                    placeholder="description"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                /> 
                <ImageUpload/>
                <Mini src={this.state.avatar}/>
                <button>Submit</button>
            </form>
        </div>
    </div>
        )
    }
};

const mapStateToProps=((state) => {
    return {
        image: state.newCampImage,
        token: state.authenticationToken
    }
  });
  
export default connect (mapStateToProps)(AddCampForm);

