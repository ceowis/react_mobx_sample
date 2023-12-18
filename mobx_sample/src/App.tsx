import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import _ from 'lodash';
import TodoList from './components/TodoList.tsx';
import TodoAdd from './components/AddTodo.tsx';

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Todos</h1>
        <TodoAdd />
        <TodoList />
      </div>
    </>
  );
};

export default App;
