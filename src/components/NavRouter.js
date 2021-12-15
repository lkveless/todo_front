import React, { useContext } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Context } from '..'
import { loginRoutes, notLoginRoutes } from '../routes'
import {observer} from "mobx-react-lite"

const NavRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
           { user.isAuth && loginRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact/>
           )}
            {notLoginRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact/>
           )}
           <Redirect to ='/blank'/>
        </Switch>
    )
})

export default NavRouter
