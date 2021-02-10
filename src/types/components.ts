import { ChangeEvent } from 'react';
import { IRepoItem } from './types';

export type Nullable<T> = T | null;

export interface ICLayout {
   className?: string;
}
export interface ICInput {
   value?: string;
   onChange?: (v: ChangeEvent<HTMLInputElement>) => any;
   className?: string;
   placeholder?: string;
}
export interface ICRepo extends IRepoItem {
   idx: number;
}
