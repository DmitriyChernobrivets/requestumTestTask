import { IHistoryState, IAction } from '../../types/types';
import { ACTION_TYPES } from '../../types/enums';

const initialState: IHistoryState[] = [];

export default (store = initialState, { type, payload }: IAction<any>) => {
   switch (type) {
      case ACTION_TYPES.ADD_TO_HISTORY:
         return [payload, ...store.slice(0, 4)];
      default:
         return store;
   }
};
