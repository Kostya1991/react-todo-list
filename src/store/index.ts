import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme.reducer";
import {todoReducer} from "./todo/todo.reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  todo: todoReducer,
});
