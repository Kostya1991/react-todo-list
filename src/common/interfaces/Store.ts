import {ThemeState} from "../../store/theme/types/state.type";
import {Todo} from "./Todo.interface";

export interface Store {
  theme: ThemeState;
  todo: Todo[];
}
