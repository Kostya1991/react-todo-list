import {IAction} from "../../../common/interfaces/Action.interface";
import {TODO_CHECKED_TOOGLE_NAME} from "../consts/actionNames.const";

interface Payload {
  checked: boolean;
  id: string;
}

export const toogleTodoChecked: (payload: Payload) => IAction<Payload> = (payload: Payload) => ({
  type: TODO_CHECKED_TOOGLE_NAME,
  payload,
});
