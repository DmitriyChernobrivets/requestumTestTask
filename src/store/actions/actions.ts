import { ACTION_TYPES } from '../../types/enums';
import { IAction } from '../../types/types';

export const fetchRepos = (value: string): IAction<string> => ({
   type: ACTION_TYPES.FETCH_REPOS,
   payload: value,
});
