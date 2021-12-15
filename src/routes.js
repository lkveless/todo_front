import Auth from "./views/Auth"
import Blank from "./views/Blank"
import TodoPage from "./views/TodoPage"
import Todos from "./views/Todos"
import User from "./views/User"

export const loginRoutes =[
    {
        path: '/todos',
        Component: Todos
    },
    {
        path: '/todo/:id',
        Component: TodoPage
    },
    {
        path: '/user_page',
        Component: User
    }
]
export const notLoginRoutes =[
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/register',
        Component: Auth
    },
    {
        path: '/blank',
        Component: Blank
    }
]