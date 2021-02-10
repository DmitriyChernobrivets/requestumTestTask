import { combineReducers } from 'redux';
import { IStore } from '../../types/types';
import repos from './repos';
import history from './history';

export default combineReducers<IStore>({
   repos,
   history,
});
