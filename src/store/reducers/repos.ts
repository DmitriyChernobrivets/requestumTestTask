import { IAction, IRepoState } from '../../types/types';
import { ACTION_TYPES } from '../../types/enums';


const initialState: IRepoState = {
   loading: false,
   items: null,
   errors: null,
};

export default (store = initialState, { type, payload }: IAction<any>) => {
   switch (type) {
      case ACTION_TYPES.FETCH_REPOS_START:
         return { ...store, loading: true, errors: null };
      case ACTION_TYPES.FETCH_REPOS_SUCCESS:
         return { loading: false, errors: null, items: payload };
      case ACTION_TYPES.FETCH_REPOS_FAILURE:
         return { ...store, loading: false, errors: payload };
      default:
         return store;
   }
};
