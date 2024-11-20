import {Store} from "../../../common/interfaces/Store";
import {Todo} from "../../../common/interfaces/Todo.interface";

export const getTodoAll = (store: Store): Todo[] => store.todo;
