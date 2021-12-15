import React, {useContext} from 'react'
import {Context} from "../index"
import{Navbar, Nav, Container, Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { logout } from '../http/userAPI';


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const logOut = () => {
        logout()
        user.setIsAuth(false)
        console.log(user.setIsAuth)
    }
    return (
        <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Button style={{marginRight:10}} variant="light" href='/blank'>Home</Button>
    {user.isAuth ?
        <Nav className="me-auto">
        <Button style={{marginRight:10}} variant="light" href='/user_page'>User page</Button>
        <Button style={{marginRight:10}} variant="light" href='/todos'>Todos</Button>
        <Button style={{marginRight:10}} variant="light" onClick={() => logOut()} href='/blank'>Logout</Button>
        </Nav>
    :
        <Nav className="me-auto">
        <Button style={{marginRight:10}} variant="light" href='/login' >Login</Button>
        <Button style={{marginRight:10}} variant="light" href='/register'>Register</Button>
        </Nav>
    }
     
    </Container>
  </Navbar>
</>
    )
})

export default NavBar
