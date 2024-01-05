import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoAdd from '../components/AddTodo.tsx';
import TodoList from '../components/TodoList.tsx';
import TodoAddNew from '../components/AddTodoNew.tsx';
import TodoListNew from '../components/TodoListNew.tsx';
import TodoListNewFunc from '../components/TodoListNewFunc.tsx';

const MobxSample = () => {
  return (
    <>
      <div className="container">
        <h1>Mobx Example</h1>
        <TodoAdd />
        <br />
        <TodoList />
        <br />
        <TodoAddNew />
        <TodoListNew />
      </div>
    </>
  );
};

export default MobxSample;
