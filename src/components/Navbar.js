import React, {useContext} from 'react'
import {Context} from "../index"
import{Navbar, Nav, Container, Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { logout } from '../http/userAPI';
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut = () => {
        logout()
        user.setIsAuth(false)
        console.log(user.setIsAuth)
    }
    return (
        <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Button style={{marginRight:10}} variant="light" onClick={() => history.push('/blank')}>Home</Button>
    {user.isAuth ?
        <Nav className="me-auto">
        <Button style={{marginRight:10}} variant="light" onClick={() => history.push('/user_page')}>User page</Button>
        <Button style={{marginRight:10}} variant="light" onClick={() => history.push('/todos')}>Todos</Button>
        <Button style={{marginRight:10}} variant="light" onClick={() => {logOut(); history.push('/blank')}}>Logout</Button>
        </Nav>
    :
        <Nav className="me-auto">
            <Button style={{marginRight:10}} variant="light" onClick={() => history.push('/login')}>Login</Button>
            <Button style={{marginRight:10}} variant="light" onClick={() => history.push('/register')}>Register</Button>
        </Nav>
    }
     
    </Container>
  </Navbar>
</>
    )
})

export default NavBar
