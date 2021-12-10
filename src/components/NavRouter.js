import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { loginRoutes, notLoginRoutes } from '../routes'

const NavRouter = () => {
    const isAuth = false

    return (
        <Switch>
           { isAuth && loginRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact/>
           )}
            {notLoginRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact/>
           )}
           <Redirect to ='/blank'/>
        </Switch>
    )
}

export default NavRouter
