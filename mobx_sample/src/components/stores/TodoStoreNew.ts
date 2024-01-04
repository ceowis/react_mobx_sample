import { computed, makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

// export type Todo = {
//   id?: string;
//   title: string;
//   completed: boolean;
// };

const DEFALUT_VALUE = [
  { id: uuidv4(), title: 'Item #1', completed: false },
  { id: uuidv4(), title: 'Item #2', completed: false },
  { id: uuidv4(), title: 'Item #3', completed: false },
  { id: uuidv4(), title: 'Item #4', completed: false },
  { id: uuidv4(), title: 'Item #5', completed: true },
  { id: uuidv4(), title: 'Item #6', completed: false },
];

class TodoStoreNew {
  static instance: TodoStoreNew;

  todos: any[] = DEFALUT_VALUE;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: any) => {
    this.todos.push({ ...todo, id: uuidv4() });
  };

  toggleTodo = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  };

  removeTodo = (id: string) => {
    // console.log('remove 버튼 클릭', id);
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  getTodoLength = () => this.todos.length;

  /* 데코레이터 변경 전  */
  // @computed get info() {
  //   return {
  //     total: this.todos.length,
  //     completed: this.todos.filter(todo => todo.completed).length,
  //     notCompleted: this.todos.filter(todo => !todo.completed).length,
  //   };
  // }

  /* 데코레이터 변경 후  */
  get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length,
    };
  }
}

TodoStoreNew.instance = new TodoStoreNew();
export default TodoStoreNew;
