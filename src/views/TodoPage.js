import { observer } from 'mobx-react-lite'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Container, Form, Col, Button } from 'react-bootstrap'
import { getTodo, todoUpdate } from '../http/todoAPI'

const TodoPage = observer(() => {
    const [todo, setTodo] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        getTodo(id).then(data => setTodo(data))
    }, [])
    const [value, setValue] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
        const click = async () => {
            await todoUpdate(id, title, description)
        
    }
    return (
        
        <Container className='mt-5'>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Todo title</Form.Label>
                <Form.Control type="text" placeholder={todo.title} 
                value = {title}
                onChange = {e => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Todo description</Form.Label>
                <Form.Control type="text" as="textarea" placeholder={todo.description} rows={3} 
                value = {description}
                onChange = {e => setDescription(e.target.value)}/>
            </Form.Group>
            </Form>
            
            <Col className='d-flex justify-content-end'>
            
            <Button variant="dark" type="submit" onClick={click}>
                Update
            </Button>
            </Col>
        </Container>
    )
})

export default TodoPage
