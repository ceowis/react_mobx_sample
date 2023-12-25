import React, { useCallback, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import TodoStore from '../stores/TodoStoreNew.ts';

const TodoList = () => {
  const todoStore = TodoStore.instance;
  const { todos, toggleTodo, removeTodo } = todoStore;

  return (
    <div className="row">
      <table className="table table-hover">
        <thead className="thead-light" style={{ border: '1px' }}>
          <tr>
            <th>Title</th>
            <th>Completed?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? '✅' : ''}</td>
              <td>
                <button
                  className="btn btn-sm btn-info"
                  onClick={_ => toggleTodo(todo.id!)}
                >
                  Toggle
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={_ => removeTodo(todo.id!)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(TodoList);
