import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme.reducer";
import {todoReducer} from "./todo/todo.reducer";
import {modalReducer} from "./modal/modal.reducer";
import {filtersReducer} from "./filters/filtersReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  todo: todoReducer,
  modal: modalReducer,
  filters: filtersReducer,
});
