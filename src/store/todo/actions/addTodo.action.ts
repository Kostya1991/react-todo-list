import {IAction} from "../../../common/interfaces/Action.interface";
import {Todo} from "../../../common/interfaces/Todo.interface";
import {TODO_ADD_NAME} from "../consts/actionNames.const";

export const addTodo: (todo: Todo) => IAction<Todo> = (todo: Todo) => ({
  type: TODO_ADD_NAME,
  payload: todo,
});
