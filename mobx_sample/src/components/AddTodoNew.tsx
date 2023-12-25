import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import TodoStoreNew from '../stores/TodoStoreNew.ts';

const AddTodoNew = () => {
  const [title, setTitle] = useState('');
  const todoStore = TodoStoreNew.instance;
  const { addTodo, info } = todoStore;

  // useEffect(() => {
  //   console.log('변경됨-> state 값 저장', info.total);
  // });

  return (
    <>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          전체 아이템 갯수: &nbsp;
          <span className="badge badge-info">{info.total}</span> <br />
        </div>
        <div className="d-inline col-4">
          종료된 아이템: &nbsp;
          <span className="badge badge-info">{info.completed}</span>
        </div>
        <div className="d-inline col-4">
          종료되지 않은 아이템: &nbsp;
          <span className="badge badge-info">{info.notCompleted}</span>
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Todo title..."
          onChange={e => setTitle(e.target.value)}
        />{' '}
        &nbsp;
        <button
          className="btn btn-primary"
          onClick={_ => {
            addTodo({
              title: title,
              completed: false,
            });
            setTitle('');
          }}
        >
          Todo 추가
        </button>
      </div>
    </>
  );
};

export default observer(AddTodoNew);
