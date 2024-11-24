import {Store} from "../../../common/interfaces/Store";
import {Todo} from "../../../common/interfaces/Todo.interface";

export const getTodoAll = (store: Store): Todo[] => {
  switch (store.filters) {
    case "all":
      return store.todo;
    case "completed":
      return store.todo.filter((todo) => todo.completed);
    case "uncompleted":
      return store.todo.filter((todo) => !todo.completed);
    default:
      return store.todo;
  }
};
