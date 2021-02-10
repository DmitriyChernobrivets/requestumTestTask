import React, { FC } from 'react';
import empty from '../../assets/17-512.webp';

const NotFound: FC<any> = () => {
   return (
      <div className="result-not-found">
         <div className="image-wrapper">
            <img src={empty} alt={'photo2'} />
         </div>
         <div className="text">
            <h1>Oops, Sorry!</h1>
            <p>Result not found!</p>
         </div>
      </div>
   );
};

export default NotFound;
