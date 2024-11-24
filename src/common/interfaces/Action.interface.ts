import {UnknownAction} from "redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IAction<T = any> extends UnknownAction {
  type: string;
  payload: T;
}
