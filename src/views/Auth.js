import React, {useContext, useState} from 'react';
import {Container, Form} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row"
import {NavLink, useLocation, useHistory} from "react-router-dom"
import {observer} from "mobx-react-lite";
import { loginn, registration } from '../http/userAPI'
import {Context} from "../index"


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === '/login'
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
     let data
            if(isLogin){
                try{data = await loginn(email, login, password)
                console.log(data)}
                catch(error){
                    alert('Введите верные данные')
                }
    
            }else{
                try{data = await registration(email, login, password)
                console.log(data)}
                catch(error){
                    alert('Некорректный ввод!')
                }
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push('/blank')
            
        
        
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"   
        >
            <Card className="p-5">
            <h2 className="m-auto p-2">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form>
                    <Form.Group className="mb-3 pt-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        value={email} onChange={e => setEmail(e.target.value)}/>                  
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLogin">
                        <Form.Label>login</Form.Label>
                        <Form.Control type="text" placeholder="Enter login" 
                        value={login} onChange={e => setLogin(e.target.value)}/>                  
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    
                    {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink style={{color: 'black'}} to='/register'>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink style={{color: 'black'}} to='/login'>Войдите!</NavLink>
                            </div>
                        }
                     <Button className="mt-3"
                            variant={"dark"}
                           onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
