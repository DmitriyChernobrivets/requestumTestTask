import React, { useState, useCallback, ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input/Input';
import HistoryList from '../components/History/HistoryList';
import ReposList from '../components/Repos/ReposList';
import debounce from 'lodash/debounce';
import { fetchRepos } from '../store/actions/actions';
import { selectRepos, selectHistory } from '../store/selectors/selectors';
import { isStartsFromSpace, removeSpaces } from '../helpers/helpers';

const GitHubSearcher: FC<any> = () => {
   const [searchValue, setSearch] = useState<string>('');
   const { items: repoItems, loading } = useSelector(selectRepos);
   const historyItems = useSelector(selectHistory);
   const dispatch = useDispatch();

   const debouncedFetch = useCallback(
      debounce((value) => value.trim() && dispatch(fetchRepos(value)), 1000),
      [],
   );

   const onChangeInput = ({
      target: { value },
   }: ChangeEvent<HTMLInputElement>) => {
      if (isStartsFromSpace(value)) return;

      setSearch(removeSpaces(value));
      debouncedFetch(removeSpaces(value));
   };
   return (
      <>
         <div className="left-block">
            <Input
               onChange={onChangeInput}
               value={searchValue}
               placeholder="Enter search term"
            />
            <HistoryList items={historyItems} />
         </div>

         <ReposList items={repoItems} loading={loading} />
      </>
   );
};

export default GitHubSearcher;
