import {IAction} from "../../common/interfaces/Action.interface";
import {Todo} from "../../common/interfaces/Todo.interface";
import {TODO_REMOVE_NAME, TODO_REMOVE_TOOGLE_NAME} from "../main/consts/mainNames.const";
import {TODO_ADD_NAME, TODO_CHECKED_TOOGLE_NAME} from "./consts/actionNames.const";

const initialState: Todo[] = [];

export const todoReducer = (state: Todo[] = initialState, action: IAction) => {
  switch (action.type) {
    case TODO_ADD_NAME:
      return [...state, action.payload];
    case TODO_CHECKED_TOOGLE_NAME:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo, completed: action.payload.checked};
        }
        return todo;
      });
    case TODO_REMOVE_TOOGLE_NAME:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo, deleted: action.payload.remove};
        }
        return todo;
      });
    case TODO_REMOVE_NAME:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
