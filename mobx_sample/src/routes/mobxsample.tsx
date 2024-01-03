import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoAdd from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoAddNew from '../components/AddTodoNew';
import TodoListNew from '../components/TodoListNew';
import TodoListNewFunc from '../components/TodoListNewFunc';

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
