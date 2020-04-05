import React from 'react';
import { Modal, Button, Row, Col, Form, Alert } from 'react-bootstrap';
import styled from 'styled-components';

const LoginStyled = styled.button`
    margin: 10px;
`;

export default class ModalLoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onLogin({
            userName: e.target.userName.value,
            userPassword: e.target.userPassword.value
        });

        console.log(e.target.userName.value);
        console.log(e.target.userPassword.value);
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign in
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="container">

                        <Row>
                            <Col sm={6}>
                                {this.props.isLoginError &&
                                    <Alert variant="danger">Wrong e-mail or password</Alert>
                                }

                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="userName">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="userName"
                                            required
                                            placeholder="entrer you e-mail"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="userPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="userPassword"
                                            required
                                            placeholder="entrer you password"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button type="submit">
                                            Sign in
                                    </Button>{' '}
                                        <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>

                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                    </div>
                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }
}





