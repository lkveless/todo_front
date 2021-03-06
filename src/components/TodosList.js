import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../index"
import {observer} from "mobx-react-lite";
import { ListGroup, Button, Row } from 'react-bootstrap';
import { getTodos, todoDone, todoFavourite } from '../http/todoAPI';
import DeleteTodo from './modals/DeleteTodo';


const TodosList = observer(({sort}) => {
    const [deleteVisible, setDeleteVisible] = useState(false)
    let url = "http://localhost:3000/todo/"
    const [id, setId] = useState('')
    const {todoList} = useContext(Context)
    const [isCompleted, setIsCompleted] = useState('')
    const [isFavourite, setIsFavourite] = useState('')
    useEffect (() => {
        getTodos().then(response => {
            console.log('response', response)
            if (response !== null) {
                console.log('response',response)
                todoList.addTodos(response)
                todoList.todoSort(sort)
            } 
        })
    }, [sort])

    const onFavouriteClicked = async (id, isFavourite) =>{
        console.log(id, !isFavourite)
        todoList.todoIsFavourite(id); 
        todoFavourite(id, !isFavourite);
        
    }

    const onCompleteClicked = async (id, isCompleted) =>{
        console.log(id, !isCompleted)
        todoList.todoIsDone(id)
        todoDone(id, !isCompleted)
    }
   

    
    return (
        <ListGroup className='mt-2'>
            {todoList.todos.map(todo =>
            <ListGroup.Item key = {todo.id} className='d-flex justify-content-between '>
                <Row className='align-items-center'><a href={url + todo.id} style={todo.isCompleted ? {textDecoration:'line-through'}
                :
                {textDecoration:'none'}}>
                {todo.isFavourite ? '💎':''}
                {todo.title}
                
                </a>
                <div><a href={url + todo.id}>{todo.description}</a></div>
                </Row>
                
                <Row><Button style={{marginBottom:5}}
                    variant="dark"
                    onClick={() => {localStorage.setItem('todoID', todo.id); setDeleteVisible(true)}}
                >delete</Button>
                <DeleteTodo show={deleteVisible} onHide={() => setDeleteVisible(false)}/>
                <Button style={{marginBottom:5}} onClick ={() => {onCompleteClicked(todo.id, todo.isCompleted)}}
                    variant="dark"
                >complete</Button>
                <Button onClick = {() => {onFavouriteClicked(todo.id, todo.isFavourite)}
                }variant="dark"
                >favourite</Button></Row>
                
            </ListGroup.Item>

                    
            )}
        </ListGroup>
    )
})

export default TodosList
