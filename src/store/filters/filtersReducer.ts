import {IAction} from "../../common/interfaces/Action.interface";
import {FILTER_CHANGE_NAME} from "./consts/actionNames.const";

const initialValue: "all" | "completed" | "uncompleted" = "all";

export const filtersReducer = (state = initialValue, action: IAction) => {
  switch (action.type) {
    case FILTER_CHANGE_NAME:
      return action.payload;
    default:
      return state;
  }
};
