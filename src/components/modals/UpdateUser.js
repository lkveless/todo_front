import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { updateUser } from '../../http/userAPI';


const UpdateUser = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [login, setLogin] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState(false)
    const click = async () => {
            updateUser(localStorage.getItem('id'), email, login, name).catch(function(error){
                setState(true)
            })
        
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update user
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value} type="email"
                         placeholder={"Enter user's email"}
                         value = {email}
                         onChange = {e => setEmail(e.target.value)}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={value}
                         placeholder={"Enter user's login"}
                         value = {login}
                         onChange = {e => setLogin(e.target.value)}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={value}
                         placeholder={"Enter user's name"}
                         value = {name}
                         onChange = {e => setName(e.target.value)}
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

export default UpdateUser;