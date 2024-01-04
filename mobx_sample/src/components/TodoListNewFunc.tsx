import React, { useCallback, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
// import TodoStore from '../stores/TodoStore.ts';
import TodoStoreNew from 'src/components/stores/TodoStoreNew';

const TodoListNewFunc = () => {
  const { todos, toggleTodo, removeTodo } = TodoStoreNew.instance;

  const rederingList = useCallback(() => {
    return todos.map(todo => (
      <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>{todo.completed ? '✅' : ''}</td>
        <td>
          <button
            className="btn btn-sm btn-info"
            onClick={_ => toggleTodo(todo && todo.id ? todo.id : '')}
          >
            Toggle
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={_ => removeTodo(todo && todo.id ? todo.id : '')}
          >
            Remove
          </button>
        </td>
      </tr>
    ));
  }, [todos]);

  return (
    <>
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light" style={{ border: '1px' }}>
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rederingList()}</tbody>
        </table>
      </div>
    </>
  );
};

export default observer(TodoListNewFunc);
