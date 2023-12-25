import {
  observable,
  action,
  computed,
  reaction,
  makeAutoObservable,
} from 'mobx';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type Todo = {
  id?: string;
  title: string;
  completed: boolean;
};

class TodoStore {
  /** 아래 코드 문제 있음.  */
  // constructor() {
  //   reaction(
  //     () => this.todos,
  //     _ => console.log(this.todos.length),
  //   );
  // }

  /* 아래로 대체하면 정상 실행됨 */
  constructor() {
    makeAutoObservable(this);
  }

  @observable todos: Todo[] = [
    { id: uuidv4(), title: 'Item #1', completed: false },
    { id: uuidv4(), title: 'Item #2', completed: false },
    { id: uuidv4(), title: 'Item #3', completed: false },
    { id: uuidv4(), title: 'Item #4', completed: false },
    { id: uuidv4(), title: 'Item #5', completed: true },
    { id: uuidv4(), title: 'Item #6', completed: false },
  ];

  @action addTodo = (todo: Todo) => {
    console.log('store val : ', { ...todo, id: uuidv4() });
    this.todos.push({ ...todo, id: uuidv4() });
  };
  /* toggle버튼 클릭 */
  @action toggleTodo = (id: string) => {
    this.todos = this.todos.map(todo => {
      console.log(
        'id : ',
        id,
        'todo.id : ',
        todo.id,
        'todo.completed : ',
        todo.completed,
      );

      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  };

  @action removeTodo = (id: string) => {
    console.log('remove 버튼 클릭', id);
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  @computed get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length,
    };
  }
}

export default createContext(new TodoStore());
