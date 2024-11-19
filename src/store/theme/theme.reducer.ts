import {IAction} from "../../common/interfaces/Action.interface";
import {THEME_CHANGE_NAME} from "./consts/actionNames.const";
import {ThemeState} from "./types/state.type";

const initialState: ThemeState = "light";

export const themeReducer = (state: ThemeState = initialState, action: IAction) => {
    switch (action.type) {
        case THEME_CHANGE_NAME:
            return action.payload;
        default:
            return state;
    }
};
