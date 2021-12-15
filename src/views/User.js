import React, {useState, useContext, useEffect} from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateTodo from '../components/modals/CreateTodo'
import UpdateUser from '../components/modals/UpdateUser'



const User = () => {
    const [todoVisible, setTodoVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)
    

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTodoVisible(true)}
            >
                Create todo
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setUserVisible(true)}
            >
                Update user info
            </Button>
            <CreateTodo show={todoVisible} onHide={() => setTodoVisible(false)}/>
            <UpdateUser show={userVisible} onHide={() => setUserVisible(false)}/>
        </Container>
    );
}

export default User
