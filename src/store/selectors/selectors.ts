import { IStore, IRepoState, IHistoryState } from '../../types/types';

export const selectRepos = (state: IStore): IRepoState => state.repos;
export const selectHistory = (state: IStore): IHistoryState[] => state.history;
