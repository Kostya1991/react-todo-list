import {IAction} from "../../../common/interfaces/Action.interface";
import {TODO_REMOVE_NAME} from "../consts/mainNames.const";

export const removeTodo: (id: string) => IAction<string> = (id: string) => ({
  type: TODO_REMOVE_NAME,
  payload: id,
});
