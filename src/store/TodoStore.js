import { makeAutoObservable } from "mobx"

export default class TodoStore{
    todos = []
    constructor() { 
        makeAutoObservable(this)
    }

    addTodos(todos) {
        this.todos = todos.todos.slice()
    }
    
    todoIsDone(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, isCompleted:!todo.isCompleted}: todo)
    }

    todoIsFavourite(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, isFavourite:!todo.isFavourite}: todo)
    }

    todoSort(sort){
        console.log('sort', sort)
        if (sort.includes('done')){
            this.todos = this.todos.filter(todo => todo.isCompleted === true)
        }
        if (sort.includes('favourite')){
            this.todos = this.todos.filter(todo => todo.isFavourite === true)
        }
        if (sort.includes('not done')){
            this.todos = this.todos.filter(todo => todo.isCompleted === false)
        }
        
    }
}