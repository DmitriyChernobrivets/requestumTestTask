import { ACTION_TYPES } from './enums';
import {Nullable} from "./components";

export interface IStore {
   repos: IRepoState;
   history: IHistoryState[];
}

export interface IRepoState {
   loading: boolean;
   items: Nullable<IRepoItem[]>;
   errors: IErrors | null;
}
export interface IRepoItem {
   language: string;
   name: string;
   description: string;
   html_url: string;
}
export type IHistoryState = string;

export interface IErrors {
   message: string;
   status: number;
}

export interface IAction<P> {
   type: ACTION_TYPES;
   payload: P;
}
