import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Button} from "react-bootstrap";
import { todoDelete } from '../../http/todoAPI';



const DeleteTodo = ({ show, onHide}) => {
    let id = localStorage.getItem('todoID')
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    DELETE TODO
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>are you sure you want to delete?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
                <Button variant="outline-success" onClick={() => {console.log(id); todoDelete(id)}} href='/todos'>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteTodo;