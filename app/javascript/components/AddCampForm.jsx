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
            avatar: props.camp ? props.camp.avatar : null,
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
        this.setState(() => ({ price }));
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
            <form onSubmit={this.onSubmit} className="text-center border border-light p-5">
            <p className="h4 mb-4">Add camp:</p>
                
            <div className="form-row">
                <div className="col-md-8">

                    <div class="form-group">
                        <input 
                            type="text"
                            placeholder="name"
                            autoFocus
                            class="form-control"
                            id="formGroupExampleInput"
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                    </div>
                    
                    <div class="form-group">
                        <input 
                            type="text"
                            placeholder="location"
                            class="form-control"
                            id="formGroupExampleInput1"
                            value={this.state.location}
                            onChange={this.onLocationChange}
                        />
                    </div>

                    <div class="form-group">
                        <input 
                            type="text"
                            placeholder="price"
                            class="form-control"
                            id="formGroupExampleInput2"
                            value={this.state.price}
                            onChange={this.onPriceChange}
                        />
                    </div>

                    <div class="form-group">
                        <input 
                            type="text"
                            placeholder="contacts"
                            class="form-control"
                            id="formGroupExampleInput3"
                            value={this.state.contacts}
                            onChange={this.onContactsChange}
                        />
                    </div>

                    <div class="md-form md-outline">
                        <textarea 
                            id="form75" 
                            class="md-textarea form-control" 
                            rows="3"
                            placeholder="information about the camp"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        ></textarea>
                    </div>
                </div>
                { 
                this.state.avatar && 
                    <div className="col-md-4">
                        <Mini src={this.state.avatar}/>
                    </div>
                }
                <ImageUpload/>
                <button>Submit</button>
                </div>
            </form>
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


{/* <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Camp name</label>
    <input 
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="camp name">
        value={this.state.name}
        onChange={this.onNameChange}
  </div>

  <div class="form-group">
    <label for="formGroupExampleInput2">Location</label>
    <input 
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Location">
        value={this.state.location}
        onChange={this.onLocationChange}
  </div>

  <div class="form-group">
    <label for="formGroupExampleInput2">Price</label>
    <input 
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Price">
        value={this.state.price}
        onChange={this.onPriceChange}
  </div>

  <div class="form-group">
    <label for="formGroupExampleInput2">Contacts</label>
    <input 
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Contacts">
        value={this.state.contacts}
        onChange={this.onChange}
  </div>

</form> */}