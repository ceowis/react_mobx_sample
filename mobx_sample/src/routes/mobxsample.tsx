import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoAddNew from '../components/AddTodoNew';
import TodoListNew from '../components/TodoListNew';
import TodoListNewFunc from '../components/TodoListNewFunc';

const MobxSample = () => {
  return (
    <>
      <div className="container">
        <h1>Mobx Example</h1>
        <TodoAddNew />
        <TodoListNew />
      </div>
    </>
  );
};

export default MobxSample;
