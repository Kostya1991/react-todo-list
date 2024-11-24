import {IAction} from "../../../common/interfaces/Action.interface";
import {TODO_REMOVE_TOOGLE_NAME} from "../consts/mainNames.const";

interface Payload {
  id: string;
  remove: boolean;
}

export const changeRemoveModal: (payload: Payload) => IAction<Payload> = (payload: Payload) => ({
  type: TODO_REMOVE_TOOGLE_NAME,
  payload,
});
