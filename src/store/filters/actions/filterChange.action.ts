import {IAction} from "../../../common/interfaces/Action.interface";
import {FILTER_CHANGE_NAME} from "../consts/actionNames.const";

export const filterChange: (name: string) => IAction<string> = (name: string) => ({
  type: FILTER_CHANGE_NAME,
  payload: name,
});
