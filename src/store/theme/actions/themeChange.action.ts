import {THEME_CHANGE_NAME} from "../consts/actionNames.const";
import {IAction} from "../../../common/interfaces/Action.interface";

export const THEME_CHANGE: (theme: string) => IAction = (theme: string) => ({
    type: THEME_CHANGE_NAME,
    payload: theme,
});
