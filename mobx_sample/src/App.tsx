import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import _ from 'lodash';
import TodoList from './components/TodoList.tsx';
import TodoAdd from './components/AddTodo.tsx';
import TodoAddNew from './components/AddTodoNew.tsx';
import TodoListNew from './components/TodoListNew.tsx';
import TodoListNewFunc from './components/TodoListNewFunc.tsx';

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Todos</h1>
        <TodoAdd />
        <br />
        <TodoList />
        <br />
        <TodoAddNew />
        <TodoListNew />

        <br />
        <TodoListNewFunc />
      </div>
    </>
  );
};

export default App;
