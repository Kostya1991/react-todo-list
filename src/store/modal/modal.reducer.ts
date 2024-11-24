import {IAction} from "../../common/interfaces/Action.interface";
import {ModalState} from "../../common/interfaces/ModalState.interface";
import {TODO_REMOVE_NAME, TODO_REMOVE_TOOGLE_NAME} from "../main/consts/mainNames.const";

const initialState: ModalState = {
  removeTodo: false,
};

export const modalReducer = (state: ModalState = initialState, action: IAction) => {
  switch (action.type) {
    case TODO_REMOVE_TOOGLE_NAME:
      return {
        ...state,
        removeTodo: action.payload.remove,
      };
    case TODO_REMOVE_NAME:
      return {
        ...state,
        removeTodo: false,
      };
    default:
      return state;
  }
};
