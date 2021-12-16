import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { createTodo } from '../../http/todoAPI';


const CreateTodo = ({show, onHide}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const click = async () => {
        try{createTodo(title, description)}
        catch(e){
            alert('Отсутсвует название')
        }
    }

    

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create todo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {title}
                        placeholder={"Enter todo's title"}
                        onChange = {e => setTitle(e.target.value)}
                    />
                     <textarea
                        className='mt-2'
                        placeholder="Enter todo's description"
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                    />
                </Form>
                
                                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={click}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTodo;