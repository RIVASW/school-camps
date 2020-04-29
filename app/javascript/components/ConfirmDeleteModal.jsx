import React from 'react';
import { Modal, Button, Row, Col, Form, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const LoginStyled = styled.button`
    margin: 10px;
`;

export default function ConfirmDeleteModal(props) {
        return (
            <Modal
                show={props.show}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirm delete
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="container">

                        <Row>
                            <Col sm={6}>

                                <Form>
                                    <p>Do you really want to delete this camp?</p>

                                    <Form.Group>
                                        <Button onClick={props.onDeleteConfirm}>
                                            Delete
                                        </Button>{' '}
                                        <Button variant="secondary"onClick={props.onHide}>Cancel</Button>

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





