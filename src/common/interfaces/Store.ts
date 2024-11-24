import {ThemeState} from "../../store/theme/types/state.type";
import {ModalState} from "./ModalState.interface";
import {Todo} from "./Todo.interface";

export interface Store {
  theme: ThemeState;
  todo: Todo[];
  modal: ModalState;
  filters: "all" | "completed" | "uncompleted";
}
