import React, { FC, memo } from 'react';
import { ICRepo } from '../../types/components';
import Preloader from '../Preloader/Preloader';
import NotFound from '../Errors/NotFound';
import Welcome from '../Errors/Welcome';
import { isNull, isEmpty } from 'lodash';

const RepoItem: FC<ICRepo> = ({ name, description, language, idx }) => (
   <li
      className="repos-item"
      style={{ animationDuration: (idx + 1) * 0.2 + 's' }}
   >
      <p className="repos-name">{name}</p>
      <p className="repos-lang">
         Language: <span className="repos-lang-text">{language || '-'}</span>
      </p>
      <p className="repos-description">
         Description:{' '}
         <span className="repos-description-text">{description || '-'}</span>
      </p>
   </li>
);

const ReposList = memo(({ items, loading }: any) => {
   if (isNull(items)) {
      return <Welcome />;
   }
   if (isEmpty(items)) {
      return <NotFound />;
   }
   return (
      <ul className="repos">
         {loading ? (
            <Preloader />
         ) : (
            items.map((item: any, idx: number) => (
               <RepoItem {...item} key={item.name + idx} idx={idx} />
            ))
         )}
      </ul>
   );
});

export default ReposList;
