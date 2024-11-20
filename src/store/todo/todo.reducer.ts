import {IAction} from "../../common/interfaces/Action.interface";
import {Todo} from "../../common/interfaces/Todo.interface";
import {TODO_ADD_NAME} from "./consts/actionNames.const";

const initialState: Todo[] = [];

export const todoReducer = (state: Todo[] = initialState, action: IAction) => {
  switch (action.type) {
    case TODO_ADD_NAME:
      return [...state, action.payload];
    default:
      return state;
  }
};
