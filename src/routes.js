import Auth from "./views/Auth"
import Blank from "./views/Blank"
import CreateTodo from "./views/CreateTodo"
import TodoPage from "./views/TodoPage"
import Todos from "./views/Todos"

export const loginRoutes =[
    {
        path: '/todos',
        Component: Todos
    },
    {
        path: '/single_todo',
        Component: TodoPage
    },
    {
        path: '/create_todo',
        Component: CreateTodo
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