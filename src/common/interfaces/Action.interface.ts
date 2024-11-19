import {UnknownAction} from "redux";

export interface IAction<T = unknown> extends UnknownAction {
    type: string;
    payload: T;
}
