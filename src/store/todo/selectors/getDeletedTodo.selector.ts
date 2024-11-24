import {Store} from "../../../common/interfaces/Store";

export const getDeletedTodo = (state: Store) => state.todo.find((todo) => todo.deleted)!;
