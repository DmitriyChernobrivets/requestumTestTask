import React, { FC, memo } from 'react';
import { IHistoryState } from '../../types/types';

const HistoryItem: FC<{ item: IHistoryState }> = ({ item }) => (
   <p className="history-item">{item}</p>
);

const HistoryList: FC<{ items: IHistoryState[] }> = memo(({ items }) => {
   return (
      <div className="history">
         <h4 className="history-title">Search history:</h4>
         {items.map((name: any, idx: number) => (
            <HistoryItem item={name} key={name + idx} />
         ))}
      </div>
   );
});

export default HistoryList;
