import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import TodoStore from './store/TodoStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    todoList: new TodoStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);



